"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from 'next/link';

import SectionTitle from "../Common/SectionTitle";
import Carousel from "./Carousel";
const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOneItem = ({title, paragraph, stack, imgSrc, url}) =>{
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <Link href={url} passHref target="_blank">
    <div className="-mx-4 flex flex-wrap items-center pb-16 md:pb-10 lg:pb-20  hover:cursor-pointer">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title={title}
                paragraph={paragraph}
                mb="44px"
              />

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text={stack[0]} />
                    <List text={stack[1]}/>
                    <List text={stack[2]} />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text={stack[3]} />
                    <List text={stack[4]} />
                    <List text={stack[5]} />
                    {/* <List text="Pinecone" />
                    <List text="Hugging Face" /> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src={imgSrc}
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full lg:mr-0"
                />
              </div>
            </div>
          </div>
          </Link>
  )
}

const AboutSectionOne = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

 
  return (
    <section id="about" className="pt-16 md:pt-10 lg:pt-20">
      <div className="container">
      <SectionTitle
            title="Our Work"
            paragraph=""
            center
          />
        <div className="border-b border-body-color/[.15] dark:border-white/[.15] ">
          {currentIndex === 0 && <AboutSectionOneItem 
                                      title="Law AI" 
                                      paragraph={"An AI-powered legal assistant designed to provide accurate answers and insights on a wide range of law-related queries. This advanced bot combines natural language processing with extensive legal knowledge"} 
                                      stack={['TypeScript', 'Next.js', 'OpenAI', 'AWS EC2', 'Hugging Face', 'Firebase']}
                                      imgSrc={"/images/about/lawgpt.svg"}  url={'https://law.qurior.com/'}/>}
          {/* {currentIndex === 1 && <AboutSectionOneItem 
                                      title="Headasdllo" 
                                      paragraph={"akjasdkjaskdjaksdjaksdjksjda"} 
                                      stack={['TypeScript', 'Next.js', 'OpenAI', 'Firebase']}
                                      imgSrc={"/images/about/lawgpt.png"}  />} */}
          <div className="mx-auto text-center mb-10"><Carousel currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} /></div>
        </div>
       
      </div>
    </section>
  );
};

export default AboutSectionOne;
