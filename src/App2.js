import { useState, useEffect, useRef } from "react";
import { Routes, Route, Navigate, NavLink } from "react-router-dom";
import { FullPage, Slide } from "react-full-page";
import { SectionsContainer, Section } from "react-fullpage";

import AboutMe from "./pages/AboutMe";
import Main from "./pages/Main";
import Project from "./pages/Project";
import Skills from "./pages/Skills";

import Dots from "./Dots";
const DIVIDER_HEIGHT = 5;

// fullPage 작업중
export default function App() {
  const options = {
    anchors: ["sectionOne", "sectionTwo", "sectionThree"],
  };

  // const outerDivRef = useRef();
  // const [scrollIndex, setScrollIndex] = useState(1);
  // useEffect(() => {
  //   const wheelHandler = (e) => {
  //     e.preventDefault();
  //     console.log(e);
  //     const { deltaY } = e;
  //     const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
  //     const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

  //     if (deltaY > 0) {
  //       // 스크롤 내릴 때
  //       if (scrollTop >= 0 && scrollTop < pageHeight) {
  //         //현재 1페이지 down
  //         outerDivRef.current.scrollTo({
  //           top: pageHeight + DIVIDER_HEIGHT,
  //           left: 0,
  //           ctrlKey: true,
  //           behavior: "smooth",
  //         });
  //         setScrollIndex(2);
  //       } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
  //         //현재 2페이지 down
  //         outerDivRef.current.scrollTo({
  //           top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
  //           left: 0,
  //           ctrlKey: true,
  //           behavior: "smooth",
  //         });
  //         setScrollIndex(3);
  //       } else {
  //         // 현재 3페이지 down
  //         outerDivRef.current.scrollTo({
  //           top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
  //           left: 0,
  //           ctrlKey: true,
  //           behavior: "smooth",
  //         });
  //         setScrollIndex(3);
  //       }
  //     } else {
  //       // 스크롤 올릴 때
  //       if (scrollTop >= 0 && scrollTop < pageHeight) {
  //         //현재 1페이지 up
  //         outerDivRef.current.scrollTo({
  //           top: 0,
  //           left: 0,
  //           ctrlKey: true,
  //           behavior: "smooth",
  //         });
  //         setScrollIndex(1);
  //       } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
  //         //현재 2페이지 up
  //         outerDivRef.current.scrollTo({
  //           top: 0,
  //           left: 0,
  //           ctrlKey: true,
  //           behavior: "smooth",
  //         });
  //         setScrollIndex(1);
  //       } else {
  //         // 현재 3페이지 up
  //         outerDivRef.current.scrollTo({
  //           top: pageHeight + DIVIDER_HEIGHT,
  //           left: 0,
  //           ctrlKey: true,
  //           behavior: "smooth",
  //         });
  //         setScrollIndex(2);
  //       }
  //     }
  //   };
  //   const outerDivRefCurrent = outerDivRef.current;
  //   outerDivRefCurrent.addEventListener("wheel", wheelHandler);
  //   return () => {
  //     outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
  //   };
  // }, []);

  const scrollMode = {
    FULL_PAGE: "full-page",
    NORMAL: "normal",
  };

  // document.addEventListener('wheel', this.onScroll, { passive: false });

  const onScroll = (evt) => {
    evt.preventDefault();

    const scrollDown = (evt.wheelDelta || -evt.deltaY || -evt.detail) < 0;
    const activeSlide = 0;

    if (scrollDown) {
      activeSlide++;
    } else {
      activeSlide--;
    }

    document.addEventListener("wheel", onScroll, { passive: false });

    return scrollMode;
  };

  return (
    <>
      <FullPage
        scrollMode={scrollMode.FULL_PAGE}
        controls
        onFocus={onScroll}
        controlsProps={{ className: "slide-navigation" }}
      >
        <Slide className="section-area1">
          <Main />
        </Slide>
        <Slide className="section-area2">
          <Skills />
        </Slide>
        <Slide className="section-area3">
          <Project />
        </Slide>
        <Slide className="section-area4">
          <AboutMe />
        </Slide>
      </FullPage>

      {/* 직접 만든 full-page
      <div ref={outerDivRef} className="outer">
        <Dots scrollIndex={scrollIndex} />
        <div className="inner bg-yellow">1</div>
        <div className="divider"></div>
        <div className="inner bg-blue">2</div>
        <div className="divider"></div>
        <div className="inner bg-pink">3</div>
      </div> */}

      {/* API 가 오래됨. 스크롤 약간 오류있음.
      <SectionsContainer {...options}>
        <Section>Page 1</Section>
        <Section>Page 2</Section>
        <Section>Page 3</Section>
      </SectionsContainer> */}

      {/* <NavLink to="/main">Main</NavLink>
      <NavLink to="/aboutMe">AboutMe</NavLink>
      <NavLink to="/skills">Skills</NavLink>
      <NavLink to="/project">Project</NavLink>
      */}
      {/* 
      <Routes>
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/main" element={<Main />} />
        <Route path="/project" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="*" element={<Navigate to="/main" />} />
      </Routes>
       */}
    </>
  );
}
