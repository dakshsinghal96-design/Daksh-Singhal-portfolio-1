import ContactCard from '../components/ContactCard';
import ContactForm from '../components/ContactForm';
import EmptyState from '../components/EmptyState';
import Seo from '../components/Seo';
import { PageHeader } from '../components/headings';
import { IconInstagram, IconLinkedIn, IconMail, IconPhone, IconPin } from '../components/icons';
import { hasChannel, profile } from '../data/profile';

export default function Contact() {
  const { phone, email, linkedin, instagram, location } = profile.contact;

  // Every row is conditional on a real value, so nothing renders as a
  // placeholder and no link points nowhere.
  const channels = [
    hasChannel(phone) && {
      key: 'phone',
      Icon: IconPhone,
      label: 'Phone',
      value: phone.display ?? phone.value,
      href: `tel:${phone.value.replace(/[^\d+]/g, '')}`,
      copyable: true,
    },
    hasChannel(email) && {
      key: 'email',
      Icon: IconMail,
      label: 'Email',
      value: email.display ?? email.value,
      href: `mailto:${email.value}`,
      copyable: true,
    },
    hasChannel(linkedin) && {
      key: 'linkedin',
      Icon: IconLinkedIn,
      label: 'LinkedIn',
      value: linkedin.display ?? linkedin.value,
      href: linkedin.value,
      external: true,
    },
    hasChannel(instagram) && {
      key: 'instagram',
      Icon: IconInstagram,
      label: 'Instagram',
      value: instagram.display ?? instagram.value,
      href: instagram.value,
      external: true,
    },
    hasChannel(location) && {
      key: 'location',
      Icon: IconPin,
      label: 'Location',
      value: location.display ?? location.value,
    },
  ].filter(Boolean) as {
    key: string;
    Icon: typeof IconMail;
    label: string;
    value: string;
    href?: string;
    external?: boolean;
    copyable?: boolean;
  }[];

  return (
    <>
      <Seo
        title={`Contact — ${profile.name}`}
        description="Get in touch about collaboration, internships, or any project worth building."
      />

      <PageHeader
        eyebrow="Contact"
        title="Let’s build something interesting."
        gradient
        description="Open to collaboration, internships and student projects. The fastest way to reach me is below."
      />

      <section className="shell grid gap-10 pb-24 lg:grid-cols-[.9fr_1.1fr] lg:gap-14">
        <div>
          <h2 className="mb-5 font-display text-sm font-semibold uppercase tracking-[0.16em] text-shard">
            Reach me directly
          </h2>

          {channels.length > 0 ? (
            <div className="space-y-4">
              {channels.map(({ key, ...rest }) => (
                <ContactCard key={key} {...rest} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="Contact details are being added."
              description="Phone, email and social links will appear here once confirmed in src/data/profile.ts."
            />
          )}
        </div>

        <div className="scrim">
          <h2 className="mb-5 font-display text-sm font-semibold uppercase tracking-[0.16em] text-shard">
            Send a message
          </h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
