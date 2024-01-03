import { LazyLoadImage } from "react-lazy-load-image-component";
import { getUrl } from 'aws-amplify/storage';
import { useState, useEffect } from 'react';

const Image = ({ src, alt }) => {
    const [url, setUrl] = useState('');

    useEffect(() => {
        const validateImage = async (filename) => {
            try {
                const res = await getUrl({
                    key: filename,
                    options: {
                        accessLevel: 'public',
                    }
                });
                if (res.url) {
                    //const expiration = dayjs(new Date()).add(10, 'm');
                    //Cache.setItem(filename, res.url.href, { expires: expiration.valueOf() });
                    setUrl(res.url.href);
                }   
            } catch (err) {
                console.log('error',err);
                return ''; 
            } 
        }
        validateImage(src)
    }, [url,src])

    

    return ( 
        <>
            {url && <LazyLoadImage className="block w-full h-auto" src={url} alt={alt}/>}
        </>  
    )
}

export default Image;