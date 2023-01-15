import { NextPage } from "next";

const ErrorPage: NextPage = ({}) => {
  return (
    <div className="flex flex-col w-full justify-center overflow-y-hidden">
      <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center">
        404 | <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">Not Found</span>
      </h1>
      <p className="leading-normal text-base md:text-2xl mb-8 text-center">What could you possibly be looking for???</p>
    </div>
  );
};

export default ErrorPage;
