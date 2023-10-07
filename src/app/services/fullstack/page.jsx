import eteIcon from "@/public/service/fullstack/ete.png";
import exIcon from "@/public/service/fullstack/ex.png";
import dbIcon from "@/public/service/fullstack/db.png";
import apiIcon from "@/public/service/fullstack/api.png";
import ServiceHeader from "@/components/ServiceHeader";
import ServiceCard from "@/components/ServiceCard";
import ContactSlim from "@/components/ContactSlim";

const service = {
  name: "FullStack Development.",
  desc: "Discover seamless frontend elegance and potent backend functionality. Our fullstack experts blend Next.js, Express, and dynamic APIs for captivating interfaces and robust server solutions, enhancing your digital presence."
}

const techs = [
  {
    name: "End-to-End Expertise",
    img: eteIcon,
    desc: "Offering comprehensive solutions from frontend development, backend programming, to database management, providing a one-stop-shop for all your digital needs."
  },
  {
    name: "Technological Proficiency",
    img: exIcon,
    desc: "Utilizing a diverse range of technologies and frameworks including Next.js, Express, React, Angular, and Vue.js to create seamless and robust web applications."
  },
  {
    name: "Database Integration",
    img: dbIcon,
    desc: "Expertise in integrating and managing databases efficiently, ensuring seamless data flow and storage for dynamic and data-driven applications."
  },
  {
    name: "API Development",
    img: apiIcon,
    desc: "Creating robust and efficient APIs (Application Programming Interfaces) that enable seamless communication between different software applications, enhancing overall functionality and user experience."
  },
]

const Fullstack = () => {
  return (
    <div className="flex_col_mid w-full h-full">
      <ServiceHeader name={service.name} desc={service.desc} />
      <h1 className="text-gray-900 font-bold text-2xl my-5 md:my-10 md:text-6xl">We Offer</h1>
      <ServiceCard list={techs}/>
      <ContactSlim />
    </div>
  )
}

export default Fullstack