import React, { useState } from 'react'
import Data from '../shared/Data/Data'
import { Slider } from '../ui/slider'

const RangeSelect = () => {
    const [selcetedRange, setselcetedRange] = useState(33)

    return (
        <div className='m-5'>
            <h2 className='font-bold mb-4'>Range Select</h2>
            <div className='grid grid-cols-12 gap-2 w-full'>
                <div className='col-span-12'>
                    <Slider defaultValue={[selcetedRange]} onChange={(e) => selcetedRange(e.target.value)} max={100} step={1} />
                </div>
            </div>
        </div>
    )
}

export default RangeSelect