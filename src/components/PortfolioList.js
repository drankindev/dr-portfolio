import Slider from '../components/Slider';
import parse from 'html-react-parser';
import { HiArrowCircleRight } from "react-icons/hi";

const PortfolioList = ({ data }) => {
    return (
        <>
            {data.map((proj,i) => (
                <article key={proj.name} className="text-box">
                    <div>
                        { proj.media.items.length > 0 && 
                            <Slider folder="media" imgData={[...proj.media.items]}/>    
                        }
                        <div className="px-4 py-3">
                            <h4>
                                {proj.url ? <a href={proj.url} title={proj.title}>
                                    {proj.title} <HiArrowCircleRight className="inline text-base align-baseline" />
                                </a> : proj.title}
                            </h4>                  
                            { proj.body && <p className="text-sm">{parse(proj.body)}</p>}
                        </div>
                    </div>
                </article>
            ))}
        </>
    )
}

export default PortfolioList;