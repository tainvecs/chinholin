import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageAbout from '@site/src/components/HomepageAbout';
import styles from './index.module.css';


export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Description will go into a meta tag in <head />">
      <main>
        <HomepageAbout />
      </main>
    </Layout>
  );
}
