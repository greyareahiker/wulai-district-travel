import { useEffect } from "react"
import { LinkButton, MainContainer } from "./Main.styled"

const Main = () => {
  useEffect(() => {
    document.title = "온천에 오신걸 환영합니다."
  })

  return (
    <MainContainer>
      온천 페이지
      <LinkButton to="/with-lion">더 알아보기</LinkButton>
    </MainContainer>
  )
}

export default Main
