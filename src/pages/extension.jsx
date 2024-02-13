import Layout from "@theme/Layout";
import React from "react";
import styles from "./index.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description="Use this form to request an extension on your assignment for this year's exchange.">
      <main>
        <iframe
          className={styles.form}
          src="https://airtable.com/embed/shrmg4RJQLFXOI6RF?backgroundColor=gray"
          width={500}
          height={1215}
          style={{ background: "transparent", border: "0" }}
          title="An Airtable form to request an extension on your deadline for the exchange."
        ></iframe>
      </main>
    </Layout>
  );
}
