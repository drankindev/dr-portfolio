import { useParams } from 'react-router-dom';
import portfolioData from '../data/PortfolioData';
import NotFoundPage from './NotFoundPage';

const PortfolioPage = () => {
    const { id } = useParams();
    const obj = portfolioData.find(obj => obj.id === id);

    if (!obj) { return <NotFoundPage /> }

    return (
        <>
            <h1>{ obj.title }</h1>
            <p>{ obj.body }</p>
        </>
    )
}

export default PortfolioPage;