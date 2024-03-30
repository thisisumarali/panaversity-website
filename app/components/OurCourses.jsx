import Link from 'next/link'
import React from 'react'

const OurCourses = () => {
    return (
        <div>
            <h3 className='text-center font-semibold text-3xl md:text-5xl text-purple-500 py-4'>Our Courses</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 overflow-hidden'>
                <Link href="/" className="block rounded-lg p-4 shadow-sm shadow-indigo-100" >
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        className="h-56 w-full rounded-md object-cover"
                    />
                    <div className="mt-2">
                        <dl>
                            <div>
                                <dd className="font-medium">Metaverse </dd>
                            </div>
                        </dl>

                    </div>
                </Link>

                <Link href="/" className="block rounded-lg p-4 shadow-sm shadow-indigo-100" >
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        className="h-56 w-full rounded-md object-cover"
                    />
                    <div className="mt-2">
                        <dl>
                            <div>
                                <dd className="font-medium">Metaverse </dd>
                            </div>
                        </dl>

                    </div>
                </Link>

                <Link href="/" className="block rounded-lg p-4 shadow-sm shadow-indigo-100" >
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        className="h-56 w-full rounded-md object-cover"
                    />
                    <div className="mt-2">
                        <dl>
                            <div>
                                <dd className="font-medium">Metaverse </dd>
                            </div>
                        </dl>

                    </div>
                </Link>

                <Link href="/" className="block rounded-lg p-4 shadow-sm shadow-indigo-100" >
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        className="h-56 w-full rounded-md object-cover"
                    />
                    <div className="mt-2">
                        <dl>
                            <div>
                                <dd className="font-medium">Metaverse </dd>
                            </div>
                        </dl>

                    </div>
                </Link>

            </div>
        </div>
    )
}

export default OurCourses