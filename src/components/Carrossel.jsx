import Carousel from 'react-bootstrap/Carousel';

function Carrossel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="imagem1"
          src="https://images.pexels.com/photos/168866/pexels-photo-168866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide" height={900}
        />
        <Carousel.Caption>
          <h1>Kidz World</h1>
          <p>O melhor brinquedo esta aqui!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imagem2"
          src="https://images.pexels.com/photos/311268/pexels-photo-311268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height={900}
        />

        <Carousel.Caption>
        <h1>Kidz World</h1>
        <p>O melhor brinquedo esta aqui!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imagem3"
          src="https://images.pexels.com/photos/1203997/pexels-photo-1203997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height={900}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h1>Kidz World</h1>
        <p>O melhor brinquedo esta aqui!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrossel;