import usrIcon from "@/public/service/uiux/usr.png";
import crIcon from "@/public/service/uiux/cr.png";
import wfIcon from "@/public/service/uiux/wf.png";
import brandIcon from "@/public/service/uiux/brand.png";
import testIcon from "@/public/service/uiux/test.png";
import ServiceCard from "@/components/ServiceCard";
import ContactSlim from "@/components/ContactSlim";
import ServiceHeader from "@/components/ServiceHeader";

const service = {
  name: "UI & UX Design.",
  desc: "At Synafeia, we crafts enchanting user interfaces, ensuring captivating interactions. Our UI/UX experts blend purpose and elegance, elevating your brand with visually stunning, user-centric designs.",
};

const techs = [
  {
    name: "User-Centric Approach",
    img: usrIcon,
    desc: "Focusing on understanding the end-users, their behaviors, and preferences to create designs that are intuitive, engaging, and tailored to their needs.",
  },
  {
    name: "Creative Innovation",
    img: crIcon,
    desc: "Infusing creativity and innovation into every design element, crafting visually appealing interfaces that leave a memorable and positive impression on users.",
  },
  {
    name: "Wireframing and Prototyping",
    img: wfIcon,
    desc: "Expertise in creating detailed wireframes and interactive prototypes, allowing clients to visualize the design layout and user flow before development, ensuring alignment with their vision.",
  },
  {
    name: "Brand Consistency",
    img: brandIcon,
    desc: "Ensuring the UI design aligns seamlessly with the brand identity, incorporating brand colors, typography, and visual elements cohesively into the interface, enhancing brand recognition and trust among users.",
  },

  {
    name: "Usability Testing and Iteration",
    img: testIcon,
    desc: "Conducting usability testing to gather feedback and refine designs iteratively, ensuring the final product is user-friendly, intuitive, and aligns perfectly with user expectations.",
  },
];

const UiUx = () => {
  return (
    <div className="flex_col_mid w-full h-full">
      <ServiceHeader name={service.name} desc={service.desc} />
      <h1 className="text-gray-900 font-bold text-2xl my-5 md:my-10 md:text-6xl">We Offer</h1>
      <ServiceCard list={techs} />
      <ContactSlim />
    </div>
  );
};

export default UiUx;
