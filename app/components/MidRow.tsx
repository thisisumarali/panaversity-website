import React from "react";

const MidRow = () => {
  return (
    <section className="py-4 lg:pb-12">
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                alt=""
                src="sirzia.png"
                className="absolute object-bottom inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-100">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Achieve your goals and be proud to be Pakistani.
              </h2>

              <p className="mt-4 text-gray-600">
                This curriculum is intended for beginners who want to learn
                software development from the ground up. The first two quarters
                are shared by all specialties and are dedicated to studying
                Object-Oriented Programming and cutting-edge Full-Stack Web 2.0
                development. It is going to be a fifteen-month-long hybrid
                program that includes both onsite and online classes and is
                divided into five quarters of 13 weeks each. The emphasis will
                be on hands-on learning by educating students to produce
                projects. To accommodate everyone, courses will be held
                primarily on weekends or after 6:00 p.m. (Pakistan Time) on
                weekdays. It employs a hybrid teaching format, with core onsite
                classes complemented by online Zoom laboratories and recorded
                videos.
              </p>

              <a
                href="#"
                className="mt-8 inline-block rounded border border-green-600 bg-green-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-green-500"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MidRow;
