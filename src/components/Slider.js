import React, { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Image from './Image';
//import { FaSquareArrowUpRight } from "react-icons/fa6";


const Slider = ({ imgData, imgClass, h, folder = "" }) => {
    const [active,setActive] = useState(0);

    function previousSlide(){
        const num = (active > 0) ? active-1 : imgData.length-1;
        setActive(num);
    }

    function nextSlide(){
        const num = (active === imgData.length-1) ? 0 : active+1;
        setActive(num);
    }

    function showSlide(id){
        setActive(id);
    }

    return (
        <>
            <div className={imgClass ? imgClass :`slideshow relative w-full bg-green p-4`}>
                <div className={`overflow-hidden w-full relative ${h === "full" ? 'aspect-square' : 'aspect-[3/2]'}`}>
                {imgData.sort((a, b) => a.weight - b.weight).map((obj,i) => (
                    <div key={obj.url} className={`absolute w-full h-0  ${h === "full" ? 'pb-[100%]' : 'pb-[66%]'} overflow-hidden transition-opacity duration-500 ${active === i ? 'opacity-100' : 'opacity-0' }`}>
                        <Image src={folder ? folder + '/' + obj.url : obj.url} alt={(obj.title) ? obj.title : ''}/>
                        { obj.caption ? <p>{obj.caption}</p> : null}
                    </div>
                ))}
                </div>
                { imgData.length > 1 ?
                <div className="slideshow-nav">
                    <button className="arrow previous" onClick={previousSlide}>
                        <HiChevronLeft/>
                    </button>
                    <button className="arrow next" onClick={nextSlide}>
                        <HiChevronRight/>
                    </button>
                    <div className="dot-nav leading-3 absolute bottom-1 left-0 w-full z-10 text-center">
                        {imgData.map((obj,i) => (
                            <button key={`dot-${i}`} onClick={(e) => {showSlide(i)}} className={active === i ? 'active' : '' }/>
                        ))}
                    </div>
                </div>
                :''}
            </div>
        </>
    )
}

export default Slider;