import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name.en} handles personal data on ucsmsc.org.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="1 October 2026">
      <section>
        <h2>Who we are</h2>
        <p>
          {site.name.en} (&ldquo;UCSM&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;)
          operates the link directory at <strong>www.ucsmsc.org</strong>{" "}
          (&ldquo;this website&rdquo;) to help students, applicants and
          visitors reach the university&rsquo;s official online services. This
          policy explains what personal data we process when you use this
          website and how we protect it.
        </p>
      </section>

      <section>
        <h2>Data we collect</h2>
        <p>
          This website is intentionally minimal. We do not create user accounts
          and we do not ask you to submit forms.
        </p>
        <ul>
          <li>
            <strong>Data you give us directly:</strong> only what you choose to
            send when you contact us by email or phone (name, contact details
            and the content of your message).
          </li>
          <li>
            <strong>Data stored in your browser:</strong> your colour-theme
            choice and your cookie-consent choice, kept in{" "}
            <code>localStorage</code> on your own device. They never leave your
            device. See our <Link href="/cookies">Cookie Policy</Link>.
          </li>
          <li>
            <strong>Technical data:</strong> like most websites served over the
            public internet, our hosting provider may temporarily record basic
            request information such as IP address, browser type and the page
            requested, for security and reliability purposes only.
          </li>
          <li>
            <strong>Optional analytics:</strong> if you accept analytics
            cookies via the consent banner, aggregate usage statistics may be
            collected to help us understand which links students use most.
            Analytics are disabled unless you consent.
          </li>
        </ul>
      </section>

      <section>
        <h2>How we use data</h2>
        <ul>
          <li>To operate and secure this website.</li>
          <li>To remember your display preferences.</li>
          <li>
            To respond to enquiries sent to our contact addresses.
          </li>
          <li>
            To improve the service, based on aggregated analytics only with
            your consent.
          </li>
        </ul>
        <p>
          We do not sell personal data, we do not share it for advertising, and
          we do not use it for automated decision-making.
        </p>
      </section>

      <section>
        <h2>Third-party links and embeds</h2>
        <p>
          This website links to external services such as the university
          portal, results systems and social networks. Once you follow a link,
          the destination site&rsquo;s own privacy policy applies. We are not
          responsible for the data practices of third parties. The embedded map
          loads content from Google under its own terms.
        </p>
      </section>

      <section>
        <h2>Data retention</h2>
        <p>
          Browser preferences persist until you clear your local storage or
          reset them from the cookie banner. Enquiry emails are kept only as
          long as needed to answer them and to meet legal record-keeping
          obligations.
        </p>
      </section>

      <section>
        <h2>Your rights</h2>
        <p>
          Depending on where you live, you may have the right to access,
          correct, delete or port your personal data, to withdraw consent, and
          to object to certain processing. Because we hold very little data,
          most requests can be satisfied simply by clearing your browser
          storage. To exercise any right, contact us using the details below.
        </p>
      </section>

      <section>
        <h2>Security</h2>
        <p>
          The site is served exclusively over HTTPS, fonts and scripts are
          self-hosted where possible to limit third-party exposure, and access
          to the hosting environment is restricted to authorised IT staff.
        </p>
      </section>

      <section>
        <h2>Children&rsquo;s privacy</h2>
        <p>
          This website is a general public directory and is not directed at
          children under 13. We do not knowingly collect personal data from
          children through this site. If you believe a child has provided us
          information, please contact us so we can remove it.
        </p>
      </section>

      <section>
        <h2>Changes to this policy</h2>
        <p>
          We may update this policy from time to time. Material changes will be
          reflected on this page with a new &ldquo;last updated&rdquo; date.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Data controller: {site.name.en}, {site.contact.address.en}.
        </p>
        <p>
          Email:{" "}
          <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>{" "}
          · Phone: {site.contact.phone}
        </p>
      </section>
    </LegalPage>
  );
}
