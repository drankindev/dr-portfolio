import TagData from '../data/TagData';

const TagList = ({ title, items }) => (
    <div key={title} className="mb-3">
        <h5 key={title}>{title}</h5>
        { items.length > 0 ? (
            <p>
                { items.map((item) => {
                    const tagObj = TagData.find(tag => tag.name === item);
                    const tagTitle = (tagObj) ? tagObj.title : item;
                    return (<span className="inline-block text-sm w-auto nowrap mr-3 font-normal" key={tagTitle}>{tagTitle}</span>)
                })}
            </p>
        ):''}
    </div>
);


export default TagList;