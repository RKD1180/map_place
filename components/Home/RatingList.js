import React, { useState } from 'react'
import Data from '../shared/Data/Data'
import { Checkbox } from '../ui/checkbox'

export const RatingList = () => {
    const [ratingList, setRatingList] = useState(Data.ratingList)
    const [selectedrating, setSelectedrating] = useState([])

    const handlerating = (value) => {
        const findValue = selectedrating.find(r => r.id === value?.id)
        if (!findValue) {
            setSelectedrating([...selectedrating, value])
        } else {
            const updateSelectedrating = selectedrating.filter((_, index) => index !== value.idx)
            console.log("🚀 ~ handlerating ~ updateSelectedrating:", updateSelectedrating)
            setSelectedrating(updateSelectedrating)
        }
    }
    return (
        <div className='m-5'>
            <h2 className='font-bold mb-4'>Range Select</h2>
            <div className='grid grid-cols-12 gap-2 w-full'>
                <div className='col-span-12'>
                    {ratingList.map((rating, idx) => (
                        <div className="flex items-center space-x-2 gap-3" key={idx} onClick={() => {
                            console.log("click");
                            handlerating({ ...rating, idx })
                        }}>
                            <Checkbox id={rating?.id} />
                            <label
                                htmlFor={rating?.id}
                                className="text-sm my-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"

                            >
                                {rating?.icon}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
