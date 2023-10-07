import wpIcon from "@/public/service/wordpress/custom.png";
import ctmIcon from "@/public/service/wordpress/ctm.png";
import optIcon from "@/public/service/wordpress/opt.png";
import plugIcon from "@/public/service/wordpress/plug.png";
import themeIcon from "@/public/service/wordpress/theme.png";

import ServiceCard from "@/components/ServiceCard";
import ContactSlim from "@/components/ContactSlim";
import ServiceHeader from "@/components/ServiceHeader";

const service = {
  name: "WordPress Development",
  desc: "Embark on a WordPress journey with us. We specialize in elegant, functional websites. From stunning designs to seamless experiences, we elevate your online presence. Let's enhance your digital journey together.",
};

const techs = [
  {
    name: "Custom WordPress Solutions",
    img: wpIcon,
    desc: "Crafting tailor-made WordPress websites from scratch, ensuring unique designs and functionalities that align perfectly with your brand identity and business objectives.",
  },
  {
    name: "Theme Customization",
    img: themeIcon,
    desc: " Expertise in customizing existing WordPress themes or creating bespoke themes, ensuring your website stands out with a visually appealing and user-friendly interface.",
  },
  {
    name: "Plugin Development ",
    img: plugIcon,
    desc: "Developing custom plugins to enhance website functionality, integrating third-party plugins, or modifying existing ones to meet specific requirements, expanding the capabilities of your WordPress site.",
  },
  {
    name: "SEO Optimization",
    img: optIcon,
    desc: "Optimizing your WordPress site for search engines, including meta tags, site speed optimization, and SEO-friendly URLs, enhancing your visibility in search engine results and driving organic traffic.",
  },

  {
    name: "Content Management Mastery",
    img: ctmIcon,
    desc: "Providing intuitive content management solutions, enabling easy updates, additions, and modifications to your website's content, ensuring you have full control over your online presence.",
  },
];

const Wordpress = () => {
  return (
    <div className="flex_col_mid w-full h-full">
      <ServiceHeader name={service.name} desc={service.desc} />
      <h1 className="text-gray-900 font-bold text-2xl my-5 md:my-10 md:text-6xl">We Offer</h1>
      <ServiceCard list={techs} />
      <ContactSlim />
    </div>
  );
};

export default Wordpress;
