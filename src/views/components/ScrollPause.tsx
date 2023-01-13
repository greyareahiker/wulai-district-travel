import { useRef } from "react"
import { calcOpacity, calcScale } from "../helper/calcCss.helper"
import { Container, Stickey } from "./ScrollPause.styled"

const ScrollPause = ({
  _height = 2000,
  fontSize = 1.5,
  textAlign = "start",
  fontFamily = "Pretendard Variable",
  fontWeight = 400,
  message,
}: {
  _height?: number
  fontSize?: number
  textAlign?:
    | "start"
    | "end"
    | "left"
    | "right"
    | "center"
    | "justify"
    | "initial"
    | "inherit"
  fontFamily?: string
  fontWeight?: number
  message: string
}) => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <Container ref={ref} _height={_height}>
      <Stickey
        style={{
          opacity: calcOpacity(_height, ref),
          transform: `translateY(-50%) scale(${calcScale(_height, ref)})`,
          fontSize: `${fontSize}rem`,
          textAlign,
          fontFamily,
          fontWeight,
        }}
      >
        {message}
      </Stickey>
    </Container>
  )
}

export default ScrollPause
