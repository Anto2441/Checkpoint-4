import React from 'react';
import { SocialIcon } from 'react-social-icons';

import './Footer.scss';

function Footer() {
  return (
    <div className="Footer">
      <div className="logos">
        <SocialIcon className="linkedin" network="linkedin" bgColor="black" style={{ height: 35, width: 35 }} />
        <SocialIcon className="github" network="github" bgColor="black" style={{ height: 35, width: 35 }} />
        <SocialIcon className="twitter" network="twitter" bgColor="black" style={{ height: 35, width: 35 }} />
        <SocialIcon className="pinterest" network="pinterest" bgColor="black" style={{ height: 35, width: 35 }} />
      </div>
      <div className="signature">
      July 2019 Checkpoint 4 JavaScript/ React - Wild Circus 2.0 @ 2019
      </div>
    </div>
  );
}

export default Footer;