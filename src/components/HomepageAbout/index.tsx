import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';


export default function HomepageAbout(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <img
          className={styles.avatar}
          src={require('@site/static/img/avatar.jpg').default}
        />
        <h1 className={styles.title}>{siteConfig.title}</h1>
        <span className={styles.subtitle}>{siteConfig.tagline}</span>
        <hr className={styles.divider} />
      </div>
      <div className={styles.description}>
      </div>
    </section >
  );
}
