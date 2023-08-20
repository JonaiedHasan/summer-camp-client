/* eslint-disable no-unused-vars */
import React from 'react';

const Slider = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full ">
                <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/M5Gw90y/depositphotos-310582104-stock-photo-sport-objects-on-black.webp")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h2 className="text-7xl font-bold  text-white">
                            Playmakers  <br />
                                <span className="mx-16">Academy</span> <br />
                            </h2>
                            <p className="text-2xl font-semibold  mt-12 mb-12 text-white">Empowering athletes to reach new heights at Playmakers Academy
                            </p>
                            <button className="btn-primary ">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/mRwXN3k/20210722-105617.jpg")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                        <h2 className="text-7xl font-bold  text-white">
                            Playmakers  <br />
                                <span className="mx-16">Academy</span> <br />
                            </h2>
                            <p className="text-2xl font-semibold  mt-12 mb-12 text-white">Empowering athletes to reach new heights at Playmakers Academy
                            </p>
                            <button className="btn-primary ">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className="hero min-h-screen" style={{ backgroundImage: `url("https://plus.unsplash.com/premium_photo-1664300254614-3d18004978be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                        <h2 className="text-7xl font-bold  text-white">
                            Playmakers  <br />
                                <span className="mx-16">Academy</span> <br />
                            </h2>
                            <p className="text-2xl font-semibold  mt-12 mb-12 text-white">Empowering athletes to reach new heights at Playmakers Academy
                            </p>
                            <button className="btn-primary ">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/Ws8j9gb/fvUDy4.webp")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                        <h2 className="text-7xl font-bold  text-white">
                            Playmakers  <br />
                                <span className="mx-16">Academy</span> <br />
                            </h2>
                            <p className="text-2xl font-semibold  mt-12 mb-12 text-white">Empowering athletes to reach new heights at Playmakers Academy
                            </p>
                            <button className="btn-primary ">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;

