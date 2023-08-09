import { useParams } from 'react-router-dom';
import accommodationInfo from '../../data/logements.json';
import Gallery from '../../components/gallery'
import StarRating from '../../components/starRating';
import Tag from '../../components/tag';
import Collapse from '../../components/collapse';

function Accommodation() {
  const { accommodationId } = useParams();
  const accommodation = accommodationInfo.find((a) => a.id === accommodationId);

  return (
      <section>
        <Gallery imgSrc={accommodation.pictures} title={accommodation.title}/>
        
        <h1>{accommodation.title}</h1>
        <h3>{accommodation.location}</h3>

        <p>{accommodation.host.name}</p>
        <img src={accommodation.host.picture} alt="avatar-host" />

        <Collapse title="description" content={accommodation.description} />
        <Collapse title="équipement" content={accommodation.equipments.join('\n')} />

        {accommodation.tags.map((tag, index) => 
          <Tag name={tag} key={`tag-${index}`}></Tag>
          )}
        <StarRating rating={accommodation.rating} />
      </section>
  )
}

export default Accommodation