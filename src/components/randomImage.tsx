import React, {useEffect, useState} from "react"
import {getPopularImages} from "../api/getImage"
interface IItem {
    href: string,
}
interface Response {
    collection: {items: IItem[]}
}


const RandomImage = () => {
    const [images, setImages] = useState<Array<string>>([''])
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
        <div>{images.map((image) => (
            <img src={image} alt="popular" key={image}/>
        ))}</div>
    )
}
export default RandomImage