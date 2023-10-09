import Card from "@/components/Card";
import aboutHeroImg from "@/public/about/hero.jpg";
import clientImg from "@/public/about/client-centric.jpg";
import colabImg from "@/public/about/colab.jpg";
import integrityImg from "@/public/about/integrity.jpg";
import qualityImg from "@/public/about/quality.jpg";
import Image from "next/image";
import ContactUs from "@/components/ContactUs";

const values = [
  {
    id: 1,
    title: "Collaboration",
    desc: "We believe in the power of collaboration. By fostering an environment where ideas flourish and expertise is shared, we create synergies that drive exceptional outcomes.",
    img: colabImg
  },
  {
    id: 2,
    title: "Quality",
    desc: "We are committed to delivering nothing short of excellence. Our focus on quality permeates every project, ensuring that every line of code, every pixel, and every strategy is meticulously crafted.",
    img: qualityImg
  },
  {
    id: 3,
    title: "Client-Centricity",
    desc: "You are at the heart of everything we do. We listen, we understand, and we tailor our solutions to your unique needs, ensuring that your vision is not just realized but exceeded.",
    img: clientImg
  },
  {
    id: 4,
    title: "Integrity",
    desc: "Trust is the cornerstone of our relationships. We operate with honesty, transparency, and a steadfast commitment to ethical practices, building lasting partnerships based on mutual respect.",
    img: integrityImg
  }
];

const About = () => {
  return (
    <>
    <div className="flex flex-col w-full h-[600px]">
      <div className="relative w-full h-full">
        <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full rounded-b-2xl bg-black/30 backdrop-blur-sm overflow-hidden"></div>
        <Image
          src={aboutHeroImg}
          alt="About hero background"
          className="w-full h-full object-cover rounded-b-2xl"
        />
        <div className="absolute top-[50%] left-0 right-0 text-center transform -translate-y-[50%] flex_col_mid md:bottom-[30] md:transform-none">
          <h1 className="text-center text-white text-5xl md:text-8xl w-full">
            Who we are
          </h1>
          <p className="text-justify text-white text-xl px-4 md:text-2xl md:text-center md:px-48">
            At <span className="text-3xl font-bold md:text-4xl">Synafeia</span>,
            we are more than a team; we are a collective of creative minds, tech
            enthusiasts, and strategic thinkers united by a singular passion: to
            redefine digital experiences. Founded on the principles of
            innovation and integrity, we've set out on a mission to transform
            the way businesses and individuals thrive in the digital realm.
          </p>
        </div>
      </div>
    </div>
    <h1 className="text-center py-10 md:py-20 text-4xl md:text-6xl font-extrabold text-black">We Values</h1>
      <div className="flex flex-col gap-6 justify-evenly mb-20 md:flex-row">
        {
          values.map((v) => 
          <Card key={v.id} title={v.title} img={v.img} desc={v.desc} />
          )
        }
      </div>
      <ContactUs />
    </>
  );
};

export default About;
