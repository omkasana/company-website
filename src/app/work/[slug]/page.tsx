
import React from "react";
import Image from "next/image";
import WorkBanner from "@/components/UIComponent/Banners/WorkBanner";

export const page = () => {
  return (
    <>
      <div className="mt-20">
        <WorkBanner />

        {/* section-1 */}
        <div
          className="items-center justify-center flex pt-10 mb-10 
             bg-[url('/images/case-studies/sessions-bg.png')] 
             bg-cover bg-center w-full h-auto"
        >
          <div>
            <div className="text-center text-gray-800 px-4 ">
              <h1 className="font-semibold mb-2">Math You Can See</h1>
              <h5 className="max-w-5xl text-2xl mx-auto">
                Math You Can See is a sophisticated online eLearning platform
                that enables students to search, connect with tutors, and
                schedule virtual or in-person sessions for math and science
                subjects.
              </h5>
            </div>

            <div className="max-w-5xl mx-auto mt-10 px-4 text-center items-center flex flex-col justify-center">
              <Image
                src="/images/case-studies/case-study-id-2.png"
                alt="Work Banner"
                width={700}
                height={400}
                className="items-center object-cover"
              />
              <Image
                src="/images/case-studies/case-study-id-7.png"
                alt="Work Banner"
                width={1000}
                height={500}
                className=" items-center object-cover"
              />
            </div>
          </div>
        </div>

        {/* section-2 */}
        <div>
          <div className="pb-5 flex flex-col justify-center items-center mt-10">
            <div className="text-center text-gray-800 px-4">
              <h1 className="font-semibold mb-2">Dynamic Tutor Search</h1>
              <h5 className="max-w-5xl text-2xl mx-auto">
                We build an interactive EdTech platform where students can
                easily search and connect with subject-specific tutors based on
                topics, domain knowledge, and accessibility.
              </h5>
            </div>

            <div className="max-w-6xl mx-auto mt-10 ">
              <Image
                src="/images/case-studies/case-study-id-3.png"
                alt="Work Banner"
                width={1200}
                height={600}
                className="items-center object-cover"
              />
            </div>
          </div>
        </div>

        {/* section-3 */}
        <div
          className="items-center justify-center flex pt-10 pb-10 
             bg-[url('/images/case-studies/bg-image-2.jpg')] 
             bg-cover bg-center w-full h-auto "
        >
          <div>
            <div className="text-center text-gray-800 px-4 ">
              <h1 className=" font-semibold mb-2">Math You Can See</h1>
              <h5 className="max-w-5xl text-2xl mx-auto">
                Math You Can See is a sophisticated online eLearning platform
                that enables students to search, connect with tutors, and
                schedule virtual or in-person sessions for math and science
                subjects.
              </h5>
            </div>

            <div className="max-w-5xl mx-auto mt-10 px-4">
              <div className="flex flex-col md:flex-row items-center justify-center gap-5 rounded-lg overflow-hidden">
                {/* Text Section */}
                <div className="w-full md:w-1/2 p-6 shadow-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.2)] rounded-lg flex items-center justify-center">
                  <div>
                    <h1 className=" font-semibold mb-4">
                      Flexible Virtual Sessions
                    </h1>
                    <h5 className="text-gray-700">
                      The app has intuitive virtual sessions that allow
                      participants to connect and solve problems in real-time
                      while overcoming distance obstacles.
                    </h5>
                  </div>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/2 flex items-center pb-5 justify-center">
                  <Image
                    src="/images/case-studies/case-study-id-4.png"
                    alt="Work Banner"
                    width={400}
                    height={400}
                    // className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-5 rounded-lg overflow-hidden">
                {/* Image Section */}
                <div className="w-full md:w-1/2 flex items-center justify-center">
                  <Image
                    src="/images/case-studies/case-study-id-4-1-1.png"
                    alt="Work Banner"
                    width={400}
                    height={200}
                    className="object-cover"
                  />
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 p-6 shadow-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.2)] rounded-lg flex items-center justify-center">
                  <div>
                    <h1 className="font-semibold mb-4">In-person Meet Ups</h1>
                    <h5 className="text-gray-700">
                      The platform allows students to set up in-person tutoring
                      sessions also. They can choose to learn in a physical
                      setting for deeper comprehension.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section-4 */}
        <div>
          <div className="pb-5 mt-10">
            <div className="text-center text-gray-800 px-4">
              <h1 className="font-semibold mb-2">
                Real-Time Whiteboard Collaboration
              </h1>
              <h5 className="max-w-5xl text-2xl mx-auto">
                Our developers have integrated whiteboards for visual learning,
                live explanations, and group problem-solving during online
                sessions.
              </h5>
            </div>

            <div className="max-w-6xl mx-auto mt-10 ">
              <Image
                src="/images/case-studies/case-study-id-5.png"
                alt="Work Banner"
                width={1200}
                height={600}
                className="w-full h-auto items-center object-cover"
              />
            </div>
          </div>
        </div>

        {/* section-5 */}
        <div
          className="items-center justify-center flex pt-10 mb-10 
             bg-[url('/images/case-studies/sessions-bg.png')] 
             bg-cover bg-center w-full h-auto rounded-lg"
        >
          <div>
            <div className="text-center text-gray-800 px-4 ">
              <h1 className=" font-semibold mb-2">
                Screen Sharing Functionality
              </h1>
              <h5 className="max-w-5xl text-2xl mx-auto">
                We improved the learning experience by integrating a
                screen-sharing feature. Students can solve problems visually and
                quickly share course materials.
              </h5>
            </div>

            <div className="max-w-5xl mx-auto mt-10 px-4">
              <Image
                src="/images/case-studies/case-study-id-6.png"
                alt="Work Banner"
                width={1000}
                height={500}
                // className="w-full h-auto items-center object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default page;
