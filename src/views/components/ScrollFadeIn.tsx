import { useRef } from "react"
import styled from "styled-components"
import { calcOpacity } from "../helper/calcCss.helper"

export const Text = styled.p`
  width: 100%;
  text-align: left;

  word-break: keep-all;
  white-space: pre-line;
`

const ScrollFadeIn = ({
  message,
  margin = 150,
  size,
  weight,
  fontName,
}: {
  message: string
  margin?: number
  size?: number
  weight?: number
  fontName?: string
}) => {
  const ref = useRef(null)
  const height = window.innerHeight

  const styleObj = {
    opacity: calcOpacity(height, ref),
    marginTop: `${margin}px`,
    marginBottom: `${margin}px`,
    ...(size && { fontSize: `${size}rem` }),
    ...(weight && { fontWeight: weight }),
    ...(fontName && { fontFamily: fontName }),
  }

  return (
    <Text ref={ref} style={styleObj}>
      {message}
    </Text>
  )
}

export default ScrollFadeIn
