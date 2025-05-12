import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="text-body-color mb-5 flex items-center text-lg font-medium">
      <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Crafted for New and Growing Busineses."
                paragraph="We specialize in IT solutions built for new and growing businesses — from setting up networks to ongoing tech support. Our services are flexible, reliable, and crafted to help small teams operate smoothly and scale with confidence."
                mb="44px"
              />

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Stay connected with fast, reliable internet" />
                    <List text="Fix tech issues before they slow you down" />
                    <List text="Easily share files and devices across your office" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Keep your data safe and easy to recover" />
                    <List text="Protect your business from online threats" />
                    <List text="Build a strong tech setup that grows with you" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-25/24 max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/about-image.svg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/about/about-image-dark.svg"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
                {/* <div className="flex flex-col">
                  <div className="">
                    <h1 className="text-center">MEET THE TEAM</h1>
                  </div>
                  <div className="flex justify-around text-center">
                    <div className="p-5">
                      <div className="flex flex-col items-center text-center space-y-2">
                        <img 
                          src="https://media.istockphoto.com/id/1288129985/vector/missing-image-of-a-person-placeholder.jpg?s=612x612&w=0&k=20&c=9kE777krx5mrFHsxx02v60ideRWvIgI1RWzR1X4MG2Y=" 
                          className="w-20 h-20 rounded-full object-cover"
                        />
                        <h2 className="text-lg font-semibold">Alex Johnson</h2>
                        <p className="text-sm text-gray-600">Chief Executive Officer</p> 
                        <p className="text-xs text-gray-500 italic">Forbes 30 Under 30, TechCrunch Disrupt Winner</p>
                        <p className="text-sm text-gray-700 max-w-xs">
                          Alex is a visionary leader with over 10 years of experience in technology startups. 
                          Known for innovation and strategic thinking, he has led multiple successful product launches.
                        </p>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex flex-col items-center text-center space-y-2">
                        <img 
                          src="https://media.istockphoto.com/id/1288129985/vector/missing-image-of-a-person-placeholder.jpg?s=612x612&w=0&k=20&c=9kE777krx5mrFHsxx02v60ideRWvIgI1RWzR1X4MG2Y=" 
                          className="w-20 h-20 rounded-full object-cover"
                        />
                        <h2 className="text-lg font-semibold">Samantha Lee</h2>
                        <p className="text-sm text-gray-600">CTO</p> 
                        <p className="text-xs text-gray-500 italic">MIT Alum, Women in Tech Award 2023</p>
                        <p className="text-sm text-gray-700 max-w-xs">
                          Samantha is a tech innovator with a passion for scalable architecture and AI integration. 
                          She has led engineering teams at Fortune 500 companies and co-founded two startups.
                        </p>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
