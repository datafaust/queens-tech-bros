"use client";

import React, { useState, useEffect } from "react";
import { FaCalendar } from "react-icons/fa";
import { PopupModal } from "react-calendly";
import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  // ✅ Set root element after component mounts
  useEffect(() => {
    const root = document.getElementById("__next") || document.body;
    setRootElement(root);
  }, []);

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="mb-12 rounded-xs bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Want to Contact Us?
              </h2>
              <div className="mb-12 text-base font-medium text-body-color">
                <p>
                  For any inquiries, please email:{" "}
                  <a
                    href="mailto:queenstechbros@gmail.com"
                    className="text-amber-600 hover:text-amber-700 hover:underline transition"
                  >
                    queenstechbros@gmail.com
                  </a>{" "}
                  or call/text us at either of the numbers below:
                </p>

                <div className="mt-4 flex flex-col gap-2">
                  <a
                    href="tel:6465435536"
                    className="text-amber-600 text-3xl hover:text-amber-700 hover:underline transition cursor-pointer"
                  >
                    (646) 543-5536
                  </a>
                  <p>--------------------------</p>
                  <a
                    href="tel:6466393360"
                    className="text-amber-600 text-3xl hover:text-amber-700 hover:underline transition cursor-pointer"
                  >
                    (646) 639-3360
                  </a>
                </div>
              </div>
              <div>
                <p>
                  Schedule a time and date and we will get back to you as soon as possible!
                </p>
              </div>

              <button
                onClick={() => setIsOpen(true)}
                className="mt-6 inline-flex items-center gap-2 rounded-xs bg-primary px-6 py-3 text-white font-medium shadow-submit hover:bg-primary/90 transition duration-300 dark:shadow-submit-dark cursor-pointer"
              >
                <FaCalendar className="h-5 w-5" />
                Schedule a Phone Meeting
              </button>

              {/* ✅ Show modal only after rootElement is available */}
              {isOpen && rootElement && (
                <PopupModal
                  url="https://calendly.com/faustolopez110/30-minute-connection-session"
                  onModalClose={() => setIsOpen(false)}
                  open={isOpen}
                  rootElement={rootElement}
                />
              )}

              {/* Contact Form */}
              <form>
                {/* ... your form elements ... */}
              </form>
            </div>
          </div>

          {/* <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;



// "use client";

// import React, { useState } from "react";
// import { FaCalendar } from "react-icons/fa";
// import { PopupModal } from "react-calendly";
// import NewsLatterBox from "./NewsLatterBox";

// const Contact = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
//       <div className="container">
//         <div className="-mx-4 flex flex-wrap">
//           <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
//             <div
//               className="mb-12 rounded-xs bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
//               data-wow-delay=".15s"
//             >
//               <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
//                 Want to Contact Us?
//               </h2>
//               <p className="mb-12 text-base font-medium text-body-color">
//                 For any inquiries, please email: queenstechbros@gmail.com
//                 <br />
//                 or call us at:
//                 <br />
//                 (646) 543-5536
//                 <br />
//                 (646) 639-3360
//               </p>

//               <div>
//                 <p>
//                   Note that before any work can be performed, a (virtual)
//                   meeting is usually held to gather requirements and discuss
//                   your needs. Feel free to schedule a meeting below.
//                 </p>
//               </div>

//               <button
//                 onClick={() => setIsOpen(true)}
//                 className="mt-6 inline-flex items-center gap-2 rounded-xs bg-primary px-6 py-3 text-white font-medium shadow-submit hover:bg-primary/90 transition duration-300 dark:shadow-submit-dark"
//               >
//                 <FaCalendar className="h-5 w-5" />
//                 Schedule a Meeting
//               </button>

//               {/* Calendly Modal */}
//               {isOpen && (
//                 <PopupModal
//                   url="https://calendly.com/faustolopez110/30-minute-connection-session"
//                   onModalClose={() => setIsOpen(false)}
//                   open={isOpen}
//                   rootElement={typeof window !== "undefined" ? document.getElementById("__next")! : undefined}
//                 />
//               )}

//               {/* Contact Form */}
//               <form>
//                 {/* ... your form elements ... */}
//               </form>
//             </div>
//           </div>

//           <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
//             <NewsLatterBox />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
