import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
    {/* emptied the breadcrumb since its redundant */}
      <Breadcrumb
        pageName=""
        description=""
      />

      <Contact />
    </>
  );
};

export default ContactPage;
