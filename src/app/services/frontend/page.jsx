import ServiceHeader from "@/components/ServiceHeader";
import htmlIcon from "@/public/service/frontend/html.svg";
import responsiveIcon from "@/public/service/frontend/responsive.png";
import uiIcon from "@/public/service/frontend/ui.png";
import aniIcon from "@/public/service/frontend/animation.png";
import protoIcon from "@/public/service/frontend/proto.png";
import ServiceCard from "@/components/ServiceCard";
import ContactSlim from "@/components/ContactSlim";

  const service = {
    name: "Frontend Development.",
    desc: "Maximize brand impact with polished frontend design. Our experts use React, Angular, and Vue.js to create engaging interfaces, enhancing user interaction and online presence."
  }

  const techs = [
    {
      name: "Responsive Design",
      img: responsiveIcon,
      desc: "Crafting websites that seamlessly adapt to various devices and screen sizes, ensuring an optimal user experience on desktops, tablets, and smartphones."
    },
    {
      name: "Intuitive UI",
      img: uiIcon,
      desc: "Designing intuitive and user-friendly interfaces that enhance user engagement and satisfaction, leading to higher conversion rates and customer retention."
    },
    {
      name: "Animation and Interactivity",
      img: aniIcon,
      desc: " Integrating creative animations and interactive elements to enhance user engagement, making the website visually appealing and memorable."
    },
    {
      name: "Collaborative Prototyping",
      img: protoIcon,
      desc: "With our UI & UX design service, we facilitate collaborative prototyping processes, enabling clients to visualize and interact with the website's design before development."
    },
  ]
const Frontend = () => {

  return (
    <div className="flex_col_mid w-full h-full">
      <ServiceHeader name={service.name} desc={service.desc} />
      <h1 className="text-gray-900 font-bold text-2xl my-5 md:my-10 md:text-6xl">We Offer</h1>
      <ServiceCard list={techs}/>
      <ContactSlim />
    </div>
  )
}

export default Frontend