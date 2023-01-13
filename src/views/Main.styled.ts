import { Link } from "react-router-dom"
import styled from "styled-components"

export const MainContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 28px;

  font-family: "noto serif tc", pingfang tc, helvetica neue, Helvetica, segoe ui,
    Roboto, Oxygen-Sans, Ubuntu, Cantarell, microsoft jhenghei, sans-serif;

  p {
    margin: 0;
  }
`

export const ImageConatiner = styled.div`
  position: relative;
  height: 504px;
  overflow: hidden;
`

export const HeaderImg = styled.img`
  height: 504px;
  width: 100vw;
  object-fit: cover;
`

export const HeaderText = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100vw;
  padding: 32px 64px;
  color: white;

  font-size: 26px;
  font-weight: 600;
  background-color: rgba(0, 0, 0, 0.3);
`

export const DescriptonConatiner = styled.div`
  padding: 2rem 4rem;
  display: flex;

  flex-direction: column;
  gap: 1rem;
`

export const DescriptionTitle = styled.h3`
  font-size: 1.5rem;
  line-height: 1.44;
`

export const DescriptionContents = styled.p`
  font-size: 1.0625rem;
  line-height: 200%;
`

export const LinkButton = styled(Link)`
  &:link,
  &:visited {
    background-color: white;
    color: black;
    border: 2px solid #00c9ff;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
  }
  &:hover,
  &:active {
    background-color: #00c9ff;
    color: white;
  }
`

export const FooterContainer = styled.div`
  display: flex;
  background-color: #ededed;
  width: 100vw;

  padding: 48px;
`

export const FooterLeft = styled.div`
  width: 60vw;
  padding-top: 50px;
  background: url(https://newtaipei.travel/Content/images/global/footer-logo.png)
    top left/147px no-repeat;

  display: flex;
  flex-direction: column;
`

export const FooterRight = styled.div`
  width: 40vw;

  display: flex;
  flex-direction: column;
`
export const FooterTitle = styled.p`
  font-size: 0.9375rem;
  line-height: 24px;
`
export const FooterText = styled.p`
  font-size: 0.9375rem;
  line-height: 24px;
`
