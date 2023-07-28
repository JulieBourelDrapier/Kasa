import imageBanner from '../../assets/imagebanner.png'

function Banner() {
  return (
      <div id="banner">
          <img src={imageBanner} alt="photographie de paysage de fond à ajouter (path incorrect)"/>
          <p>Chez vous, partout et ailleurs.</p>
      </div>
  );
}

export default Banner;
