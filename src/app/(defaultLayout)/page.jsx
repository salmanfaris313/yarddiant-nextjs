"use client"
import React from 'react';
import HeroStyle2 from '@/app/ui/Hero/HeroStyle2';
import Section from '@/app/ui/Section';
import AboutSectionStyle3 from '@/app/ui/Section/AboutSection/AboutSectionStyle3';
import AppointmentSectionStyle2 from '@/app/ui/Section/AppointmentSection/AppointmentSectionStyle2';
import BannerSectionStyle2 from '@/app/ui/Section/BannerSection/BannerSectionStyle2';
import BlogSectionStyle3 from '@/app/ui/Section/BlogSection/BlogSectionStyle3';
import BrandsSectionStyle2 from '@/app/ui/Section/BrandsSection/BrandsSectionStyle2';
import DepartmentSectionStyle4 from '@/app/ui/Section/DepartmentSection/DepartmentSectionStyle4';
import FaqSectionStyle2 from '@/app/ui/Section/FaqSection/FaqSectionStyle2';
import TestimonialSectionStyle2 from '@/app/ui/Section/TestimonialSection/TestimonialSectionStyle2';
import WorkingProcess from '@/app/ui/Section/WorkingProcess';
import FeaturesSectionStyle2 from "@/app/ui/Section/FeaturesSection/FeaturesSectionStyle2";
import aboutImg from '../../../public/images/home/about.jpg'
import appointmentImg from '../../../public/images/home/bgback.jpg'
import whyChooseUsImg from '../../../public//images/home/whychooses.jpg'


const featureListData = [
  {
    title: 'CMS Web Development',
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    iconUrl: '/images/icons/professional.svg',
  },
  {
    title: 'E-Commerce  development',
    subTitle:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  iconUrl: '/images/icons/professional.svg',
  },
  {
    title: 'Wordpress web development',
    subTitle:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  iconUrl: '/images/icons/professional.svg',
  },
  {
    title: 'Web development Security',
    subTitle:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  iconUrl: '/images/icons/professional.svg',
  },
];

