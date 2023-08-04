import { useParams } from 'react-router-dom';
import accommodationInfo from '../../data/logements.json';
import Gallery from '../../components/Gallery'
import StarRating from '../../components/StartRating';
import Tag from '../../components/Tag';

function Accommodation(props) {
  const { accommodationId } = useParams();
  const accommodation = accommodationInfo.find((a) => a.id === accommodationId);
  const { tags } = useParams();
  console.log(tags);

  return (
      <section>
        <Gallery imgSrc={accommodation.cover} title={accommodation.title}/>
        
        <p>{accommodation.title}</p>

        <Tag>
        {accommodation.tags.map((tag) => 
          <p>{tags}</p>
          )}
        </Tag>
        <StarRating />
      </section>
  )
}

export default Accommodation