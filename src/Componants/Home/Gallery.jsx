import React from "react"

import images1 from "../images/hands.png"
import images2 from "../images/girl.png"
import images3 from "../images/girl jump.png"
import images4 from "../images/cook.png"
import images5 from "../images/guiter.png"
import images6 from "../images/microphone.png"
import images7 from "../images/swimming.png"
import images8 from "../images/girl yoga.png"
import images9 from "../images/girl song.png"

export default function Gallery () {
    return (
        <div className="p-8">
            <div className="grid grid-cols-10 px-20 gap-6 cursor-pointer">
                <img 
                    src={images1} 
                    alt="image"    
                    className="rounded-2xl object-cover hover:scale-110 delay-75 transition-transform duration-1000 shadow-2xl w-64 col-span-2 mt-52"
                />
                <img 
                    src={images2} 
                    alt="image"    
                    className="rounded-2xl object-cover hover:scale-110 delay-75 transition-transform duration-1000 shadow-2xl h-60 w-60 col-span-2 mt-20 "
                />
                <img 
                    src={images3} 
                    alt="image"    
                    className="rounded-2xl object-cover hover:scale-110 delay-75 transition-transform duration-1000 shadow-2xl h-80 w-60 col-span-2 mt-36 "
                />
                <img 
                    src={images4} 
                    alt="image"    
                    className="rounded-2xl object-cover hover:scale-110 delay-75 transition-transform duration-1000 shadow-2xl h-80 w-60 col-span-2 mt-20"
                />
                <img 
                    src={images5} 
                    alt="image"    
                    className="rounded-2xl object-cover hover:scale-110 delay-75 transition-transform duration-1000 shadow-2xl h-72 w-60 col-span-2 translate-y-36"
                />
                <img 
                    src={images6} 
                    alt="image"    
                    className="rounded-2xl object-cover hover:scale-110 delay-75 transition-transform duration-1000 shadow-2xl h-80 w-60 col-span-2 translate-x-[230px] -translate-y-[192px]"
                />
                <img 
                    src={images7} 
                    alt="image"    
                    className="rounded-2xl object-cover hover:scale-110 delay-75 transition-transform duration-1000 shadow-2xl h-72 w-60 col-span-2 -translate-y-[50px] translate-x-[230px]"
                />
                <img 
                    src={images8} 
                    alt="image"    
                    className="rounded-2xl object-cover hover:scale-110 delay-75 transition-transform duration-1000 shadow-2xl h-72 w-60 col-span-2 translate-x-[230px] -translate-y-28"
                />
                <img 
                    src={images9} 
                    alt="image"    
                    className="rounded-2xl object-cover hover:scale-110 delay-75 transition-transform duration-1000 shadow-2xl h-80 w-60 col-span-2 translate-x-[230px] -translate-y-20"
                />
            </div>
        </div>
    )
}