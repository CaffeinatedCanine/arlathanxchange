import Layout from "@theme/Layout";
import React from "react";
import styles from "./index.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description="Use this form to request an extension on your assignment for this year's exchange.">
      <main>
        <p className={styles.note}>
          If the form below is not accessible please{" "}
          <a
            href="https://airtable.com/appkPv96jtqYoBLz1/shrmg4RJQLFXOI6RF"
            target="_blank"
          >
            click here
          </a>{" "}
          to go to a full-screen version.
        </p>
        <iframe
          className={styles.form}
          src="https://airtable.com/embed/shrmg4RJQLFXOI6RF?backgroundColor=gray"
          width={500}
          height={1065}
          style={{ background: "transparent", border: "0" }}
          title="An Airtable form to request an extension on your deadline for the exchange."
        ></iframe>
      </main>
    </Layout>
  );
}
