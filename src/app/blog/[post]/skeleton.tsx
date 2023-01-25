import { Section } from "@portfolio/components";
import React from "react";

const BlogPostLoadingSkeleton = () => {
  return (
    <Section id="loading">
      <div className="glass-light p-12">
        <div className="animate-pulse">
          <div className="flex items-center justify-center h-12 w-full">
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-6"></div>
          </div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-11/12 mx-12 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-full mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-11/12 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-full mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-11/12 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-full mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-10/12 [360px] mb-6"></div>
          
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-11/12 mx-12 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-full mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-11/12 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-11/12 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-full mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-full mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-11/12 [360px]"></div>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </Section>
  );
};

export default BlogPostLoadingSkeleton;
