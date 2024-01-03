import PortfolioList from '../components/PortfolioList';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPortfolio } from '../features/portfolioSlice'

const PortfolioListPage = () => {
    const dispatch = useDispatch();
    const portfolio = useSelector(state => state.portfolio);
    const [portfolioData, setPortfolioData] = useState([]);
    const [title, setTitle] = useState('Portfolio');
    const { category } = useParams();

    useEffect(() => {
        if (portfolio.status === 'idle') {
          dispatch(fetchPortfolio())
        }
    }, [portfolio.status, dispatch])

    useEffect(() => {
        if(portfolio.data && portfolio.data.length > 0){
            let newPortfolioData = portfolio.data;
            if (category && category !== 'all') {
                const cat = portfolio.categories.find(cat => cat.name === category)
                setTitle(cat.title);
                newPortfolioData = portfolio.data.filter(p => cat.name.includes(p.category.toLowerCase()));
            }else{
                setTitle('Portfolio');
            }
            newPortfolioData = newPortfolioData.sort((a, b) => a.weight - b.weight)
            setPortfolioData(newPortfolioData);
        }
    }, [category,portfolio]);

    return (
        <>
            <div id="Portfolio" className="max-w-4xl text-center mx-auto">
                <h3 className="text-white">{title}</h3>
                <div className="grid grid-cols-2 gap-8">
                { portfolioData ? <PortfolioList data={portfolioData}/> :'' }
                </div>
            </div>
        </>
    )
}

export default PortfolioListPage; 