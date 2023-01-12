import styled, { css } from "styled-components"
import background from "../images/background.png"
import { CHANGE_COLOR } from "./WithLion"

export const Page = styled.main<{ scroll: number }>`
  display: flex;
  flex-flow: column;

  padding: 2rem;

  width: 100vw;
  height: 100%;
  transition: all 1s ease-in-out;

  ${({ scroll }) => {
    if (scroll < CHANGE_COLOR) {
      return css`
        background: top / contain url(${background});
      `
    }
    return css`
      background: rgba(40, 62, 81, 0.9);
      color: #f7f1e3;
    `
  }}
`

export const MoveImage = styled.img`
  position: fixed;
  top: 90vh;
  width: 50px;
  object-fit: contain;
`
