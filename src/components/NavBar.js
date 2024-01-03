import { Link  } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
    const page = useSelector(state => state.page);
    
    return (
        <>
            <ul className="inline-block">
                {page.allPages.map((obj) => (
                    <li key={`nav-${obj.name}`} className={`float-left ${(page.currentPage.path === obj.path) ? 'active': ''}`}>
                        <Link className="leading-3 inline-block text-base uppercase text-center font-black text-white p-2 hover:text-dark-gray" to={obj.path}>{obj.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default NavBar;