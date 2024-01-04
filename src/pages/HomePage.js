import Button from '../components/Button';
import Slider from '../components/Slider';
import parse from 'html-react-parser';
import { useState, useEffect } from 'react';
import { fetchPageByName, validateFile } from '../components/utils';

const HomePage = () => {
    const [imgData, setImgData] = useState([]);
    const [currentPage, setCurrentPage] = useState({});
    const [download, setDownload] = useState('');

    useEffect(() => {
        fetchPageByName({pageID: 'about', onSuccess: setCurrentPage});
    }, []);

    useEffect(() => {
        // format slideshow
        if(currentPage.media && currentPage.media.length > 0) {
            let tmp = [];
            currentPage.media.map(img => {
                tmp.push({
                    url: img,
                    title: 'David Rankin'
                })
                return true;
            })
            setImgData(tmp);
        }
        // set download url
        if(currentPage.download){
            if(currentPage.download.substr(0,4) === 'http') {
                setDownload(currentPage.download);
            }else{
                validateFile({filename: currentPage.download, onSuccess: setDownload})
            }
        }
    }, [currentPage]);
    
    return (
        <>
            {currentPage &&
            <div id="intro" className="section-wrapper md:flex md:gap-8">
                <div className="leftCol hidden md:block md:flex-auto w-1/3 self-start sticky mr-1/12 z-1 top-40">                    
                    <Slider imgData={imgData} h="full" imgClass="relative self-center block p-4 bg-orange drop-shadow-2xl"/>                      
                </div>
                <div className="rightCol w-full md:flex-auto md:w-2/3 ">
                    <div className="text-box">
                        <div className="p-4 md:px-6 ">
                            {currentPage.subtitle && <h3>{parse(currentPage.subtitle)}</h3>}
                            <Slider h="full" imgData={imgData} imgClass=" relative md:hidden w-1/2 float-right ml-4 mt-2 mb-4 p-4 bg-orange"/>
                            {currentPage.body && parse(currentPage.body)}
                            {download && <Button btnUrl={download} btnColor="bg-orange" btnText="Download Resume"/>}
                        </div>
                    </div>
                </div>
                <div className="clear-both"></div>
            </div>
            }
        </>
    )
}

export default HomePage;