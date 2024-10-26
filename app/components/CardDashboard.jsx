import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const CardDashboard = ({ href, title, img, loader }) => {

    const imageLoader = ({ src }) => {
        return `https://www.todofondos.net/wp-content/uploads/${src}`
    }


    return (
        <Link href={href}>
            <div className="flex justify-center items-center min-w-80 max-w-96 h-48 rounded-lg shadow-xl bg-white mx-5">
                <span className='h-full w-3/5 flex justify-center items-center'>
                    <Image
                        loader={loader && imageLoader}
                        src={img}
                        width={600}
                        height={600}
                        alt={`${title} - image`}
                        priority={false}
                    />
                </span>
                <span className="h-full w-2/5 p-8 flex justify-center items-center">
                    <h2 className="text-xl font-extrabold text-left text-asafe ">{title}</h2>
                </span>
            </div>
        </Link>
    )
}


