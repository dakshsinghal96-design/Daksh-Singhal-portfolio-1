import { profile } from '../data/profile';
import { useAssetAvailable } from '../hooks/useAssetAvailable';
import { IconDownload } from './icons';

/**
 * Résumé download.
 *
 * Renders a real download link only once the PDF has actually been verified to
 * exist. While unverified it is disabled and says why, so the button never
 * promises a file the site cannot deliver.
 */
export default function ResumeButton({ variant = 'secondary' }: { variant?: 'primary' | 'secondary' }) {
  const state = useAssetAvailable(profile.resume.href, 'pdf');

  if (state === 'available') {
    return (
      <a
        className={variant === 'primary' ? 'btn-primary' : 'btn-secondary'}
        href={profile.resume.href}
        download={profile.resume.downloadAs}
      >
        <IconDownload aria-hidden="true" />
        Download Résumé
      </a>
    );
  }

  return (
    <span className="inline-flex flex-col gap-1">
      <button type="button" className="btn-secondary" disabled aria-describedby="resume-status">
        <IconDownload aria-hidden="true" />
        Download Résumé
      </button>
      <span id="resume-status" className="text-xs text-muted">
        {state === 'checking' ? 'Checking availability…' : 'Résumé PDF not uploaded yet'}
      </span>
    </span>
  );
}
