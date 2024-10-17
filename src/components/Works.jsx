import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import "../App.css";
import Development from "./Development";
import Design from "./Design";
import WebDesign from "./WebDesign";

const data = ["Development", "Web Design", "Socials"];
const textSize = window.innerWidth > 700 ? 80 : 50;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 20px;
  @media only screen and (max-width: 768px) {
    padding: 5px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 60px;

  padding-top: 5px;
  padding-left: 40px;
`;
const moveTextAnimation = keyframes`
  to {
    width: 100%;
  }
`;
const ListItem = styled.li`
  font-size: ${textSize}px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  margin-top: 20px;
  &::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;

    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover::after {
    animation: ${moveTextAnimation} 0.5s linear both;
  }
`;
const Works = () => {
  const [work, setWork] = useState("Web Design");
  return (
    <div
      className='md:h-screen w-full flex justify-center relative text-black text-sm font-light'
      id='Works'
    >
      <div className='md:h-full w-full flex md:flex-row flex-col items-center'>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <div className='flex h-96 md:w-1/2 md:h-screen justify-center items-center'>
          {work === "Development" ? (
            <Development></Development>
          ) : work === "Web Design" ? (
            <WebDesign></WebDesign>
          ) : (
            <Design></Design>
          )}
        </div>
      </div>
    </div>
  );
};

export default Works;
