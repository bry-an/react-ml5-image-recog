import React, {useEffect, useState, createRef, useRef} from "react"
import {getPopularImages} from "../api/getImage"
import ImageRecognition from "./ImageRecognition"
interface IItem {
    href: string,
}
interface Response {
    collection: {items: IItem[]}
}


const RandomImage = () => {
    const [images, setImages] = useState<Array<string>>([''])
    const firstImageRef = useRef<HTMLImageElement>(null)
    const getImageId = (url: string) : string => {
        const parts = url.split('/')
        return parts[parts.length - 2]
    }
    useEffect(() => {
    const getImageLinks = (items:IItem[]) : Array<string> => {
        return items.map((item) => `https://images-assets.nasa.gov/image/${getImageId(item.href)}/${getImageId(item.href)}~small.jpg`)
    }
        getPopularImages()
        .then((res) => res.json())
        .then((json) => setImages(getImageLinks(json.collection.items)))
    }, [])
    return (
        <>
        <img src={images[0]} alt="first" ref={firstImageRef}/>
        <ImageRecognition imageRef={firstImageRef.current} />
        <div>{images.map((image) => (
            <img src={image} alt="popular" key={image} className="w-1/2 my-2"/>
        ))}</div>
        </>
    )
}
export default RandomImage