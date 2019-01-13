import React from 'react';
import posed from 'react-pose';

const Logo = posed.div({
  pressable: true,
  hoverable: true,
  init:  { scale: 1    },
  press: { scale: 0.95 },
  hover: { scale: 1.05 }
});

const PoseLogo = () => (
  <Logo>
    <figure class="image is-256x256 c-logo">
      <img src={require("./../_assets/png/aj-logo-black.png")} />
    </figure>
  </Logo>
);

export default PoseLogo;