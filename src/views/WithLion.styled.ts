import styled from "styled-components"
import background from "../images/background.png"

export const Page = styled.main`
  display: flex;
  flex-flow: column;

  padding: 4rem;

  width: 100vw;
  height: 100%;
  transition: all 1s ease-in-out;

  background: top / contain url(${background});
`

export const MoveImage = styled.img`
  position: fixed;
  bottom: 2vh;
  width: 150px;
  object-fit: contain;
`
