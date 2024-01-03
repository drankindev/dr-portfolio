import Button from '../components/Button';
import Slider from '../components/Slider';
import { useSelector } from 'react-redux';
import parse from 'html-react-parser';
import { useState, useEffect } from 'react';


const PageID = 'about';

const HomePage = () => {
    const page = useSelector(state => state.page);
    const currentPage = page.allPages.find(page => page.name === PageID);
    const [imgData, setImgData] = useState([]);

    useEffect(() => {
        if(currentPage && currentPage.media.length > 0) {
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
    }, [currentPage]);
    
    return (
        <>
            {currentPage &&
            <div id="intro" className="section-wrapper md:flex md:gap-8">
                <div className="leftCol hidden md:block md:flex-auto w-1/3 self-start sticky mr-1/12 z-1 top-40">                    
                    {imgData.length > 0 &&
                    <Slider imgData={imgData} h="full" imgClass="relative self-center block p-4 bg-orange drop-shadow-2xl"/>                      
                    }
                </div>
                <div className="rightCol w-full md:flex-auto md:w-2/3 ">
                    <div className="text-box">
                        <div className="p-4 md:px-6 ">
                            <h3>{parse(currentPage.subtitle)}</h3>
                            {imgData.length &&
                            <Slider h="full" imgData={imgData} imgClass=" relative md:hidden w-1/2 float-right ml-4 mt-2 mb-4 p-4 bg-orange"/>
                            }
                            {parse(currentPage.body)}
                            <Button btnUrl={currentPage.download} btnColor="bg-orange" btnText="Download Resume"/>
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