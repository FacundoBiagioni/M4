import { IProduct } from "@/types";
import React from "react";

const ProductDetail: React.FC<IProduct> = ({name, image, description,  stock, price}) => {
    return (
        <div className="font-sans bg-white">
            <div className="p-4 lg:max-w-7xl max-w-4xl mx-auto">
                <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6 rounded-lg">
                    <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">

                        <div className="px-4 py-10 rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative">
                            <img src={image} />
                            <button type="button" className="absolute top-4 right-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="#ccc" className="mr-1 hover:fill-[#333]" viewBox="0 0 64 64">
                                    <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-extrabold text-gray-800">{name}</h2>

                        <div className="flex space-x-2 mt-4">
                            <div>
                                <h4 className="mb-6 text-gray-500 dark:text-gray-400">available ({stock})</h4>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <p className="text-gray-800 text-3xl font-bold">${price}</p>
                        </div>

                        <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

                            <p className="mb-6 text-gray-500 dark:text-gray-400">{description}</p>

                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-gray-800">Choose a Color</h3>
                            <div className="flex flex-wrap gap-3 mt-4">
                                <button type="button" className="w-10 h-10 bg-black border-2 border-white hover:border-gray-800 rounded-full shrink-0 transition-all"></button>
                                <button type="button" className="w-10 h-10 bg-gray-300 border-2 border-white hover:border-gray-800 rounded-full shrink-0 transition-all"></button>
                                <button type="button" className="w-10 h-10 bg-gray-100 border-2 border-white hover:border-gray-800 rounded-full shrink-0 transition-all"></button>
                                <button type="button" className="w-10 h-10 bg-blue-400 border-2 border-white hover:border-gray-800 rounded-full shrink-0 transition-all"></button>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <button type="button" className="min-w-[200px] px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded">Buy now</button>
                            <button type="button" className="min-w-[200px] px-4 py-2.5 border border-blue-600 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded">Add to cart</button>
                        </div>
                    </div>
                </div>

                <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
                    <h3 className="text-xl font-bold text-gray-800">Product information</h3>
                    <ul className="mt-4 space-y-6 text-gray-800">
                        <li className="text-sm">TYPE <span className="ml-4 float-right">LAPTOP</span></li>
                        <li className="text-sm">RAM <span className="ml-4 float-right">16 BG</span></li>
                        <li className="text-sm">SSD <span className="ml-4 float-right">1000 BG</span></li>
                        <li className="text-sm">PROCESSOR TYPE <span className="ml-4 float-right">INTEL CORE I7-12700H</span></li>
                        <li className="text-sm">PROCESSOR SPEED <span className="ml-4 float-right">2.3 - 4.7 GHz</span></li>
                        <li className="text-sm">DISPLAY SIZE INCH <span className="ml-4 float-right">16.0</span></li>
                        <li className="text-sm">DISPLAY SIZE SM <span className="ml-4 float-right">40.64 cm</span></li>
                        <li className="text-sm">DISPLAY TYPE <span className="ml-4 float-right">OLED, TOUCHSCREEN, 120 Hz</span></li>
                        <li className="text-sm">DISPLAY RESOLUTION <span className="ml-4 float-right">2880x1620</span></li>
                    </ul>
                </div>

                
            </div>
        </div>
    )
}

export default ProductDetail