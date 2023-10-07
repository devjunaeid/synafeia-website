import BrandBoard from "@/components/BrandBoard";
import ContactUs from "@/components/ContactUs";
import fbIcon from "@/public/icons/social/fb.svg";
import xIcon from "@/public/icons/social/x.svg";
import lkIcon from "@/public/icons/social/lnkdn.svg";
import wappIcon from "@/public/icons/social/wapp.svg";

const socials = [
  {
    name:"Facebook",
    img: fbIcon,
    url: "https://www.facebook.com/synafeia.tech"
  },
  {
    name:"Whatsapp",
    img: wappIcon,
    url: "https://b.link/talksynafeia"
  },
  {
    name:"X",
    img: xIcon,
    url: "https://x.com/synafeia"
  },
  {
    name:"Linkedin",
    img: lkIcon,
    url: "https://www.linkedin.com/company/synafeia/"
  },
]

const Contact = () => {
  return (
    <div className="flex_col_mid">
      <div className="w-full md:w-3/4">
      <BrandBoard title={"Get In Touch With Us"} list={socials} />
      </div>
      <ContactUs />
    </div>
  )
}

export default Contact