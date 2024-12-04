import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Carousel = ({images, autoSlide = false, slideEvery}) => {
	let [index, setIndex] = useState(0)
	
	let next = () => {
		setIndex(index === images.length - 1 ? 0 : index + 1)
	}
	let prev = () => {
		setIndex(index === 0 ? images.length - 1 : index - 1)
	}

	useEffect(() => {
		if (!autoSlide) return
		let slideInterval = setInterval(next, slideEvery)

		return () => clearInterval(next, slideEvery)
	}, [])

	return (
		<div className={`relative overflow-hidden rounded-[1rem] h-[120vw] w-[60vw] object-cover lg:h-[40vw] lg:w-[20vw] shadow-2xl lg:mt-0 mt-[7vw]`} > 
			<div className={`flex transition-transform ease-out duration-500`} style={{transform: `translate(-${index * 100}%)`}} >
				{images.map((img) => (
					<img className={`rounded-[1rem] h-[150vw] w-[80vw] lg:h-[45vw] lg:w-[20vw]`} src={img} />
				))}
			</div>
			<div className={`absolute right-0 left-0 hidden md:flex top-0 justify-between items-center inset-0`} >
				<button onClick={prev} className={`text-white p-4 bg-green-500/80 text-lg rounded-full mx-5`} ><FaArrowLeft /></button>
				<button onClick={next} className={`text-white p-4 bg-green-500/80 text-lg rounded-full mx-5`} ><FaArrowRight /></button>
			</div>
			<div className={`absolute right-0 left-0 bottom-4`} >
				<div className={`flex justify-center items-center`} >
					{images.map((_, i) => (
						<div onClick={() => setIndex(i)} className={`${index === i ? "p-2" : "bg-opacity-50"} cursor-pointer transition-all w-3 h-3 mx-1 rounded-full bg-black/30 `} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Carousel
