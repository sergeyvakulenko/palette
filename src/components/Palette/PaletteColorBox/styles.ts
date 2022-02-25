import styled from "styled-components";
import { CenteredButton } from "../../../shared/elements/CenteredButton";
import { ColorBox, ColorBoxContent } from "../../../shared/elements/ColorBox";
import { device } from "../../../shared/helpers/responsive";

export const Container = styled(ColorBox)`
  cursor: pointer;
  position: relative;
  text-transform: uppercase;

  @media ${device.tablet} {
    font-size: 0.8rem;
  }
`;

export const Content = styled(ColorBoxContent)``;

export const CopyButton = styled(CenteredButton)`
  opacity: 0;

  ${Container}:hover & {
    opacity: 1;
    transition: 0.5s;
  }
`;

export const MoreButton = styled.span`
  background: rgba(255, 255, 255, 0.3);
  position: absolute;
  border: none;
  right: 0px;
  bottom: 0px;
  width: 60px;
  height: 30px;
  text-align: center;
  line-height: 30px;

  @media ${device.mobile} {
    height: 100%;
    line-height: 5vh;
  }
`;

interface CopyProps {
  copy: boolean;
}

export const CopyOverlay = styled.div<CopyProps>`
  opacity: 0;
  background: ${props => props.color};
  z-index: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.6s ease-in-out;
  transform: scale(0.1);

  ${props =>
    props.copy &&
    `
      opacity: 1;
      transform: scale(50);
      z-index: 10;
      position: absolute;
    `};
`;

export const CopyMessage = styled.div<CopyProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  transform: scale(0.1);
  opacity: 0;

  ${props =>
    props.copy &&
    `
      opacity: 1;
      transform: scale(1);
      z-index: 100;
      transition: all 0.4s ease-in-out;
      transition-delay: 0.3s;
    `};

  & span {
    font-weight: 400;
    text-shadow: 2px 3px rgba(0, 0, 0, 0.5);
    color: white;
    background: rgba(255, 255, 255, 0.7);
    width: 100%;
    text-align: center;
    margin-bottom: 0;
    padding: 1rem;

    @media ${device.mobile} {
      font-size: 6rem;
    }
  }
`;
