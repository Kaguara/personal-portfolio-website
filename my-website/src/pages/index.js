import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title" color="black">
          What type of product leader am I?
        </Heading>
        <Heading as="h1" className="hero__title" color="black">
          What have I built?
        </Heading>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      {/*<HomepageHeader />*/}
        <main>
          <div className={styles.home_page_container} >
            <Heading as="h1" className="hero__title {color: #000; font-size: 70px;}" color="black"> 
              <a href="./blog" style={{color: 'black', fontSize: '70px'}}>What type of product leader am I?</a>
            </Heading>
            <Heading as="h1" className="hero__title" color="black">
              <a href="./blog" style={{color: 'black', fontSize: '70px'}}>What have I built?</a> 
           </Heading>
          </div>
        </main>
    </Layout>
  );
}
