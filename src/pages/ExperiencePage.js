import PageData from '../data/PageData';
import ExperienceData from '../data/ExperienceData';
import TagList from '../components/TagList';

const PageID = 'skills';
const currentPage = PageData.find(page => page.name === PageID);

const ExperiencePage = () => {
    return (
        <div id="Expertise" className="max-w-5xl text-center mx-auto">      
            <h3 className="text-white">{ currentPage.title }</h3>
            <div id="skills" className="md:grid md:grid-cols-3 gap-8 text-left sticky">
                {ExperienceData.map(cat => (
                    <div key={cat.title} className="max-w-lg mx-auto text-box">
                        <div className="h-full !p-0">
                            <h4>{cat.title }</h4>
                            <div className="px-4 py-1">
                            {cat.list.length > 0 ? cat.list.map((item) => {
                                return <TagList key={`tag-${item.title}`} title={item.title} items={item.items}/>
                            }):''}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExperiencePage;