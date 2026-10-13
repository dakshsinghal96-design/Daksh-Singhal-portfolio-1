// camera.js — webcam access + sizing.
// Requests the front camera, attaches the stream to the <video>, and resolves
// once real frames are flowing (videoWidth/Height > 0). The video is mirrored
// in CSS (see style.css); trackers flip landmark x to match.

export class CameraError extends Error {
  constructor(message, kind) {
    super(message);
    this.name = "CameraError";
    this.kind = kind; // 'denied' | 'notfound' | 'insecure' | 'unsupported' | 'unknown'
  }
}

// Initialize the camera into the given <video> element.
// Returns { video, width, height, stream }. Throws CameraError on failure.
export async function initCamera(video, { width = 1280, height = 720 } = {}) {
  if (!navigator.mediaDevices?.getUserMedia) {
    // getUserMedia is gated to secure contexts (https / localhost).
    const insecure = !window.isSecureContext;
    throw new CameraError(
      insecure
        ? "Camera needs a secure context. Open the app via http://localhost or https://, not file://."
        : "This browser does not support camera access (getUserMedia).",
      insecure ? "insecure" : "unsupported"
    );
  }

  let stream;
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        facingMode: "user",
        width: { ideal: width },
        height: { ideal: height },
      },
    });
  } catch (err) {
    throw mapGumError(err);
  }

  video.srcObject = stream;
  video.setAttribute("playsinline", "");
  video.muted = true;

  // Wait for real pixel dimensions, then for playback to actually start.
  await once(video, "loadeddata");
  try {
    await video.play();
  } catch {
    // Autoplay can reject if not user-initiated; the Start button covers this,
    // but if it still fails we surface it via the caller.
  }
  await waitForFrames(video);

  return {
    video,
    stream,
    get width() { return video.videoWidth; },
    get height() { return video.videoHeight; },
  };
}

// Stop all tracks (used on teardown).
export function stopCamera(stream) {
  stream?.getTracks?.().forEach((t) => t.stop());
}

/* ------------------------------------------------------------------ */

function mapGumError(err) {
  const name = err?.name || "";
  switch (name) {
    case "NotAllowedError":
    case "SecurityError":
      return new CameraError(
        "Camera permission was blocked. Allow camera access in the browser and reload.",
        "denied"
      );
    case "NotFoundError":
    case "OverconstrainedError":
      return new CameraError("No camera was found on this device.", "notfound");
    case "NotReadableError":
      return new CameraError(
        "The camera is in use by another app. Close it and reload.",
        "unknown"
      );
    default:
      return new CameraError(
        `Could not start the camera (${name || "unknown error"}).`,
        "unknown"
      );
  }
}

function once(el, event) {
  return new Promise((resolve) => {
    const handler = () => { el.removeEventListener(event, handler); resolve(); };
    el.addEventListener(event, handler, { once: true });
  });
}

// Resolve when the video reports usable dimensions. Guards against a 0x0 frame.
function waitForFrames(video, timeoutMs = 8000) {
  return new Promise((resolve, reject) => {
    const start = performance.now();
    const check = () => {
      if (video.videoWidth > 0 && video.videoHeight > 0 && video.readyState >= 2) {
        resolve();
      } else if (performance.now() - start > timeoutMs) {
        reject(new CameraError("Camera stream did not produce frames in time.", "unknown"));
      } else {
        requestAnimationFrame(check);
      }
    };
    check();
  });
}
