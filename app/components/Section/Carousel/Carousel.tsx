import { CarouselContainerStyled, ImageStyled } from "./Carousel.styles"

function Carousel() {
  return (
    <CarouselContainerStyled>
      <ImageStyled src="/img/pic1.jpg" css={{ right: "10vw", top: "10vh" }} />
      <ImageStyled src="/img/pic1.jpg" css={{ right: "80vw", top: "80vh" }} />
      <ImageStyled src="/img/pic1.jpg" css={{ right: "20vw", top: "40vh", width: "40vw" }} />
      <ImageStyled src="/img/pic2.jpg" css={{ left: "5vw", top: "40vh", width: "20vw" }} />
      <ImageStyled src="/img/pic2.jpg" css={{ left: "20vw", top: "10vh", width: "20vw" }} />
    </CarouselContainerStyled>
  )
}

export { Carousel }
