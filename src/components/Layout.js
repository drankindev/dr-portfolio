import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

const Layout = () => {
    return (
        <> 
            <Header/>
            <div id="page-body">          
                <Outlet/> 
            </div>
            <Footer/>
        </>
    )
}

export default Layout;