import React, { useState } from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { AiOutlineRight } from 'react-icons/ai'
import {RxDotFilled} from 'react-icons/rx'

const Slider = () => {
    const sliders = [
        {
            url: 'https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/9b53bd00f765e2d7.jpg?q=50'
        },
        {
            url: 'https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/5d196529166a8700.jpg?q=50'
        },
        {
            url: 'https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/43afe532a275efae.jpg?q=50'
        },
        {
            url: 'https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/f48fe3fd7cd40225.jpg?q=50'
        },

    ]
    const [currentIndex, setCurrentIndex] = useState(0)
    const prevSlide = () => {
        const isFristSlide = currentIndex === 0;
        const newIndex = isFristSlide ? sliders.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    };
    const nextSlide = () => {
        const isLastSlide = currentIndex === sliders.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    };

    const goToSlide = (slideIndex) =>{
        setCurrentIndex(slideIndex)
    }

    return (
        <>
            <div className='max-w-[1400px] h-[320px] w-full m-auto   relative group'>
                <div style={{ backgroundImage: `url(${sliders[currentIndex].url})` }} className='w-full h-full 
                     bg-center bg-no-repeat rounded-3xl  duration-700'></div>
                {/* left Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%]
                    left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <AiOutlineLeft onClick={prevSlide} size={30} />
                </div>
                {/* right Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] 
                    right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <AiOutlineRight onClick={nextSlide} size={30} />
                </div>
                <div className='flex -mt-12 justify-center'>
                    {sliders.map((slide , slideIndex) =>(
                        <div 
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-2xl cursor-pointer '>
                            <RxDotFilled/>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Slider;