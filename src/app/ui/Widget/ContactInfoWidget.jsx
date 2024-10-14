import { Icon } from '@iconify/react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ContactInfoWidget({logoSrc}) {
  return (
    <>
    <Link className="cs_site_branding mt-3 mb-4" href="/">
    <Image src={logoSrc} alt="Logo" height={28} width={173} />
  </Link>
    <ul className="cs_contact_widget">
      <li>
        <i className="cs_accent_bg">
          <Icon icon="ep:location" />
        </i>
        SBC office-12, 1st floor, Sahya building, Govt Cyberpark, Calicut-673016 , India
      </li>
      <li>
        <i className="cs_accent_bg">
          <Icon icon="fluent:call-24-regular" />
        </i>
        +91 989 5035 143
      </li>
      <li>
        <i className="cs_accent_bg">
          <Icon icon="bi:envelope" />
        </i>
        info@yarddiant.com
      </li>
    </ul>
    </>
    
  );
}