const departmentData = [
  {
    title: 'E- Commerce web development',
    iconUrl: '/images/home/ecommerce-website.svg',
    href: '/',
  },
  {
    title: 'Custom Web Development',
    iconUrl: '/images/home/web-development.svg',
    href: '/',
  },
  {
    title: 'Wordpress web development',
    iconUrl: '/images/home/wordpress.svg',
    href: '/',
  },
  {
    title: 'Web Development plugins',
    iconUrl: '/images/home/plugins.svg',
    href: '/',
  },
  {
    title: 'Mobile App Development',
    iconUrl: '/images/home/app-application.svg',
    href: '/',
  },
  {
    title: 'Digital Strategy for web development',
    iconUrl: '/images/home/digital-marketing.svg',
    href: '/',
  },
];
const testimonialData = [
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.”",
    ratingNumber: '5',
    avatarImgUrl: '/images/home/user.png',
    avatarName: 'Salman',
    avatarDesignation: 'New York, USA',
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.”",
    ratingNumber: '4.5',
    avatarImgUrl: '/images/home/user.png',
    avatarName: 'Sam',
    avatarDesignation: 'New York, USA',
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.”",
    ratingNumber: '5',
    avatarImgUrl: '/images/home/user.png',
    avatarName: 'PAULO',
    avatarDesignation: 'New York, USA',
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.”",
    ratingNumber: '4.5',
    avatarImgUrl: '/images/home/user.png',
    avatarName: ' Jas',
    avatarDesignation: 'New York, USA',
  },
];
const workingProcessData = [
  {
    title: 'Discovery & Planning',
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
    iconUrl: '/images/home/planning.svg',
    number: '01',
  },
  {
    title: 'Wireframing & Design',
    subTitle:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
  iconUrl: '/images/home/design.svg',
    number: '02',
  },
  {
    title: 'Development',
    subTitle:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
  iconUrl: '/images/home/code.svg',
    number: '03',
  },
  {
    title: 'Testing & Quality Assurance',
    subTitle:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
  iconUrl: '/images/home/testing.svg',
    number: '04',
  },
  {
    title: 'Launch & Deployment',
    subTitle:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
  iconUrl: '/images/home/launch.svg',
    number: '05',
  },
];
const blogData = [
  {
    title: 'What are the three main components of a web page form?',
    thumbUrl: '/images/blog/blog01.jpg',
    date: 'May 1, 2024',
    href: '/'
  },
  {
    title: 'How to create effective landing pages to drive conversions',
    thumbUrl: '/images/blog/blog02.jpg',
    date: 'May 4, 2024',
    href: '/'
  },
  {
    title: 'Impact Of Artificial Intelligence On Web Development',
    thumbUrl: '/images/blog/blog03.jpg',
    date: 'May 1, 2024',
    href: '/'
  },
];
const faqData = [
  {
    title: 'How to get better results in web development?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
  {
    title: 'How much does it cost to build or develop a website?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
  {
    title: 'How much time does it take to plan and create a website?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
  {
    title: 'Do you do SEO for the website?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
  {
    title: 'How much does it cost to build or develop a website?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
];
const brandData = [
  {
    imgUrl: '/images/brands/laravel.jpg',
    imgAlt: 'Brand',
  },
  {
    imgUrl: '/images/brands/nodejs.jpg',
    imgAlt: 'Brand',
  },
  {
    imgUrl: '/images/brands/reactjs.jpg',
    imgAlt: 'Brand',
  },
  {
    imgUrl: '/images/brands/nextjs.jpg',
    imgAlt: 'Brand',
  },
  {
    imgUrl: '/images/brands/html5.jpg',
    imgAlt: 'Brand',
  },
  {
    imgUrl: '/images/brands/css3.jpg',
    imgAlt: 'Brand',
  },
  {
    imgUrl: '/images/brands/nodejs.jpg',
    imgAlt: 'Brand',
  },
];
export default function HomeStyle2() {
  return (
    <>
      <HeroStyle2
        title="Building the Future, One Line of Code at a Time"
        subTitle="we specialize in crafting innovative and high-performing websites tailored to your business needs. From sleek, responsive designs to robust backend systems, our expert team blends creativity with cutting-edge technology to deliver seamless digital experiences."
        bgUrl="/images/home/homebg.jpg"
        videoBtnText="See how we work"
        videoUrl="https://www.youtube.com/embed/uiI5Ys5ZR34"
       
        btnUrl="/"
        funfactList={[
          { number: '20+', title: 'Years of experience' },
          { number: '25%', title: 'Professional Experts' },
          { number: '200+', title: 'Projects Complete' },
          { number: '18+', title: 'World-wide Clients' },
        ]}
      />
      <Section bottomMd={190} bottomLg={100} bottomXl={105}>
        <AboutSectionStyle3
          titleUp="ABOUT US"
          subTitle="
We are a web development company dedicated to supporting and enhancing your business by providing exceptional website services. Our team is here to assist you with a full range of web solutions, including custom website design, unique online applications, WordPress development, e-commerce platforms, and tailored web development projects. Whether you need a custom website or a fully functional e-commerce store, we are committed to delivering top-notch service and standing by you every step of the way."
          imgUrl={aboutImg}
        />
      </Section>

      <Section bottomMd={75} bottomLg={105} bottomXl={85}>
        <DepartmentSectionStyle4
          sectionTitle="What We Offer"
          sectionTitleUp="OUR Services"
          data={departmentData}
        />
      </Section>
      <Section topMd={15} topLg={55} topXl={85} bottomMd={100} bottomLg={110}>
        <FeaturesSectionStyle2
          sectionTitle="Why Choose Us"
          imgUrl={whyChooseUsImg}
          data={featureListData}
        />
      </Section>
      <Section
        className="cs_bg_filed"
        style={{ backgroundImage: `url(/images/home_2/testimonial_bg.svg)` }}
        topMd={190}
        topLg={145}
        topXl={105}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <TestimonialSectionStyle2
          sectionTitle="What Our Clents Say <br /> About Us"
          sectionTitleUp="TESTIMONIALS"
          data={testimonialData}
        />
      </Section>

      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <WorkingProcess
          sectionTitle="Our web development flow or process"
          sectionTitleUp=""
          sectionTitleDown=""
          sectionSubTitle=""
          data={workingProcessData}
        />
      </Section>

      <Section>
        <BannerSectionStyle2
          bgUrl="/images/home/bgback.jpg"
          title="Why you need to choose yarddiant as web developers?"
          subTitle="To be marked as the best web development company in the USA, among several website development companies is something not that easy to attain. We breakdown into several steps and build high quality websites to succeed in market."
        />
      </Section>

      <Section topMd={190} topLg={105} topXl={105}>
        <BlogSectionStyle3
          sectionTitle="Latest Update"
          sectionTitleUp="BLOG POSTS"
          sectionTitleDown=""
          sectionSubTitle=""
          data={blogData}
        />
      </Section>

      <Section
        topMd={190}
        topLg={105}
        topXl={105}
        bottomMd={100}
        bottomLg={50}
        bottomXl={60}
      >
        <FaqSectionStyle2
          data={faqData}
          sectionTitle="Usually Asked"
          sectionTitleUp="What People"
        />
      </Section>

     

      <Section
        topMd={100}
        topLg={100}
        topXl={70}
        bottomMd={70}
        bottomLg={70}
        bottomXl={70}
      >
        <BrandsSectionStyle2 data={brandData} />
      </Section>
    </>
  );
}
