import Image from 'next/image';
import React from 'react';
import { DirectionAwareHoverDemo } from '../components/DirectionAwareHoverDemo';

const Page = () => {
    return (
        <div>
            <div className='w-full  px-18 py-18'>
                <Image
                    className='rounded-lg px-6 py-4'
                    src="/about.jpg"
                    alt=''
                    layout="responsive"
                    width={800} // Replace with the actual width of the image
                    height={800} // Replace with the actual height of the image
                />
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                <div className="h-32 rounded-lg bg-gray-200"></div>
                <div className="rounded-lg bg-gray-200"><DirectionAwareHoverDemo /></div>
            </div>
        </div>
    );
};

export default Page;