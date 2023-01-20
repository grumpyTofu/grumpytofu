import Footer from "@portfolio/components/footer";
import Navbar from "@portfolio/components/navbar";
import { NextPage } from "next";

const ErrorPage: NextPage = ({}) => {
  return (
    <>
      <Navbar />
      <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center pb-[10rem]">
        <div className="rounded-xl py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-10/12 z-10">
          <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center">
            404 | <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">Not Found</span>
          </h1>
          <p className="leading-normal text-base md:text-2xl mb-8 text-center">What could you possibly be looking for???</p>
        </div>
      </div>
      <Footer className="absolute bottom-0 left-0 w-full" />
    </>
  );
};

export default ErrorPage;
