import React from 'react';
import { BitcoinIcon, EtheriumIcon, TetherIcon, XRPIcon } from '../../icons';

const CryptoIcon = ({ shortName }) => {
  switch (shortName) {
    case 'USDT':
      return <TetherIcon />;

    case 'BTC':
      return <BitcoinIcon />;

    case 'ETH':
      return <EtheriumIcon />;

    case 'XRP':
      return <XRPIcon />;

    default:
      return <></>;
  }
};

export default CryptoIcon;
