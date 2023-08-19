/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from 'react'
import { TweenMax, Power3 } from 'gsap'

const App = () => {
  let ImageItem = useRef(null);
  let TextItem = useRef(null);
  let Text1Item = useRef(null);
  let Image1Item = useRef(null);
  console.log(ImageItem)

  useEffect(() => {
    console.log(ImageItem);
    TweenMax.to(
      Image1Item, 0.8, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 0,
    }
    )
    TweenMax.to(
      Text1Item, 0.8, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 0.5,
    }
    )
    TweenMax.to(
      ImageItem, 0.8, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 1,
    }
    )
    TweenMax.to(
      TextItem, 0.8, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 1.5,
    }
    )
    // ImageItem.style.display = 'none'
  }, [])
  return (
    <div className="wrapper h-full w-full flex overflow-x-hidden justify-center flex-col bg-slate-300 items-center m-0 font-poppins py-6 md:h-full md:w-screen ">

      <div className="opacity-0 wrap-01 text-center text-5xl my-20 font-semibold flex flex-row" ref={element => {
        Text1Item = element
      }}>Welcome to my <span className="text-sky-700">Hub</span>! <span><div className="hover:rotate-45 cursor-pointer duration-300 hover:ease-in-out">👋</div></span></div>


      <div ref={element => { Image1Item = element }} className="opacity-0 group max-md:w-[500px] md:h-[400px] wrap-02 shadow-slate-800 w-[1000px] h-max shadow-custom rounded-[30px] hover:scale-95 cursor-pointer hover:ease-in-out duration-300 object-cover overflow-hidden"><img src='../banner.svg' /></div>


      <div className="opacity-0 wrap-03 text-center text-2xl my-20 font-normal flex flex-row" ref={element => {
        TextItem = element
      }}>Student<span><div className="hover:rotate-45 cursor-pointer duration-300 hover:ease-in-out mx-3">✏️</div></span> . Programmer<span><div className="mx-3 hover:rotate-45 cursor-pointer duration-300 hover:ease-in-out">🤖</div></span> . Tech Enthusiast<span><div className="mx-3 hover:rotate-45 cursor-pointer duration-300 hover:ease-in-out">🚀</div></span></div>


      <div ref={element => { ImageItem = element }} className="opacity-0 group max-md:w-[500px] md:h-[400px] wrap-02 shadow-slate-800 w-[1000px] h-max shadow-custom rounded-[60px] hover:scale-95 cursor-pointer hover:ease-in-out duration-300 mb-20"><img src='../banner-figma.png' /></div>
    </div>
  )
}

export default App