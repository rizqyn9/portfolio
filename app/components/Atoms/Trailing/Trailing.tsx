import { TrailingChildStyled, TrailingContainerStyled } from "./Trailing.styles"

function Trailing() {
  return (
    <div
      style={{
        // height: "100%",
        paddingTop: "3rem",
        overflow: "hidden",
      }}
    >
      <TrailingContainerStyled>
        {Array(6)
          .fill("Rizqy Prastya Ari Nugroho")
          .map((val, i) => (
            <TrailingChildStyled key={i}>{val}</TrailingChildStyled>
          ))}
      </TrailingContainerStyled>
    </div>
  )
}

export { Trailing }
