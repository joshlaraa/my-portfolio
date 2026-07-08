import { LegalLayout, LegalSection } from "@/components/legal-layout";

export function Terms() {
  return (
    <LegalLayout title="Terms of Use" updated="July 8, 2026">
      <p>
        By accessing and using this portfolio website, you agree to the following
        terms. If you do not agree with these terms, please do not use the site.
      </p>

      <LegalSection heading="Use of this site">
        <p>
          This website is provided for informational purposes to showcase my work
          and background. You are welcome to browse the content freely. You agree
          not to use the site in any way that could damage, disable, or impair its
          functionality.
        </p>
      </LegalSection>

      <LegalSection heading="Accuracy of information">
        <p>
          I do my best to keep the information on this site current and accurate,
          but I make no guarantees that it is complete or up to date at all times.
          Content may change without notice.
        </p>
      </LegalSection>

      <LegalSection heading="External links">
        <p>
          This site may link to third-party websites. These links are provided
          for convenience only, and I am not responsible for the content or
          practices of any external sites.
        </p>
      </LegalSection>

      <LegalSection heading="Limitation of liability">
        <p>
          This site is provided "as is" without warranties of any kind. I am not
          liable for any damages arising from your use of, or inability to use,
          this website.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          Questions about these terms? Reach out at{" "}
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
