import React, { JSX } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Translate from "@docusaurus/Translate";

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionTitle}>
          <h2>Two Essential Features</h2>
          <p>Everything you need, nothing you don't</p>
        </div>
        <div className="row">
          <div className={clsx("col col--6")}>
            <div className={styles.featureCard}>
              <div className={styles.featureImageContainer}>
                <img
                  className={styles.featureImage}
                  src="/img/share.svg"
                  alt="Academic Resources"
                  loading="lazy"
                />
              </div>
              <div className={styles.featureContent}>
                <h3>Academic Resources</h3>
                <p>
                  Access a comprehensive collection of academic materials
                  including reports, dissertations, summaries, and final year
                  projects. Build on the knowledge of previous students.
                </p>
              </div>
            </div>
          </div>

          <div className={clsx("col col--6")}>
            <div className={styles.featureCard}>
              <div className={styles.featureImageContainer}>
                <img
                  className={styles.featureImage}
                  src="/img/world.svg"
                  alt="Career Opportunities"
                  loading="lazy"
                />
              </div>
              <div className={styles.featureContent}>
                <h3>Career Opportunities</h3>
                <p>
                  Find internships and work-study positions that match your
                  academic path. Start building your professional career while
                  studying.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
