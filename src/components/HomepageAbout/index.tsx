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
          alt={'chin-ho lin avatar'}
          src={require('@site/static/img/avatar.jpg').default}
        />
        <h1 className={styles.title}>{siteConfig.title}</h1>
        <span className={styles.subtitle}>{''}</span>
        <hr className={styles.divider} />
      </div>
      <div className={styles.description}>
        <p>Hi, I am a Software Engineer focused on</p>
        <p>Natural Language Processing and </p>
        <p>Large Language Model Applications.</p>
        <p>I am passionate about tech</p>
        <p>and enjoy exploring it through doing side projects.</p>
        <p>I document some <a href="/projects/intro">projects</a> on this site</p>
        <p>and share my learning with <a href="/blog">blog posts</a>.</p>
        <p>Feel free to message me to share any thoughts.</p>
        <p>Cheers!🍻</p>
      </div>
    </section >
  );
}
