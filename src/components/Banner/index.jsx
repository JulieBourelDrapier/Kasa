import imageBanner from '../../assets/imagebanner.png'

function Banner() {
  return (
      <div id="banner">
          <img src={imageBanner} alt="Paysage de fond"/>
          <p>Chez vous, partout et ailleurs.</p>
      </div>
  );
}

export default Banner;
