import React from 'react';
import cityspireLogo from '../../assets/imgs/citySpireLogoAlternative.png';

const LogoStyle = {
  marginBottom: '0',
  display: 'flex',
  alignItems: 'center',
};

const LogoImageStyle = {
  width: 'auto',
  height: '2.25rem',
  marginRight: '1rem',
};

const LogoTitleStyle = {
  marginBottom: '0',
  marginTop: '-0.3rem',
};

const LogoComponent = () => {
  return (
    <a href="/" style={LogoStyle}>
      <img
        src={cityspireLogo}
        style={LogoImageStyle}
        alt="CitySpire | Find your home!"
      />
      <h1 style={LogoTitleStyle}>CitySpire</h1>
    </a>
  );
};

export default LogoComponent;
