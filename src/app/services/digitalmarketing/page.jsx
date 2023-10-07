import keyIcon from "@/public/service/seo/key.png";
import localIcon from "@/public/service/seo/local.png";
import seoIcon from "@/public/service/seo/seo.png";
import socialIcon from "@/public/service/seo/social.png";
import contentIcon from "@/public/service/seo/content.png";

import ServiceCard from "@/components/ServiceCard";
import ContactSlim from "@/components/ContactSlim";
import ServiceHeader from "@/components/ServiceHeader";

const service = {
  name: "SEO and Digital Marketing",
  desc: "Boost online success with our SEO and digital marketing expertise. We optimize your site for top search rankings, captivate audiences, and drive growth. Let's elevate your digital presence together.",
};

const techs = [
  {
    name: "Strategic SEO Expertise",
    img: seoIcon,
    desc: "Implementing advanced SEO strategies tailored to your business, optimizing website content, structure, and performance to improve search engine rankings and increase organic traffic.",
  },
  {
    name: "Keyword Research and Analysis",
    img: keyIcon,
    desc: "Conducting in-depth keyword research to identify high-value, relevant keywords for your industry, ensuring your website ranks for the terms potential customers are searching for.",
  },
  {
    name: "Engaging Content Creation",
    img: contentIcon,
    desc: "Developing compelling and shareable content, from articles and videos to infographics and interactive media, capturing audience attention and fostering engagement across digital platforms.",
  },
  {
    name: "Local SEO Optimization",
    img: localIcon,
    desc: "Enhancing your visibility in local searches, optimizing your Google My Business profile, and managing online reviews to attract local customers and boost foot traffic to your physical locations.",
  },

  {
    name: "Social Media Engagement",
    img: socialIcon,
    desc: "Crafting engaging social media campaigns, managing platforms effectively, and leveraging social media advertising to increase brand awareness, engagement, and customer loyalty.",
  },
];

const Digitalmarketing = () => {
  return (
    <div className="flex_col_mid w-full h-full">
      <ServiceHeader name={service.name} desc={service.desc} />
      <h1 className="text-gray-900 font-bold text-2xl my-5 md:my-10 md:text-6xl">We Offer</h1>
      <ServiceCard list={techs} />
      <ContactSlim />
    </div>
  );
};

export default Digitalmarketing;
