import { letter } from "../text"
import ScrollFadeIn from "./components/ScrollFadeIn"
import StickyScrollExpandable from "./components/StickyScrollExpandable"
import useScroll from "./hooks/useScroll.hooks"
import { MoveImage, Page } from "./WithLion.styled"

import princeImg from "../images/prince.png"
import foxImg from "../images/fox.png"
import withyouImg from "../images/withyou.png"
import lightboaImg from "../images/lightboa.png"
import darkboaImg from "../images/darkboa.png"
import b612Img from "../images/b612.png"
import {
  calcMoveBoa,
  calcMoveWith,
  calcSizeBoa,
  caleMoveBetween,
} from "./helper/calcCss.helper"
import { useEffect } from "react"

export const WITH_IMAGE = 17000
export const CHANGE_COLOR = 19000
export const BOA_START = 28000
export const BOA_END = 29400
export const BOA_HAT = 29544
export const CLOSEING = 34900

const WithLion = () => {
  const { scrollY } = useScroll()

  console.log(scrollY)
  useEffect(() => {
    if (scrollY > 3000) document.title = "With Lion"
  }, [scrollY])

  return (
    <>
      <Page scroll={scrollY}>
        <StickyScrollExpandable message={letter.stickyFirst} />
        {letter.textArrayFirst.map((text, index) => (
          <ScrollFadeIn key={`first-${index}`} message={text} />
        ))}
        <ScrollFadeIn
          message={letter.textBoldFirst}
          margin={500}
          weight={700}
          fontName="NanumSquareNeo"
        />
        {letter.textArraySecond.map((text, index) => (
          <ScrollFadeIn key={`second-${index}`} message={text} />
        ))}
        <StickyScrollExpandable message={letter.stickySecond} size={2} />
        {letter.textArrayThird.map((text, index) => (
          <ScrollFadeIn key={`third-${index}`} message={text} />
        ))}
        <ScrollFadeIn
          message={letter.textBoldSecond}
          margin={500}
          weight={700}
          fontName="NanumSquareNeo"
        />
        {letter.textArrayFourth.map((text, index) => (
          <ScrollFadeIn key={`fourth-${index}`} message={text} />
        ))}
        <StickyScrollExpandable message={" "} />
        {letter.textArrayFifth.map((text, index) => (
          <ScrollFadeIn key={`fifth-${index}`} message={text} />
        ))}
        {letter.textArraySixth.map((text, index) => (
          <ScrollFadeIn key={`sixth-${index}`} margin={200} message={text} />
        ))}
        <StickyScrollExpandable message={letter.stickyThird} size={3} />
        <StickyScrollExpandable _height={2000} message={letter.stickyForth} />
      </Page>
      {scrollY < WITH_IMAGE && (
        <>
          <MoveImage
            src={princeImg}
            alt=""
            style={{ left: `${caleMoveBetween(scrollY, WITH_IMAGE)}vw` }}
          />
          <MoveImage
            src={foxImg}
            alt=""
            style={{ right: `${caleMoveBetween(scrollY, WITH_IMAGE)}vw` }}
          />
        </>
      )}
      {scrollY > WITH_IMAGE && (
        <>
          <MoveImage
            src={withyouImg}
            alt=""
            style={{
              width: "80px",
              left: `${calcMoveWith(scrollY, WITH_IMAGE, CHANGE_COLOR)}vw`,
            }}
          />
          <MoveImage
            src={b612Img}
            alt=""
            style={{
              width: "100px",
              top: 0,
              right: "1vw",
              opacity: scrollY > CHANGE_COLOR && scrollY < BOA_START ? 0.6 : 0,
              transition: "opacity 1s linear",
            }}
          />
        </>
      )}
      {scrollY > BOA_START && (
        <>
          <MoveImage
            src={lightboaImg}
            alt=""
            style={{
              top: `${calcMoveBoa(scrollY, BOA_END, BOA_HAT)}vh`,
              left: "50vw",
              transform: "translate(-50%, -50%)",
              width: `${calcSizeBoa(scrollY, BOA_START, BOA_END)}vw`,
              opacity: scrollY > BOA_HAT ? 0 : 1,
              transition: "opacity 0.5s linear",
            }}
          />
          <MoveImage
            src={darkboaImg}
            alt=""
            style={{
              top: `10vh`,
              left: "50vw",
              transform: "translate(-50%, -50%)",
              width: `80vw`,
              opacity: scrollY > BOA_HAT && scrollY < CLOSEING ? 0.3 : 0,
              transition: "opacity 0.5s linear",
            }}
          />
        </>
      )}
    </>
  )
}

export default WithLion
