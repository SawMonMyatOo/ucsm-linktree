import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `What cookies and similar technologies ${site.name} uses on ucsmsc.org.`,
  alternates: { canonical: "/cookies" },
};

export default function CookiePage() {
  return (
    <LegalPage title="Cookie Policy" updated="1 October 2026">
      <section>
        <h2>What cookies are</h2>
        <p>
          Cookies are small files a website stores in your browser. Similar
          technologies, such as <code>localStorage</code>, keep small pieces of
          data on your device in the same way. This policy explains which of
          them this website uses, why, and how you can control them.
        </p>
      </section>

      <section>
        <h2>How we use cookies</h2>
        <p>
          We use strictly necessary storage to make the page work the way you
          expect, and optional analytics only after you give consent through
          the banner shown on your first visit. We do not use advertising or
          tracking cookies.
        </p>
      </section>

      <section>
        <h2>Cookies and storage we use</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Purpose</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>ucsm-theme</code>
              </td>
              <td>Strictly necessary (localStorage)</td>
              <td>Remembers your light / dark colour preference.</td>
              <td>Until you clear site data</td>
            </tr>
            <tr>
              <td>
                <code>ucsm-cookie-consent</code>
              </td>
              <td>Strictly necessary (localStorage)</td>
              <td>Records whether you accepted or declined optional cookies.</td>
              <td>Until you reset preferences</td>
            </tr>
            <tr>
              <td>
                <code>_ga</code>, <code>_ga_*</code>
              </td>
              <td>Optional analytics</td>
              <td>
                Aggregate, de-identified usage statistics (only set if you
                accept analytics).
              </td>
              <td>Up to 13 months</td>
            </tr>
          </tbody>
        </table>
        <p>
          The embedded campus map is loaded from Google only when it is visible
          on the contact section; Google may set its own cookies once the map
          frame loads. See Google&rsquo;s policy for details.
        </p>
      </section>

      <section>
        <h2>Managing your preferences</h2>
        <ul>
          <li>
            Use <strong>Accept all</strong> or <strong>Decline optional</strong>{" "}
            in the banner on the main page — declining never breaks the site.
          </li>
          <li>
            Change your mind at any time with the cookie button in the
            bottom-right corner of the page, which reopens the banner.
          </li>
          <li>
            You can also delete or block storage in your browser settings
            (usually under Privacy or Site data). Blocking strictly necessary
            entries means your theme choice and consent answer will not persist
            between visits.
          </li>
        </ul>
      </section>

      <section>
        <h2>Do Not Track</h2>
        <p>
          If your browser signals that it does not want to be tracked, we
          treat that as declining optional analytics.
        </p>
      </section>

      <section>
        <h2>Changes to this policy</h2>
        <p>
          If we add or remove cookies, this page is updated and the banner is
          shown again on your next visit so you can re-consent. Related terms
          are in our <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Questions? Email{" "}
          <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a> or
          call {site.contact.phone}. {site.name}, {site.contact.address}.
        </p>
      </section>
    </LegalPage>
  );
}
