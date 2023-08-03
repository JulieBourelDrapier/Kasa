import { useParams } from 'react-router-dom';
import accommodationInfo from '../../data/logements.json';
import Gallery from '../../components/Gallery'

function Accommodation(props) {
  const { accommodationId } = useParams();
  const accommodation = accommodationInfo.find((a) => a.id === accommodationId);
  console.log(accommodationInfo)

  return (
      <section>
        <p>accommodation</p>
        {console.log(accommodation)}
        <Gallery imgSrc={accommodation.cover} title={accommodation.title}/>
        <p>{accommodation.title}</p>
        {accommodation.tags.map((t) => 
          <p>{t}</p>
          )}
      </section>
  )
}

export default Accommodation