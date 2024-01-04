import NavBar from '../components/NavBar';
import SubNav from '../components/SubNav';
import { Link, useLocation  } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { setCurrentPage } from '../features/pageSlice'
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {  
    const location = useLocation();
    const dispatch = useDispatch();
    const page = useSelector(state => state.page);
    const [subActive, setSubActive] = useState('all');

    useEffect(() => {
        const tmp = location.pathname.split('/');
        const newPage = (tmp[1] === '') ? 'about' : tmp[1];

        if (tmp[2] !== '') {
            setSubActive(tmp[2]);
        }
        dispatch(setCurrentPage(newPage));
    }, [page.status,location.pathname,dispatch]);

    return (
        <header className="w-full z-50 md:fixed drop-shadow-3xl bg-mid-lines">
            <div id="headerTop" className="w-full  z-10 relative">
                <div className="max-w-6xl mx-auto relative">
                    <div className="w-full md:w-96 md:float-left text-center pt-1">
                        <h1 className="text-4xl md:text-5xl font-black uppercase white-space-nowrap md:leading-[3rem]"><Link to="/" className="text-white hover:text-white">David Rankin</Link></h1>
                    </div>
                    <nav id="site-navigation" className="main-navigation hidden md:block absolute bottom-[-.5em] right-8">
                        <NavBar/>
                    </nav>
                    <div className="clear-both"></div>
                </div>
            </div>
            <div id="headerBottom" className="w-full bg-white drop-shadow-xl-up">
                <div className="max-w-6xl mx-auto">    
                    <div className="w-full md:w-96 float-left text-center">  
                        <h2 className="text-sm md:text-xl text-mid-gray uppercase m-0 w-full text-center font-black">Design & Development</h2>
                    </div>
                    <div className={`sub-navigation float-right mr-4 hidden ${(page.currentPage.name === 'portfolio') ? 'md:block' : ''}`}>
                        <SubNav active={subActive}/>
                    </div>
                </div>
                <div className="clear-both"></div>
            </div>
            <div className={`w-full md:h-2 md:p-0 clear-both transition-colors duration-1000 ${page.currentPage.color}`}>
                <nav className="main-navigation md:hidden bottom-0 right-8 w-full text-center">
                    <NavBar/>
                </nav>
                <div className="clear-both"></div>
            </div>
            <div className={`w-full bg-white text-center ${(page.currentPage.name === 'portfolio') ? 'block' : 'hidden'} md:hidden`}>
                <div className="sub-navigation leading-3">
                    <SubNav active={subActive}/>
                </div>   
            </div>

        </header>
    )
}

export default Header;