import { LegalLayout, LegalSection } from "@/components/legal-layout";

export function Privacy() {
  return (
    <LegalLayout title="Privacy Policy" updated="July 8, 2026">
      <p>
        This Privacy Policy describes how information is handled when you visit
        this portfolio website. This is a personal site, and I aim to collect as
        little data as possible.
      </p>

      <LegalSection heading="Information I collect">
        <p>
          I do not ask you to create an account or submit personal information to
          browse this site. If you choose to reach out via the email address or
          social links provided, any information you share (such as your name and
          email address) is used solely to respond to you.
        </p>
      </LegalSection>

      <LegalSection heading="Analytics">
        <p>
          This site uses privacy-friendly analytics (Vercel Analytics) to
          understand aggregate traffic patterns, such as page views and general
          location. This data is anonymized and is not used to personally
          identify you or track you across other websites.
        </p>
      </LegalSection>

      <LegalSection heading="Cookies and local storage">
        <p>
          The only data stored in your browser is your theme preference (light or
          dark mode), which is saved in local storage so the site remembers your
          choice. This never leaves your device.
        </p>
      </LegalSection>

      <LegalSection heading="Third-party links">
        <p>
          This site contains links to external websites (such as GitHub and
          LinkedIn). I am not responsible for the privacy practices of those
          sites and encourage you to review their policies.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          If you have any questions about this Privacy Policy, feel free to reach
          out at{" "}
          <a
            href="mailto:joshualara9087@gmail.com"
            className="text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity"
          >
            joshualara9087@gmail.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
