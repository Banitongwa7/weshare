import type { JSX, ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import Translate from "@docusaurus/Translate";
import styles from "./index.module.css";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="WeShare – Academic Resources & Opportunities"
      description="Access academic materials and find internships or work-study positions. A platform for sharing knowledge and discovering opportunities."
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <Heading as="h1" className="hero__title">
                WeShare
              </Heading>
              <p className="hero__subtitle">
                <Translate>Share knowledge, find opportunities</Translate>
              </p>
              <p className={styles.heroDescription}>
                <strong>WeShare</strong>{" "}
                <Translate>
                  is a platform where students can share and access academic
                  work while discovering exclusive internships and work-study
                  positions.
                </Translate>
                <br />
                <br />
                <Translate>
                  Access valuable resources from previous students and find your
                  next professional opportunity, all in one place.
                </Translate>
              </p>
              <div className={styles.buttons}>
                <Link className="button button--secondary button--lg" to="/docs/category/documents">
                  <Translate>Browse Documents 📚</Translate>
                </Link>
                <Link
                  className="button button--outline button--lg"
                  to="/docs/category/opportunities"
                  style={{ marginLeft: 16 }}
                >
                  <Translate>Find Opportunities 💼</Translate>
                </Link>
              </div>
            </div>
            <div className={styles.heroIllustrationWrapper}>
              <img
                src="/img/hero.gif"
                alt="WeShare - Knowledge & Opportunities Hub"
                className={styles.heroIllustration}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className={styles.animatedSection}>
          <section className={styles.infoSection}>
            <div className="container">
              <div className={styles.sectionTitle}>
                <h2>
                  <Translate>Simple. Focused. Effective.</Translate>
                </h2>
                <p>
                  <Translate>
                    Academic resources and professional opportunities in one
                    place
                  </Translate>
                </p>
              </div>
              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <h3>
                    📚 <Translate>Knowledge Sharing</Translate>
                  </h3>
                  <p>
                    <Translate>
                      Access and share academic resources including reports,
                      dissertations, summaries, and final year projects from
                      students across different institutions.
                    </Translate>
                  </p>
                </div>

                <div className={styles.infoCard}>
                  <h3>
                    🎓 <Translate>Academic Resources</Translate>
                  </h3>
                  <p>
                    <Translate>
                      Find valuable study materials and research work shared by
                      previous students to help with your academic journey.
                    </Translate>
                  </p>
                </div>

                <div className={styles.infoCard}>
                  <h3>
                    💼 <Translate>Internship Opportunities</Translate>
                  </h3>
                  <p>
                    <Translate>
                      Discover internship positions posted by companies looking
                      for talented students.
                    </Translate>
                  </p>
                </div>

                <div className={styles.infoCard}>
                  <h3>
                    🔄 <Translate>Work-Study Programs</Translate>
                  </h3>
                  <p>
                    <Translate>
                      Access exclusive work-study opportunities that allow you
                      to gain professional experience while studying.
                    </Translate>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <HomepageFeatures />
        </div>
      </main>
    </Layout>
  );
}
