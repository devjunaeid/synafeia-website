import frontend from "@/public/service/frontend.svg";
import fullstack from "@/public/service/fullstack.svg";
import wordpress from "@/public/service/wordpress.svg";
import digtalMarketing from "@/public/service/digitalMarketing.svg";
import uiux from "@/public/service/uiux.svg";
import CardV2 from "@/components/CardV2";
import ContactUs from "@/components/ContactUs";

const services = [
  {
    id: 1,
    name: "Frontend Development.",
    img: frontend,
    desc: "Unlock the power of exceptional frontend design. Our experts utilize React, Angular, and Vue.js to create polished, responsive interfaces that elevate your brand's online presence. Enhance user engagement with our frontend mastery.",
    url: "/services/frontend",
  },
  {
    id: 2,
    name: "FullStack Development.",
    img: fullstack,
    desc: "Experience the perfect blend of frontend elegance and backend functionality. Our fullstack wizards utilize Next.js and Express to create captivating user interfaces and robust server solutions, seamlessly integrated with a dynamic database API. Elevate your digital presence with our comprehensive expertise.",
    url: "/services/fullstack",
  },
  {
    id: 3,
    name: "Wordpress Development.",
    img: wordpress,
    desc: "Experience the magic of WordPress with us. We specialize in crafting elegant and highly functional websites using the WordPress platform. From eye-catching designs to seamless user experiences, we ensure your online presence stands out. Let us take your digital journey to the next level with our expert WordPress development services.",
    url: "/services/wordpress",
  },
  {
    id: 4,
    name: "UI and UX Design",
    img: uiux,
    desc: "Designing with purpose and elegance, we shape intuitive user interfaces that enchant and engage. At Synafeia, our UI/UX experts create visually stunning, user-centric designs that ensure your audience enjoys every interaction. Elevate your brand with our design finesse.",
    url: "/services/uiux",
  },
  {
    id: 5,
    name: "SEO & Digital Marketing.",
    img: digtalMarketing,
    desc: "Supercharge your online success with our SEO and digital marketing prowess. We strategically optimize your website for top search rankings, while our digital marketing strategies captivate audiences, driving growth and engagement. Let's boost your digital footprint and lead the way to online prominence.",
    url: "/services/digitalmarketing",
  },
];

const Services = () => {
  return (
    <div className="w-full">
      <h1 className="text-center text-4xl text-black md:text-6xl p-6">Services</h1>
      {services.map((service) => (
        <CardV2 key={service.id}
          title={service.name}
          desc={service.desc}
          img={service.img}
          url={service.url}
        />
      ))}
      <div className="-mt-20">
        <ContactUs />
      </div>
    </div>
  );
};
export default Services;
