import Image from 'next/image'
import React from 'react'
import { capitalizeFirstLetter } from "../utils/middleware"

export const CardComponent = ({ name, img, type }) => {

    return (
        <div className="w-64 h-64 m-6 shadow-xl flex flex-col justify-center items-center bg-white rounded-lg">
            <Image
                src={img}
                width={150}
                height={150}
                priority={false}
                alt={`${name} - image`}
            />
            <div className="border-t-2 border-asafe w-full text-center bg-asafe h-full">
                <h2 className="text-white text-xl font-semibold mt-2">{capitalizeFirstLetter(name)}</h2>
                <div className="flex items-center justify-center"  >
                    {type.length > 0 && type.map((typ, key) => {
                        return (
                            <p className="font-normal text-white mx-2 mt-2" key={key} >{capitalizeFirstLetter(typ.type.name)}</p>

                        )
                    })}
                </div>
            </div>
        </div>
    )
}
