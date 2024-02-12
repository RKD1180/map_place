"use client"
import React, { useState } from 'react'
import Data from '../shared/Data/Data'
import Image from 'next/image'

const Category = () => {
    const [categoryList, setcategoryList] = useState(Data.CategoryListData)
    const [selectedFood, setselectedFood] = useState(null)
    return (
        <div className='m-5'>
            <h2 className='font-bold mb-4'>Select Food Type</h2>
            <div className='grid grid-cols-12 gap-2'>
                {categoryList.map((category, idx) => (
                    <div key={idx} onClick={() => setselectedFood({ ...category, index: idx })} className={`md:col-span-3 col-span-12 bg-gray-300 flex flex-col items-center p-3 rounded-lg cursor-pointer ${selectedFood?.index === idx && 'border border-gray-800'}`}>
                        <Image src={category?.icon} alt="image" width={40} height={40} />
                        <h2 className='font-semibold'>{category?.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category