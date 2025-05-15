import Image from "next/image";
import TeamMemberCard from "../../components/TeamCard/TeamCard";
import faustoHeadshot from "../../../public/images/team/faustoHeadshot.jpeg"; 
import nicholasHeadshot from "../../../public/images/team/nicoHeadshot.jpg";
const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h1 className="text-center text-4xl font-bold mb-3 text-white">
            Meet The Team!
          </h1>
          <p className="text-base text-center md:text-lg text-amber-400 font-bold mb-12">
            Get to know the talented people behind our mission.
          </p>

          <div className="flex flex-wrap justify-center gap-25">
            <TeamMemberCard
              name="Fausto Lopez"
              title="Founder"
              accolades={`🛠️ Full Stack Developer\n🎓 M.S. in Applied Research\n☁️ AWS Certified Developer\n💻 Data Science Certified`}
              description="Fausto is a seasoned technology leader with over a decade of experience across the private, public, and nonprofit sectors. He specializes in building scalable applications, designing robust infrastructures, developing high-performance APIs, and transforming complex data into actionable insights. With a deep understanding of each sector's unique challenges, Fausto delivers integrated, data-driven solutions that bridge the gap between mission and execution."
              image={faustoHeadshot}
            />
            <TeamMemberCard
              name="Nicholas Lopez"
              title="Co-Founder"
              accolades={`🎖️ U.S. Marine Corps Veteran\n🎓 B.S. in Networking & Security\n☁️ AWS Certified Practitioner\n💻 Web Development Certified`}
              description="Nicholas brings a strong work ethic and focus to every project, shaped by his service in the U.S. Marine Corps. With a background in Networking and Security, he works on building and maintaining reliable and secure networks, and uses cloud tools like AWS to support business infrastructure. He’s also a web developer who has built websites and apps for small businesses—helping them advertise, connect with customers, and grow their presence online."
              image={nicholasHeadshot}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
