import Banner from '../components/banner';
import Styled from 'styled-components';
import Collapse from '../components/collapse';
import bannerImg from '../assets/imageabout.png';

const AboutContainer = Styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px 20px;

  @media (min-width: 768px) {
    margin: 40px 70px;
  }
`

function about() {
  const collapses = [
    { title: 'Fiabilité', content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.' },
    { title: 'Respect', content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' },
    { title: 'Service', content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' },
    { title: 'Sécurité', content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En faisant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." },
  ];
  return (
      <AboutContainer>
          <Banner image={bannerImg} />
          <div>
            {collapses.map((collapse, index) => (
              <Collapse key={index} title={collapse.title} content={collapse.content} />
            ))}
          </div>
      </AboutContainer>
  )
}

export default about