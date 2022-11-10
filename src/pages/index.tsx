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
      description="Homepage for this site and self-description of the site maintainer Chin-Ho Lin">
      <main>
        <HomepageAbout />
      </main>
    </Layout>
  );
}
