import { useState, useEffect } from 'react';
import axios from 'axios';
import data from './data.json'

function Main() {
    const [images, setImages] = useState<any[]>([]);

    useEffect(() => {
        async function getImages() {
            // const response:[] = await axios(`${process.env.REACT_APP_SERVER}/getphotos`);
            // setImages(response);
            await setImages(data) // replace this with axios call
        }
        getImages();
    })
    console.log(images)
    const result = images.map(image => {
        return <img src={image.image_url} alt={image._id}></img>
    })
    return (
        <div>
            <p>
                {result}
            </p>
        </div>
    )
}

export default Main