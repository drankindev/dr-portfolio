import { Link  } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SubNav = (nav) => {
    const portfolio = useSelector(state => state.portfolio);

    return (
        <>
            {portfolio.categories.map((obj) => (
                <Link key={`subnav-${obj.name}`} className={`leading-4 inline-block text-xs  uppercase text-center font-black px-1 hover:text-dark-gray ${(nav.active === obj.name) ? 'text-dark-gray': 'text-mid-gray'}`} to={`/portfolio/${obj.name}`}>{ obj.title }</Link>             
            ))}
        </>
    )
}

export default SubNav;