import styled from "styled-components"

export const Container = styled.div<{ _height: number }>`
  height: ${({ _height }) => _height}px;
  margin: 2rem 8rem;
`

export const Stickey = styled.p`
  position: sticky;
  top: 50vh;

  word-break: keep-all;
  white-space: pre-line;
`
