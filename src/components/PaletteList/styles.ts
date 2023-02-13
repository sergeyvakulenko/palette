import styled from "styled-components";
import bg from "../../assets/img/spectrum-gradient.svg";
import { device } from "shared/helpers/responsive";

export const Root = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow: scroll;
  /* background by SVGBackgrounds.com */
  background: url(${bg}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  margin-bottom: 20px;
`;

export const Container = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: wrap;

  @media ${device.desktop} {
    width: 75%;
  }
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  color: white;

  & h1 {
    font-size: 2.5rem;
  }

  & a {
    font-size: 1.2rem;
    line-height: 2.5rem;
    color: white;
  }
`;

export const Content = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-gap: 3rem;
  margin-bottom: 3rem;

  @media ${device.laptop} {
    grid-template-columns: repeat(2, 45%);
    grid-gap: 3.44rem;
  }

  @media ${device.mobile} {
    grid-template-columns: repeat(1, 100%);
    grid-gap: 2rem;
  }
`;
