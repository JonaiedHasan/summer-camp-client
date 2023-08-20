/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

import { MdOutlineDoneAll } from "react-icons/md";
const ExtraSection = () => {
  return (
    // <section className="bg-gray-100 py-16">
    //   <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="text-center">
    //       <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
    //         ----------Start Today----------
    //       </h2>
    //       <p className="mt-4 text-lg text-gray-600">
    //         Tired of an endless to-do list? Fed up with past struggles to get fit? Sick of stress and tension holding you back?
    //       </p>
    //     </div>
    //     <div className="mt-10">
    //       <p className="text-lg text-gray-700">
    //         It's time for a change. Embrace a healthier lifestyle with our diverse range of sports classes led by expert instructors.
    //         Whether you're a beginner or an experienced athlete, we have something for everyone.
    //       </p>
    //       <p className="mt-4 text-lg text-gray-700">
    //         Say goodbye to the excuses and step into a world of fitness that's convenient, engaging, and tailored to your schedule.
    //         Join us today and transform your life, one class at a time.
    //       </p>
    //       <p className="mt-4 text-lg text-gray-700">
    //         Your journey to a fitter, happier you starts now.
    //       </p>
    //       <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">
    //         Enroll in a class today!
    //       </button>
    //     </div>
    //   </div>
    // </section>
    // <section className="bg-gradient-to-b from-blue-600 to-blue-400 py-16 text-white">
    //   <div className="max-w-5xl mx-auto px-6 lg:px-8">

    //   </div>
    // </section>

    <div className="relative w-full">
      <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: `url("https://www.rankone.com/content/Images/hero-bg.jpg")` }}>
        <div className="hero-overlay bg-opacity-50 bg-black"></div>
        <div className="hero-content text-neutral-content">
          <div>
            <h1 className='text-5xl font-bold text-white pb-6'>Start Your Sports Adventure Today!</h1>
            <h1 className='text-2xl text-white font-semibold flex gap-3 items-center pb-2'><MdOutlineDoneAll className='text-3xl text-yellow-300 '></MdOutlineDoneAll> Triumph Over Past Challenges
            </h1>
            <h1 className='text-2xl text-white font-semibold flex gap-3 items-center pb-2'><MdOutlineDoneAll className='text-3xl text-yellow-300'></MdOutlineDoneAll> Transform Through the World of Sports
            </h1>
            <h1 className='text-2xl text-white font-semibold flex gap-3 items-center pb-2'><MdOutlineDoneAll className='text-3xl text-yellow-300'></MdOutlineDoneAll> Explore a World of Fitness
            </h1>
            <h1 className='text-2xl text-white font-semibold flex gap-3 items-center pb-2'><MdOutlineDoneAll className='text-3xl text-yellow-300'></MdOutlineDoneAll> Master Your Athletic Journey
            </h1>
            <h1 className='text-2xl text-white font-semibold flex gap-3 items-center pb-8'><MdOutlineDoneAll className='text-3xl text-yellow-300'></MdOutlineDoneAll> Ignite Your Passion for Sports
            </h1>
           
            <Link to="/classes" >

        <button className='text-2xl btn py-2 px-4 bg-yellow-400 hover:bg-yellow-500 text-slate-700'>Get Started Now</button>
            </Link>

          </div>
        </div>
      </div>

    </div>
  );

};

export default ExtraSection;