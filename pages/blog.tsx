import React from "react";
import Image from "next/image";

import babyEncryption from "../public/babyEncryptionBg.jpg";

interface Post {
  image: StaticImageData;
  text: string;
  url: string;
}

const posts: Post[] = [
  {
    url: "https://medium.com/@grumpyTofu/babyencryption-technical-analysis-hack-the-box-cryptography-9114bf06701a?source=friends_link&sk=62090b1037db7da7ad70c6d991a71ffc",
    text: "Hack the Box Walkthrough - BabyEncryption",
    image: babyEncryption,
  },
];

interface blogProps {}

const blog: React.FC<blogProps> = ({}) => {
  return (
    <div className="w-full">
      <div className="w-full bg-custom-dark-purple rounded-lg p-5">
        <h2 className="my-6 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight underline text-center pb-4">Posts</h2>
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {posts.map((post) => (
              <div key={post.url}>
                <a href={post.url} target="_blank" rel="noreferrer">
                  <div className="transform-gpu duration-300 hover:scale-105">
                    <Image src={post.image} alt={`${post.text} project image`} layout="responsive" height={300} width={500} />
                  </div>
                </a>
                <p className="text-xl text-white p-2">{post.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default blog;
