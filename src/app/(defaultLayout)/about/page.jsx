"use client"
import Section from "@/app/ui/Section";
import AwardSectionStyle2 from "@/app/ui/Section/AwardSection/AwardSectionStyle2";
import DepartmentSectionStyle2 from "@/app/ui/Section/DepartmentSection/DepartmentSectionStyle2";
import BannerSectionStyle3 from "@/app/ui/Section/BannerSection/BannerSectionStyle3";
import BannerSectionStyle4 from "@/app/ui/Section/BannerSection/BannerSectionStyle4";
import FeaturesSectionStyle2 from "@/app/ui/Section/FeaturesSection/FeaturesSectionStyle2";
import FunFactSection from "@/app/ui/Section/FunFactSection";
import GallerySection from "@/app/ui/Section/GallerySection";
import TeamSection from "@/app/ui/Section/TeamSection";

import bannerImg from '../../../../public/images/about/banner_img.png'
import whyChooseUsImg from '../../../../public//images/home/whychooses.jpg'

const departmentData = [
 
  {
    title: 'Web Design',
    subTitle:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, a est, molestiae suscipit animi alias enim ipsa id aliquid quidem ',
    iconUrl: '/images/icons/calendar_white.svg',
    href: '/',
  },
  {
    title: 'Web Development',
    subTitle:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, a est, molestiae suscipit animi alias enim ipsa id aliquid quidem ',
    iconUrl: '/images/icons/calendar_white.svg',
    href: '/',
  },
  {
    title: 'Classified Website Development',
    subTitle:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, a est, molestiae suscipit animi alias enim ipsa id aliquid quidem ',
    iconUrl: '/images/icons/calendar_white.svg',
    href: '/',
  },
  {
    title: 'Web Application Security',
    subTitle:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, a est, molestiae suscipit animi alias enim ipsa id aliquid quidem ',
    iconUrl: '/images/icons/calendar_white.svg',
    href: '/',
  },
  {
    title: 'Travel agency website development',
    subTitle:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, a est, molestiae suscipit animi alias enim ipsa id aliquid quidem ',
    iconUrl: '/images/icons/calendar_white.svg',
    href: '/',
  },
];

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

const funFactData = [
  { number: '20+', title: 'Years of experience' },
          { number: '25%', title: 'Professional Experts' },
          { number: '200+', title: 'Projects Complete' },
          { number: '18+', title: 'World-wide Clients' },
];




// export const metadata = {
//   title: "About"
// }

export default function About() {
  return (
    <>
      <BannerSectionStyle3
        bgUrl="/images/about/banner_bg.svg"
        imgUrl={bannerImg}
        title="A Complete Web Solution Agency"
        subTitle="Our team develops comprehensive business and Custom Web Development Company or Services for clients across the globe."
      />
      <Section topMd={200} topLg={150} topXl={110}>
        <DepartmentSectionStyle2
          sectionTitle="Provides Our Best Services"
          sectionTitleUp="SERVICES"
          data={departmentData}
        />
      </Section>
      <Section topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110}>
        <FeaturesSectionStyle2
          sectionTitle="Why Choose Us"
          imgUrl={whyChooseUsImg}
          data={featureListData}
        />
      </Section>
      <Section>
        <FunFactSection
          bgUrl="/images/about/fun_fact_bg.jpeg"
          data={funFactData}
        />
      </Section>
  
 
  
    </>
  );
}
