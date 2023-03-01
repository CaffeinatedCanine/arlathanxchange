import Countdown from '../components/Countdown';
import HomepageFeatures from '../components/HomepageFeatures';
import Layout from '@theme/Layout';
import React from 'react';
import styles from './index.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header>
        <img src="/img/banner.png" className={styles.banner}></img>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      description="A Dragon Age fan exchange focused on a celebration of Elvhen characters.">
      <HomepageHeader />
      <main>
        <Countdown />
        <hr className={styles.index_hr} />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
