import Link from "next/link";
import Image from "next/image";
import frontend from "@/public/service/frontend.svg";
import fullstack from "@/public/service/fullstack.svg";
import wordpress from "@/public/service/wordpress.svg";
import digtalMarketing from "@/public/service/digitalMarketing.svg";
import uiux from "@/public/service/uiux.svg";
import CardV2 from "./CardV2";

const temp = {
    id: 1,
    name: "Frontend Development.",
    img: frontend,
    cls: "lgv1",
    desc: "Unlock the power of exceptional frontend design. Our experts utilize React, Angular, and Vue.js to create polished, responsive interfaces that elevate your brand's online presence. Enhance user engagement with our frontend mastery.",
    url: "/services/frontend"
};

const services = [
    {
        id: 1,
        name: "Frontend Development.",
        img: frontend,
        cls: "lgv1",
        desc: "Unlock the power of exceptional frontend design. Our experts utilize React, Angular, and Vue.js to create polished, responsive interfaces that elevate your brand's online presence. Enhance user engagement with our frontend mastery.",
        url: "/services/frontend"
    },
    {
        id: 2,
        name: "FullStack Development.",
        img: fullstack,
        cls: "lgv2",
        desc: "Experience the perfect blend of frontend elegance and backend functionality. Our fullstack wizards utilize Next.js and Express to create captivating user interfaces and robust server solutions, seamlessly integrated with a dynamic database API. Elevate your digital presence with our comprehensive expertise.",
        url: "/services/fullstack"
    },
    {
        id: 3,
        name: "Wordpress Development.",
        img: wordpress,
        cls: "lgv1",
        desc: "Experience the magic of WordPress with us. We specialize in crafting elegant and highly functional websites using the WordPress platform. From eye-catching designs to seamless user experiences, we ensure your online presence stands out. Let us take your digital journey to the next level with our expert WordPress development services.",
        url: "/services/wordpress"
    },
    {
        id: 4,
        name: "UI and UX Design",
        img: uiux,
        cls: "lgv2",
        desc: "Designing with purpose and elegance, we shape intuitive user interfaces that enchant and engage. At Synafeia, our UI/UX experts create visually stunning, user-centric designs that ensure your audience enjoys every interaction. Elevate your brand with our design finesse.",
        url: "/services/wordpress"
    },
    {
        id: 5,
        name: "SEO & Digital Marketing.",
        img: digtalMarketing,
        cls: "lgv1",
        desc: "Supercharge your online success with our SEO and digital marketing prowess. We strategically optimize your website for top search rankings, while our digital marketing strategies captivate audiences, driving growth and engagement. Let's boost your digital footprint and lead the way to online prominence.",
        url: "/services/digitalmarketing"
    },
]

export const Service = () => {
  return (
    <div className="w-full">
        <h1 className="text-center text-3xl md:text-6xl p-6">Services</h1>
        {services.map(service =>(
            <div key={service.id} className={service.cls}>
                <div>
                    <Image
                    src={service.img}
                    alt="Synafeia Logo"
                    className="w-[200px] md:w-[600px]"
                    />
                </div>
                <div className="w-full md:w-2/3">
                    <h1 className="pb-5 text-2xl text-center md:text-left lg:text-4xl">{service.name}</h1>
                    <p className="pl-0 pb-8 lg:text-2xl">{service.desc}</p>
                    <Link href={service.url} className="btn_link_filled">Learn More</Link>
                </div>
            </div>
        ))}
        <div className="mb-48">
            <CardV2 title={temp.name} desc={temp.desc} img={temp.img} url={temp.url} sty={temp.cls}/>
        </div>
    </div>
  )
}
