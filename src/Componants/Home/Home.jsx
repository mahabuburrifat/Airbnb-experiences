import React from "react"
import Cart from "./Cart.jsx"
import CartData from "./CartData.jsx"
import Gallery from "./Gallery.jsx"

export default function Home () {
    return (
        <div>
            <Gallery />
            <div className="bg-orange-600 text-white p-5 flex justify-between space-x-10"> 
                {CartData.map((CartData) => (
                    <Cart 
                        key = {CartData.id}
                        img = {CartData.img}
                        name = {CartData.name}
                        rating = {CartData.rating}
                        experience = {CartData.experience}
                    />

                ))}
            
            </div>
        </div>
    )
}