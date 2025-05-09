import type { JSX, ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HeroIllustration() {
  return (
    <div className={styles.heroIllustrationWrapper}>
      <img
        src="/img/hero-illustration.svg"
        alt="WeShare - Knowledge & Opportunities Hub"
        className={styles.heroIllustration}
        loading="eager"
      />
    </div>
  );
}

function AnimatedSection({ children }: { children: ReactNode }) {
  return <div className={styles.animatedSection}>{children}</div>;
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <Heading as="h1" className="hero__title">
              WeShare
            </Heading>
            <p className="hero__subtitle">
              Share knowledge, find opportunities
            </p>
            <p className={styles.heroDescription}>
              <strong>WeShare</strong> is a platform where students can share and access academic 
              work while discovering exclusive internships and work-study positions.
              <br /><br />
              Access valuable resources from previous students and find your next professional 
              opportunity, all in one place.
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs"
              >
                Browse Documents 📚
              </Link>
              <Link
                className="button button--outline button--lg"
                to="/opportunities"
                style={{ marginLeft: 16 }}
              >
                Find Opportunities 💼
              </Link>
            </div>
          </div>
          <HeroIllustration />
        </div>
      </div>
    </header>
  );
}

function InfoCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className={styles.infoCard}>
      <h3>{icon} {title}</h3>
      <p>{description}</p>
    </div>
  );
}

function InfoSection() {
  const features = [
    {
      icon: "📚",
      title: "Knowledge Sharing",
      description: "Access and share academic resources including reports, dissertations, summaries, and final year projects from students across different institutions."
    },
    {
      icon: "🎓",
      title: "Academic Resources",
      description: "Find valuable study materials and research work shared by previous students to help with your academic journey."
    },
    {
      icon: "💼",
      title: "Internship Opportunities",
      description: "Discover internship positions posted by companies looking for talented students."
    },
    {
      icon: "🔄",
      title: "Work-Study Programs",
      description: "Access exclusive work-study opportunities that allow you to gain professional experience while studying."
    }
  ];

  return (
    <section className={styles.infoSection}>
      <div className="container">
        <div className={styles.sectionTitle}>
          <h2>Simple. Focused. Effective.</h2>
          <p>Academic resources and professional opportunities in one place</p>
        </div>
        <div className={styles.infoGrid}>
          {features.map((feature, index) => (
            <InfoCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="WeShare – Academic Resources & Opportunities"
      description="Access academic materials and find internships or work-study positions. A platform for sharing knowledge and discovering opportunities."
    >
      <HomepageHeader />
      <main>
        <AnimatedSection>
          <InfoSection />
          <HomepageFeatures />
        </AnimatedSection>
      </main>
    </Layout>
  );
}