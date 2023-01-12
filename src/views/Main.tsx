import { useEffect } from "react"
import {
  DescriptionContents,
  DescriptionTitle,
  DescriptonConatiner,
  FooterContainer,
  FooterLeft,
  FooterRight,
  FooterText,
  FooterTitle,
  HeaderImg,
  HeaderText,
  ImageConatiner,
  LinkButton,
  MainContainer,
} from "./Main.styled"

const Main = () => {
  useEffect(() => {
    document.title = "온천에 오신걸 환영합니다."
  })

  return (
    <MainContainer>
      <ImageConatiner>
        <HeaderImg
          src="https://newtaipei.travel/content/images/attractions/350/1920x1080_20130829120658.jpg"
          alt=""
        />
        <HeaderText>우라이 온천</HeaderText>
      </ImageConatiner>
      <DescriptonConatiner>
        <DescriptionTitle>소개</DescriptionTitle>
        <DescriptionContents>
          대부분의 여행객들은 「산지 온천」이라면 우라이를 먼저 생각합니다.
          타이완 원주민 타이야족의 말에서 「Wulai」는 바로 뜨끈뜨끈한 온천물을
          의미하기 때문에, 우라이 온천은 바로 타이야족 생활 속의 중요한
          일부분입니다. 현재 우라이에는 온천 호텔 및 고급 호텔이 많이 들어서
          일년 내내 온천을 즐기려는 여행객들의 발걸음이 끊이지 않습니다. 우라이
          폭포의 장관을 모두 감상한 후에 우라이 옛거리로 돌아와 저녁을 먹고,
          온천 호텔에 들어가 온천욕을 즐기며 하루동안 여행의 피로감을 풀고
          상쾌하게 집으로 돌아갈 수 있습니다.
          <br />
          <br />
          <br />
          <br />
          「우라이 온천」은 탄산수소나트륨 수질로서 각질 제거와 신진대사 촉진의
          효능이 있어 피부를 매끄럽게 할 뿐만 아니라, 미백 효과까지 있어
          「미인탕」이라는 명성을 얻었습니다.
        </DescriptionContents>
      </DescriptonConatiner>
      <LinkButton to="/with-lion">더 알아보기</LinkButton>
      <FooterContainer>
        <FooterLeft>
          <FooterTitle>신베이시 정부 관광여행국</FooterTitle>
          <br />
          <FooterText>Copyright © New Taipei City Government.</FooterText>
          <FooterText>All Rights Reserved.</FooterText>
        </FooterLeft>
        <FooterRight>
          <FooterText>주소: 220242신베이시 판교구 중산로1단161호</FooterText>
          <FooterText>전화: +886-2-2960-3456</FooterText>
          <FooterText>업데이트 날짜: 2023-01-12</FooterText>
        </FooterRight>
      </FooterContainer>
    </MainContainer>
  )
}

export default Main
