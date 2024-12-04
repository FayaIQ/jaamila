import React from 'react'
import ios from "../src/images/ios.png"
import android from "../src/images/android.png"
import jamela from "./images/jamela.png"
import image1 from "../src/images/image1.webp"
import image2 from "../src/images/image2.webp"
import image3 from "../src/images/image3.webp"
import image4 from "../src/images/image4.webp"
import image5 from "../src/images/image5.webp"
import Carousel from './compos/Carousel'

const App = () => {
  let images = [image1, image2, image3, image4, image5]
  return (
    <div id='land' className={`lg:flex grid lg:flex-row-reverse lg:justify-around justify-items-center bg-gradient-to-tr from-green-800 to-green-400 items-start lg:items-center lg:p-20 py-20 h-full lg:h-screen`} >
      <div className={`grid justify-items-center lg:justify-items-end`} >
        <img className={`h-[40vw] rounded-[7vw] lg:h-[17vw] lg:rounded-[3vw] shadow-2xl`} src={jamela} alt="" />
        <h1 dir='rtl' className={`text-white text-[7vw] lg:text-[4vw] font-medium my-[5vw]`} > كل اللي تريده بمكان واحد. </h1>
        <div className={`flex justify-between items-center`} >
          <a href="https://apps.apple.com/us/app/id6444753655"><img className={`rounded-[8rem] h-[10vw] lg:h-[5vw] border-2 border-green-600 mx-3`} src={ios} alt="" /></a>
          <a href="https://play.google.com/store/apps/details?id=com.jaamila"><img className={`rounded-[8rem] h-[10vw] lg:h-[5vw] border-2 border-green-600 mx-3`} src={android} alt="" /></a>
        </div>
      </div>
      <Carousel images={images} src={image1} alt="" />
    </div>
  )
}

export default App
