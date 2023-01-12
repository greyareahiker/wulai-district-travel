import styled from "styled-components"

export const Container = styled.div<{ _height: number }>`
  font-size: 1rem;
  height: ${({ _height }) => _height}px;
  margin: 2rem 0;
`

export const Stickey = styled.p`
  position: sticky;
  top: 37vh;

  text-align: center;
  font-family: "NanumSquareNeo";
  font-size: 4rem;
`
