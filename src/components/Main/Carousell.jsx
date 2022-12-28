import React, { useRef, useEffect, useState } from 'react'
import data from './data.json';

const Carrusel = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

    return (
    <div className="carousel my-12 mx-auto">
      <h3 className='text-center font-bold uppercase text-2xl'>Post de Instagram</h3>
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className="text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('prev')}
          >
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button onClick={moveNext} className="text-white w-10 h-full text-center opacity-75  hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300" disabled={isDisabled('next')} >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-20 -ml-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div ref={carousel} className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0" >
          {data.resources.map((resource, index) => {
            return (
              <div key={index} className="carousel-item text-center relative w-64 h-64 snap-start">
                <a href={resource.link} className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0" >
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" >
                    <defs>
                      <clipPath id="blob">
                      <path fill="#FF0066" d="M52.6,-62.1C67.6,-50,79,-33,83.2,-13.9C87.5,5.1,84.7,26.2,75,43.6C65.3,60.9,48.7,74.6,29.8,81.2C10.9,87.8,-10.3,87.2,-29.8,80.6C-49.3,74.1,-67, 61.5,-76.8,44.4C-86.6,27.3,-88.5,5.7,-85,-15.2C-81.5,-36,-72.7,-56.1,-57.7,-68.2C-42.6,-80.3,-21.3,-84.5,-1.3,-83C18.8,-81.4,37.5,-74.3,52.6,-62.1Z" transform="translate(100 100)"/>
                      </clipPath>
                    </defs>
                    <image x={0}y={0} width="100%" height="100%" clipPath="url(#blob)" xlinkHref={resource.imageUrl} preserveAspectRatio="xMidYMid slice" />
                  </svg>
                </a>
                <a href={resource.link} className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 z-10">
                  <h3 className="text-white py-8 my-8 px-3 mx-auto text-2xl">
                    Ver el post
                  </h3>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>


    )
}
export default Carrusel