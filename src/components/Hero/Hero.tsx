import { Link } from "react-router-dom";
import { BackgroundBeamsWithCollision } from "../ui/BackgroundBeam";

const Hero = () => {
  return (
    <section>
      <BackgroundBeamsWithCollision>
        <div
          id="home"
          className="md:h-[650px] lg:h-[690px] xl:h-[620px] 2xl:h-[650px] h-[520px] bg-gradient-to-r from-[#000018] to-[#010524] "
        >
          <div className="relative bg-cover h-[615px] bg-center mx-auto mt-16">
            <div className=" mx-auto h-full flex justify-between items-center px-10">
              <div className="flex items-end animate-spotlight mt-20">
                <div
                  className="h-[160px] w-[160px] rounded-full"
                  style={{
                    background:
                      "linear-gradient(180deg, rgb(247, 246, 246) 0%, rgb(248, 48, 224) 80%, rgb(168, 249, 237) 100%)",
                    filter: "blur(130px)",
                  }}
                ></div>
              </div>
            </div>

            <div className="relative 2xl:bottom-[540px] lg:bottom-[540px] xl:bottom-[540px]  sm:bottom-[560px] bottom-[560px]">
              <div className="flex flex-col justify-center items-center mt-2 ">
                <h1 className="2xl:text-[60px] xl:text-[50px] lg:text-[46px] md:text-[44px] px-[6px] text-center text-[25px] bg-gradient-to-r lg:px-44 from-[#b3b3b3]  via-[#c9c9c9] font-Rubik  to-[#eaeaea] bg-clip-text text-transparent leading-tight mt-3 font-bold">
                  Discover the Future of Shopping with a Cart System That Works{" "}
                  <span className="text-violet-500">Seamlessly.</span>
                </h1>

                <p className="md:text-[15px] text-[11px] lg:px-64 px-4 font-normal font-sora mt-4 md:leading-6 text-center text-[#c7c7c7ca]">
                  Discover a seamless way to browse, add to your cart, and
                  manage your purchases with ease. Everything you need, all in
                  one place. Happy Shopping..!!
                </p>

                <Link to={"/cart"}>
                  <button className="relative z-30 cursor-pointer inline-flex h-11 mt-6 overflow-hidden rounded-md p-[1.5px] focus:outline-none gap-2">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex font-Kanit h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-900 px-7 py-1 font-medium text-white backdrop-blur-3xl text-xs sm:text-sm">
                      Go To Cart Page
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </section>
  );
};

export default Hero;
