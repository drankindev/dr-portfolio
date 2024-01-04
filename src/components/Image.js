import { LazyLoadImage } from "react-lazy-load-image-component";
import { validateFile } from '../components/utils';
import { useState, useEffect } from 'react';

const Image = ({ src, alt }) => {
    const [url, setUrl] = useState('');

    useEffect(() => {
        validateFile({filename: src, onSuccess: setUrl})
    }, [src])

    return ( 
        <>
            {url && <LazyLoadImage className="block w-full h-auto" src={url} alt={alt}/>}
        </>  
    )
}

export default Image;