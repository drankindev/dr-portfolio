import { useSelector } from 'react-redux'

const Footer = () => {
    const page = useSelector(state => state.page);
    return (
        <>           
            <footer className="bg-mid-lines pb-2 md:pb-0 md:fixed block bottom-0 w-full z-10 drop-shadow-3xl-up shadow-xl-inner">
                <div className={`w-full h-2 transition-colors duration-1000 ${page.currentPage.color}`}></div>
                <div className="max-w-6xl mx-auto">
                    <div className="px-4 py-2">
                        <p className="md:float-left md:mr-1">Designed and developed by David Rankin.</p>   
                        <p className="md:float-left">Built with AWS, React, and Tailwind.</p>   
                        <p className="md:float-right"><a className="text-dark-gray hover:text-white" href="mailto:DRankinDev@gmail.com">DRankinDev@gmail.com</a></p>
                        <div className="clear-both"></div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;