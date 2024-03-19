import React from "react";

const Career = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl py-8 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="bg-green-700 p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-left">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Get Start Your Journey With Panaverse Today
              </h2>

              <p className="hidden text-white/90 sm:mt-4 sm:block">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                egestas tempus tellus etiam sed. Quam a scelerisque amet
                ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
                quisque ut interdum tincidunt duis.
              </p>

              <div className="mt-4 md:mt-8">
                <a
                  href="#"
                  className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-green-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
            <img
              alt=""
              src="https://scontent.fkhi8-1.fna.fbcdn.net/v/t39.30808-6/432340163_448074937574791_8287267243817691790_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGQR6Mg2XGwstlFc2SbjzvxTQXDBbhwvhtNBcMFuHC-GwdkXrU6q0Plw4ZZq_l59nbpxtR2K7vAgSFWX8gKw_P9&_nc_ohc=-lOP1KTp6twAX-YFesV&_nc_ht=scontent.fkhi8-1.fna&oh=00_AfARDjhkB3RSxbihuQYfI8nhZORlASShIPZkCEjSeKQzZA&oe=65FFC697"
              className="h-40 w-full object-cover sm:h-56 md:h-full"
            />

            <img
              alt=""
              src="https://scontent.fkhi8-1.fna.fbcdn.net/v/t39.30808-6/432252287_445385817843703_1408903469075909643_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEibRojFtn8_zc_8E2c4w5wbHf1mk9vy5hsd_WaT2_LmKBQIZoCKri7FprOnXHSvOLhCwkqHPvPkdZ2Wu8zGZL6&_nc_ohc=l5C1Esj1XQ4AX8P33Ul&_nc_ht=scontent.fkhi8-1.fna&oh=00_AfC-nWPed0ldFsB-LKSJ2hq9h2jut-_uEwSaCPq9vr1uIA&oe=65FE9A43"
              className="h-40 w-full object-left sm:h-56 md:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
