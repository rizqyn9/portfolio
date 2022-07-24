import { CarouselContainerStyled, ImageStyled } from "./Carousel.styles"

function Carousel() {
  return (
    <CarouselContainerStyled>
      <ImageStyled src="/img/pic1.jpg" css={{ right: "10vw", top: "10vh" }} />
      <ImageStyled src="/img/pic1.jpg" css={{ right: "20vw", top: "90vh" }} />
      <ImageStyled src="/img/pic1.jpg" css={{ right: "20vw", top: "40vh", width: "40vw" }} />
      <ImageStyled src="/img/pic1.jpg" css={{ left: "5vw", top: "40vh", width: "20vw" }} />
      <ImageStyled src="/img/pic1.jpg" css={{ left: "20vw", top: "10vh", width: "20vw" }} />
    </CarouselContainerStyled>
  )
}

export { Carousel }
