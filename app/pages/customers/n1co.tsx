import { CustomerAssets } from '../../assets/images/customers';
import Hero from '../../components/customers/hero';
import JumpTo from '../../components/customers/jump-to';
import Overview from '../../components/customers/overview';
import BlockQuote from '../../components/customers/block-quote';
import SectionContainer from '../../components/customers/section-container';
import Title from '../../components/customers/title';
// import IFrame from '../../components/customers/iframe';
// import Footer from '../../components/customers/footer';

import styles from '../../styles/customers/n1co.module.css';

N1co.title = 'SuperTokens: n1co case study';

export default function N1co() {
  return (
    <article>
      <Hero
        config={{
          background: {
            gradient:
              'linear-gradient(90deg, rgba(102, 27, 196, 0.10) 0.06%, rgba(102, 27, 196, 0.20) 50.34%, rgba(102, 27, 196, 0.10) 99.94%)',

            logo: { src: CustomerAssets.N1co.Logo, alt: 'n1co_logo' },
            coverImage: { src: CustomerAssets.N1co.Cover.src, alt: 'n1co_bg' },
          },

          leftContent: {
            title:
              'n1co Migrates from Auth0 to SuperTokens for Scalable, Modular Authentication',
            businessType: {
              text: 'Fintech',
              textColor:
                'linear-gradient(91deg, #8833DD 3.86%, #661BC4 121.62%)',
              borderColor: '#661BC4',
            },
            publishDate: 'March 6, 2025',
            readingTime: '15 minute read',
          },
          rightContent: {
            gradient:
              'linear-gradient(179deg, #C393FF 0.87%, #C393FF 110.47%, #C393FF 110.48%)',
            gap: '30px',
            stats: [
              {
                text: 'Monthly active users',
                subText: '120,000+',
              },
              {
                text: 'Funding raised',
                subText: '$18M',
              },
              {
                text: 'Monthly growth rate',
                subText: '30%',
              },
            ],
            styles: {
              wrapper: styles.right_content_wrapper,
            },
          },
        }}
      />
      <JumpTo
        config={{
          backgroundHue: 'rgba(23, 11, 27, 0.64)',
          jumpToList: [
            {
              text: 'Overview',
              href: '#overview',
            },
            {
              text: 'The Challenge',
              href: '#challenge',
            },
            {
              text: 'Why SuperTokens?',
              href: '#why-superTokens',
            },
            {
              text: 'Migration',
              href: '#migration',
            },
            {
              text: "what's next",
              href: '#whats-next',
            },
          ],
        }}
      />
      <Overview
        config={{
          color: '#C393FF',
          gradient: 'linear-gradient(#0E0418, #0C0414, #020103)',
          aboutPoints: [
            "n1co is a Central America-based fintech company offering a broad range of services across three main verticals. Their Digital Payment Processing division provides a home-grown acquiring platform that enables merchants to accept digital payments seamlessly. The Issuing Wallet and Cards vertical offers a consumer-facing app with digital wallets, prepaid cards, and physical card issuance capabilities. Their Event Ticketing & Entertainment platform serves as a high-traffic solution for selling exclusive event tickets online. N1co's comprehensive ecosystem caters to both merchants and consumers, maintaining stringent authentication requirements across all user types.",
          ],
          overviewPoints: [
            {
              title: 'Problem',
              content:
                'n1co’s fast-growing fintech ecosystem—spanning digital payments, consumer wallets, and high-demand event ticketing—was running into scalability, flexibility, and cost issues with Auth0. With 120,000+ monthly active users and frequent traffic spikes of up to 40,000 users in a single hour, their existing setup couldn’t keep up.',
            },
            {
              title: 'Process',
              content:
                'After evaluating alternatives, n1co migrated to SuperTokens for its open-source flexibility, developer-first APIs, and modular architecture. Led by Staff Engineer Christian Salvado, the team seamlessly replicated Auth0’s actions pipeline using SuperTokens overrides, migrated two major business lines in under four weeks, and collaborated with SuperTokens to provision infrastructure that could reliably handle traffic surges.',
            },
            {
              title: 'Results',
              content:
                'With SuperTokens, n1co gained a scalable, cost-effective authentication solution tailored to their needs. The engineering team now has full control over auth logic, powers passwordless login via SMS, and is set up for future expansions like SSO, social logins, and account linking—all while ensuring seamless, secure user experiences across their ecosystem.',
            },
          ],
        }}
      />
      <SectionContainer className={styles.section_container}>
        <Title text="The Challenge" id="challenge" />
        <p>
          Before SuperTokens, n1co was relying on Auth0 for their authentication
          flows. But as their user base—especially through the n1co app—grew
          rapidly, they began to hit platform limits.
        </p>
        <p className={styles.quote}>
          We were with Auth0 for about three years, but with our scale and rate
          limits, the pricing and flexibility just didn't work anymore," said
          Christian Salvado,
          <br />
          Staff Engineer @N1co
        </p>
        <p>Key pain points included:</p>
        <ul>
          <li>Outgrowing Auth0’s MAU quota.</li>
          <li>
            Hitting rate limits (HTTP 429 errors) during bursts of user
            activity.
          </li>
          <li>Limited control over customization and developer experience.</li>
          <li>
            A need for better control over actions and business logic in the
            auth pipeline.
          </li>
        </ul>

        <Title text="Why SuperTokens?" id="why-superTokens" />
        <p>
          After extensive research, n1co chose SuperTokens for three main
          reasons:
        </p>
        <ol>
          <li className={styles.list_heading}>Open Source & Extensibility</li>
          <p>
            SuperTokens' open-source nature allowed the team to deeply customize
            behavior without being locked into a black-box vendor.
          </p>
          <p>
            Being open source made my life a lot easier. I could replicate
            existing Auth0 APIs and implement our own actions pipeline in
            SuperTokens,” Christian shared.
          </p>
          <p>
            In fact, n1co even built a custom engine to replicate Auth0’s
            "Actions" feature inside SuperTokens using overrides—allowing their
            teams to retain workflows without rewriting everything.
          </p>
          <li className={styles.list_heading}>Scalable Infrastructure</li>
          <p>
            With more than 120,000 MAUs across two business lines—and plans to
            onboard a third high-traffic vertical—SuperTokens worked closely
            with n1co to provision infrastructure capable of scaling with their
            traffic patterns.
          </p>
          <p>
            We had one event with 40,000 users hitting the platform in one hour.
            SuperTokens worked with us to plan for those traffic spikes,” said
            Christian.
          </p>
          <li className={styles.list_heading}>Future-Proof Features</li>
          <p>
            Though they started with passwordless login via SMS, n1co plans to
            expand into:
          </p>
          <ul>
            <li>Social logins and account linking</li>
            <li>SSO for enterprise merchants</li>
            <li>
              Full-featured access control using paid SuperTokens features
            </li>
          </ul>
        </ol>

        <Title text="The Migration Experience" id="migration" />
        <p>
          Christian led the phased migration effort, starting with the digital
          payments business (20–30k MAUs), followed by the consumer app. A third
          business line—ticketing and entertainment—is slated for migration in
          the next quarter.
        </p>
        <p>Migration highlights:</p>
        <ul>
          <li>
            Seamless Auth0 API compatibility via custom SuperTokens overrides.
          </li>
          <li>Complete control over auth logic via GitHub-sourced actions.</li>
          <li>
            Coordination with SuperTokens to provision additional resources and
            avoid rate-limit issues.
          </li>
        </ul>

        <img src={CustomerAssets.N1co.MidCover.src} alt="N1co" />

        <Title text="What's next" id="whats-next" />

        <ul>
          <li>
            <b>Onboarding of Ticketing Platform:</b> n1co is planning to
            migrated its entertainment line once internal authentication flow
            changes are complete.
          </li>
          <li>
            <b>Adoption of Paid Features:</b> The team is exploring SSO and
            advanced account linking features to serve enterprise clients and
            simplify user onboarding.
          </li>
          <li>
            <b>Annual Plan Discussion:</b> As usage grows (~10% MoM), n1co is
            evaluating SuperTokens’ annual volume-based pricing model.
          </li>
        </ul>

        <BlockQuote
          color="#C393FF"
          quote="We’re ending the year between 180k and 200k MAUs. With SuperTokens, we’re confident our auth stack can scale with us,"
          designation="Staff Engineer @n1co"
          image={CustomerAssets.N1co.Christian}
          name="Christian Salvado"
          maxWidth="807px"
          bgColor="inherit"
        />

        <Title text="Final Thoughts" id="results" />

        <p>
          SuperTokens helped n1co modernize their authentication stack, migrate
          from Auth0 with minimal friction, and future-proof their platform with
          modular, extensible tools tailored for scale.
        </p>

        <BlockQuote
          color="#C393FF"
          quote="It was the cleanest way to do the migration. I like it a lot, We now have more flexibility, control, and confidence as we grow."
          designation="Staff Engineer @n1co"
          image={CustomerAssets.N1co.Christian}
          name="Christian Salvado"
          maxWidth="807px"
          bgColor="inherit"
        />
        {/* To Do: Add the video in footer */}

        {/* <IFrame
          src="https://www.youtube.com/embed/nkguZWG37FY?si=-IGEGjREta39kuwS?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0"
          title="SuperTokens n1co Case Study"
        />

        <p>
          To watch the entire case study discussion video, please click{' '}
          <a
            style={{ color: '#6f5cff' }}
            target="_blank"
            href="https://www.youtube.com/watch?v=nkguZWG37FY"
          >
            here
          </a>
          .
        </p>
        <Footer
          title="How n1co Transformed their Authentication with SuperTokens: Simplified, Scalable, and Future-Ready"
          shareUrl="https://supertokens.com/customers/n1co"
        /> */}
      </SectionContainer>
    </article>
  );
}
