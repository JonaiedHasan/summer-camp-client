/* eslint-disable no-unused-vars */
import React from 'react';
import Marquee from "react-fast-marquee";

import { RiDoubleQuotesR } from "react-icons/ri";
const Reviews = () => {
  return (
    <div className='py-7'>
      <h1 className='text-5xl text-center font-bold text-color mb-10 pt-2'>Reviews</h1>
      <Marquee pauseOnHover='true'>
        <div className=" card mx-14 my-2 mt-14  w-[300px]  bg-blue-200 text-black bg-opacity-75 shadow-xl rounded-2xl">
          <figure><img src="https://i.ibb.co/qChS12C/businessman-smiling-arms-crossed-on-260nw-2023023581.webp" alt="Shoes" className="w-28 h-28 rounded-full hover:scale-125 transition-all duration-500 absolute border-white border-4" /></figure>
          <div className="card-body text-center">
            <h2 className="card-title">
            </h2>
            <div className='font-semibold pt-5'>
              <p>Jackson Clark </p>
              <p className='text-sm font-normal'> This website is a hidden gem for sports enthusiasts. The classes are top-notch, and the instructors' expertise is evident. I appreciate the convenience of being able to join classes from home. The booking process is straightforward, and the website's interface is intuitive. Overall, a fantastic resource! </p>
            </div>
            <div className='p-2'>
              <RiDoubleQuotesR className='text-xl mx-auto outline outline-offset-4 rounded-full'></RiDoubleQuotesR>
            </div>

          </div>
        </div>
        <div className="card mx-14 my-2 mt-14  w-[300px]  bg-blue-200 text-black bg-opacity-75 shadow-xl rounded-2xl">
          <figure><img src="https://i.ibb.co/8gph0fn/Anderson-Lucy.jpg" alt="Shoes" className="w-28 h-28 rounded-full hover:scale-125 transition-all duration-500 absolute border-white border-4" /></figure>
          <div className="card-body text-center">
            <h2 className="card-title">
            </h2>
            <div className='font-semibold pt-5'>
              <p> Sophia Lee </p>
              <p className='text-sm font-normal'> I can't say enough good things about this sports class website. The classes are well-structured and cater to different skill levels. The instructors are supportive, and the virtual format works surprisingly well. Booking and managing classes is hassle-free, and it's been a great way for me to diversify my workouts. </p>


            </div>

            <div className='p-2'>
              <RiDoubleQuotesR className='text-xl mx-auto outline outline-offset-4 rounded-full'></RiDoubleQuotesR>
            </div>
          </div>
        </div>
        <div className="card mx-14 my-2 mt-14  w-[300px]  bg-blue-200 bg-opacity-75 text-black shadow-xl rounded-2xl">
          <figure><img src="https://i.ibb.co/mFc2VgR/images-1.jpg" alt="Shoes" className="w-28 h-28 rounded-full hover:scale-125 transition-all duration-500 absolute border-white border-4" /></figure>
          <div className="card-body text-center">
            <h2 className="card-title">
            </h2>
            <div className='font-semibold pt-5'>
              <p> Ava Turner </p>
              <p className='text-sm font-normal'> This platform has made fitness so enjoyable and accessible. The sports classes are dynamic and led by skilled instructors. I've been able to explore new sports I never thought I'd try. The booking process is smooth, and I'm impressed with how well the virtual classes are executed. A big thumbs up from me! </p>

            </div>

            <div className='p-2'>
              <RiDoubleQuotesR className='text-xl mx-auto outline outline-offset-4 rounded-full'></RiDoubleQuotesR>
            </div>
          </div>
        </div>
      </Marquee>

    </div>
  );
};

export default Reviews;


