import React from 'react';
// import clsx from 'clsx';

const ModList = [
  {
    img: './img/enig.png',
    name: 'enigmalea',
    twitter: 'http://twitter.com/enigmaleaDA',
    tumblr: 'http://enigmalea.tumblr.com',
  },
  {
    img: './img/fox.png',
    name: 'FoxInBoots',
    twitter: 'http://twitter.com/TheFoxInBoots',
    tumblr: 'http://thefoxinboots.tumblr.com',
  },
];

function Mods({img, name, twitter, tumblr}) {
  return (
    <div className="avatar">
    <img
      className="avatar__photo avatar__photo-sm"
      src={img}
    />
    <div className="avatar__intro">
      <div className="avatar__name">{name}</div>
      <small class="avatar__subtitle">
        <a href={twitter}></a>
        <a href={tumblr}></a>
      </small>
    </div>
  </div>
  );
}

export default function ModComponent() {
  return (
          {ModList.map((props, idx) => (
            <Mods key={idx} {...props} />
          ))}
  );
}
