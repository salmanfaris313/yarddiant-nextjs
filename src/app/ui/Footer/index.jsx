"use client"
import React from 'react';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import MenuWidget from '../Widget/MenuWidget';
import SocialWidget from '../Widget/SocialWidget';
import Newsletter from '../Widget/Newsletter';
import TextWidget from '../Widget/TextWidget';

import Image from 'next/image';
const menuDataOne = [
  { title: 'Home', href: '/' },
  { title: 'About Us', href: '/' },
  { title: 'Services', href: '/' },
  { title: 'Blog', href: '/' },
  { title: 'Contact', href: '/' },

];

const menuDataTwo = [
  { title: 'Home', href: '/' },
  { title: 'About Us', href: '/' },
  { title: 'Services', href: '/' },
  { title: 'Blog', href: '/' },
  { title: 'Contact', href: '/' },
];

export default function Footer() {
  return (
    <footer className="cs_footer cs_style_1 cs_heading_color">
     
      <div className="cs_footer_main">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="cs_footer_item">
                <TextWidget text="Web development Company" />
                <ContactInfoWidget logoSrc="/images/logo.png" />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="cs_footer_item">
                <MenuWidget data={menuDataOne} />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="cs_footer_item">
                <MenuWidget data={menuDataTwo} />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cs_footer_item">
                <Newsletter
                  title="Be Our Subscribers"
                  subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_footer_bottom cs_accent_bg">
        <div className="container">
          <div className="cs_footer_bottom_in">
            <SocialWidget />
            <div className="cs_copyright">
              Copyright © 2024 Yarddiant. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
