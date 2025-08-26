import React, { JSX} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

interface FeatureItem {
  title: string;
  image: string;
  description: JSX.Element;
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Academic Resources',
    image: '/img/share.svg',
    description: (
      <>
        Access a comprehensive collection of academic materials including reports, 
        dissertations, summaries, and final year projects. Build on the knowledge 
        of previous students.
      </>
    ),
  },
  {
    title: 'Career Opportunities',
    image: '/img/world.svg',
    description: (
      <>
        Find internships and work-study positions that match your academic path. 
        Start building your professional career while studying.
      </>
    ),
  }
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className={styles.featureCard}>
        <div className={styles.featureImageContainer}>
          <img 
            className={styles.featureImage} 
            src={image} 
            alt={title} 
            loading="lazy"
          />
        </div>
        <div className={styles.featureContent}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionTitle}>
          <h2>Two Essential Features</h2>
          <p>Everything you need, nothing you don't</p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}