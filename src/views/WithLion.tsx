import { letter } from "../text"
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
import ScrollPause from "./components/ScrollPause"

export const WITH_IMAGE = 45400
export const CHANGE_COLOR = 50000
export const BOA_START = 73000
export const BOA_END = 74500
export const BOA_HAT = 76000
export const CHNAGE_DARK = 80000
export const CLOSEING = 85000

const WithLion = () => {
  const { scrollY } = useScroll()

  useEffect(() => {
    if (scrollY > 1000) {
      document.title = "With Lion"
      const link = document.querySelector(
        "link[rel*='icon']"
      ) as HTMLLinkElement
      link!.href = "/project-a-new-hope/favicon.ico"
    }
  }, [scrollY])

  return (
    <>
      <Page>
        <StickyScrollExpandable message={letter.stickyFirst} />
        {letter.textArrayFirst.map((text, index) => (
          <ScrollPause key={`first-${index}`} message={text} />
        ))}
        <StickyScrollExpandable
          message={letter.textBoldFirst}
          _height={4000}
          size={3.2}
        />
        <ScrollPause message=" " _height={1000} />
        {letter.textArraySecond.map((text, index) => (
          <ScrollPause key={`second-${index}`} message={text} />
        ))}
        <StickyScrollExpandable
          message={letter.stickySecond}
          size={3.2}
          _height={4000}
        />
        <ScrollPause message=" " _height={1000} />
        {letter.textArrayThird.map((text, index) => (
          <ScrollPause key={`third-${index}`} message={text} />
        ))}
        <StickyScrollExpandable
          message={letter.textBoldSecond}
          size={3.2}
          _height={4000}
        />
        <ScrollPause message=" " _height={1000} />
        {letter.textArrayFourth.map((text, index) => (
          <ScrollPause key={`fourth-${index}`} message={text} />
        ))}
        <ScrollPause message={" "} />
        {letter.textArrayFifth.map((text, index) => (
          <ScrollPause key={`fifth-${index}`} message={text} />
        ))}
        <ScrollPause message={" "} />
        <div
          style={{
            margin: "2rem 6rem",
            height: "100vh",
            fontSize: "2rem",
            fontWeight: "700",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          베로니카, 나랑 결혼해줄래요?
        </div>
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
              width: "250px",
              left: `${calcMoveWith(scrollY, WITH_IMAGE, CHANGE_COLOR)}vw`,
            }}
          />
          <MoveImage
            src={b612Img}
            alt=""
            style={{
              width: "200px",
              top: 0,
              right: "3vw",
              opacity: scrollY > CHANGE_COLOR && scrollY < BOA_START ? 1 : 0,
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
              opacity: scrollY > CHNAGE_DARK ? 0 : 1,
              transition: "opacity 0.5s linear",
            }}
          />
          <MoveImage
            src={darkboaImg}
            alt=""
            style={{
              top: `25vh`,
              left: "50vw",
              transform: "translate(-50%, -50%)",
              width: `60vw`,
              opacity: scrollY > CHNAGE_DARK && scrollY < CLOSEING ? 0.3 : 0,
              transition: "opacity 0.5s linear",
            }}
          />
        </>
      )}
    </>
  )
}

export default WithLion
