import { useRef } from "react"
import { calcOpacity, calcScale } from "../helper/calcCss.helper"
import { Container, Stickey } from "./StickyScrollExpandable.styled"

const StickyScrollExpandable = ({
  _height = 5000,
  size = 6,
  message,
}: {
  _height?: number
  size?: number
  message: string
}) => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <Container ref={ref} _height={_height}>
      <Stickey
        style={{
          opacity: calcOpacity(_height, ref),
          transform: `translateY(-50%) scale(${calcScale(_height, ref)})`,
          fontSize: `${size}rem`,
        }}
      >
        {message}
      </Stickey>
    </Container>
  )
}

export default StickyScrollExpandable
