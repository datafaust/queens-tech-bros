import Image from "next/image";
import { Feature } from "@/types/feature";

import router from "../../../public/images/brands/services/router.jpeg"
import itimage from "../../../public/images/brands/services/itimage.jpeg";
import networking from "../../../public/images/brands/services/it-networking.jpeg";
import itprinter from "../../../public/images/brands/services/it-printer.jpeg";
import itcyber from "../../../public/images/brands/services/it-cyber.jpeg";
import webdesign from "../../../public/images/brands/services/it-webdesign.jpeg";
import ai from "../../../public/images/brands/services/it-aiauto.jpeg";

const w = 200;
const l = 200;

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <Image
      src={itimage}
      alt="IT Support"
      width={w}
      height={l}
      className="rounded-md"
    />
    ),
    title: "IT Support",
    paragraph:
      "Keep your tech running right—computers, internet, and devices supported so your business stays on track.",
  },
  {
    id: 2,
    icon: (
      <Image
      src={router}
      alt="wifi"
      width={w}
      height={l}
      className="rounded-md"
    />
    ),
    title: "Wi-Fi Setup and Optimization",
    paragraph:
      "Fast, reliable Wi-Fi with expert router setup and improved speed, performance, and coverage throughout your space.",
  },
  {
    id: 3,
    icon: (
      <Image
      src={networking}
      alt="network"
      width={w}
      height={l}
      className="rounded-md"
    />
    ),
    title: "Network Installation and Configuration",
    paragraph:
      "Connect all your devices with a professionally installed and configured network for smooth day-to-day operations.",
  },
  {
    id: 4,
    icon: (
      <Image
      src={itprinter}
      alt="printer"
      width={w}
      height={l}
      className="rounded-md"
    />
    ),
    title: "Printer and Smart Device Setup",
    paragraph:
      "Seamless installation of printers and smart devices—fully connected to your network and ready to go.",
  },
  {
    id: 5,
    icon: (
      <Image
      src={ai}
      alt="ai"
      width={w}
      height={l}
      className="rounded-md"
    />
    ),
    title: "AI Integration & Automation",
    paragraph:
      "Streamline your operations with custom AI tools that automate tasks and boost your efficiency.",
  },
  {
    id: 6,
    icon: (
      <Image
      src={webdesign}
      alt="webdesign"
      width={w}
      height={l}
      className="rounded-md"
    />
    ),
    title: "Website Design, Hosting & Management",
    paragraph:
      "Get a clean, professional website designed, hosted, and managed—so you can focus on your business.",
  },
];
export default featuresData;
