import React from 'react';
// import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Andaran atish\'an, lethallen.',
    description: (
      <>
        Are you a fancreator for the Dragon Age fandom who loves
        all things elves? Do you fool yourself every time you start
        DA:O by telling yourself this time you'll do something other
        than the Dalish origin? Does Merrill steal your Hawke's heart
        every playthrough? Are you trapped in Solavellan hell?
        <br /><br />
        Then you've stumbled onto the right exchange!
        <br /><br />
        Arlathan Exchange is a celebration of Elvhen characters and is
        open to gen fic, ships, or solo/introspective pieces. Sign-ups
        are open to all fancreators willing to create a new fanfic or
        fanart piece within the deadline.
        <br /><br />
        The 2022 Exchange began with nominations on Saturday, March
        12, 2022 at 8pm EST.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
      <div className="text--left padding-horiz--md">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
