import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about_container">
      <span>
        <span class="tit">안녕하세요! 저의 영화 추천 어플리케이션에 찾아주셔서 감사합니다 :D</span><br></br>
        <span>
          리액트를 이용한 첫 번째 프로젝트 영화 추천 어플리케이션입니다. 처음 접해보는 분야라 어렵고 힘들었지만 차근차근 단계를 올라가며 코드와 더 가까워 질 수 있는 기회이기도 했습니다. 다음엔 더 멋진 어플리케이션으로 만나고 싶네요!
          다음 만남을 기약하며 See you again!
        </span>
      </span>
      <span>2022.05.02 monday</span>
    </div>
  );
}

export default About;
