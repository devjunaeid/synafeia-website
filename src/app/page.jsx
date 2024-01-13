import Image from "next/image";
import Link from "next/link";
import hero from "@/public/hero/hero.png";
import bg1 from "@/public/hero/bg1.png";
import SlideShow from "@/components/SlideShow";
import ContactUs from "@/components/ContactUs";
import Card from "@/components/Card";

const reasons = [
  {
    id: 1,
    name: "Expertise that Matters",
    desc: " Our team comprises industry experts who bring years of experience to the table. We've honed our skills to perfection, ensuring that your project is in the hands of professionals who know what it takes to deliver outstanding results.",
    icon: bg1,
  },
  {
    id: 2,
    name: "End-to-End Support",
    desc: "From the initial concept to the final launch, we're with you every step of the way. Our comprehensive services cover everything, ensuring a smooth and stress-free journey for your project.",
    icon: bg1
  },
  {
    id: 3,
    name: "Client-Centric Approach",
    desc: "Your satisfaction is our top priority. We value open communication, transparency, and feedback, making sure you're actively involved in the process and thrilled with the results.",
    icon: bg1,
  },
  {
    id: 4,
    name: "Partnership, Not Just Service",
    desc: " When you choose us, you're not just hiring a service; you're forging a partnership. We're committed to your success and will go the extra mile to ensure you achieve your objectives.",
    icon: bg1,
  },
];

const Home = () => {
  return (
    <div className="flex_col_mid items-center h-full">
      <div
        className="relative w-screen min-h-screen bg-cover md:w-full md:h-screen bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${hero.src}')` }}
      >
        <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full rounded-b-2xl bg-black/30 backdrop-blur-sm overflow-hidden"></div>
        <div className="absolute inset-0 flex_col_mid">
          <div className="flex_col_mid text-center text-6xl font-black md:text-9xl text-zinc-200">
            Synafeia
            <span className="font-bold text-2xl text-center md:text-4xl text-white md:mt-5">
              Your One Stop Digital Solution.
            </span>
          </div>
          <p className="max-w-[700px] py-10 px-5 text-white text-lg md:text-2xl text-center">
            Step into the digital realm of boundless possibilities. Let us craft
            your online success story, from captivating websites to unstoppable
            search dominance. Embrace the future with us today!
          </p>
          <Link className="btn_link_border w-fit" href="/contact">
            Get In Touch
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-evenly items-center my-10">
        <h1 className="text-center text-gray-900 text-4xl md:text-6xl mb-10">Services</h1>
        <SlideShow />
      </div>
      <div className="">
        <h1 className="text-center text-black text-3xl w-full mb-10">
          What We Offer
        </h1>
        <div className="flex flex-col gap-5 md:flex-row md:gap-3">
          {reasons.map((reason) => (
            <Card
              key={reason.id}
              title={reason.name}
              desc={reason.desc}
              img={reason.icon}
            />
          ))}
        </div>
      </div>
      <div className="flex">
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;
