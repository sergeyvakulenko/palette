import { makeStyles, Theme } from "@material-ui/core/styles";
import styled from "styled-components";
import { device, drawerWidth } from "shared/helpers/responsive";

export const Content = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Buttons = styled.div`
  width: 100%;
  margin: 2rem 0;

  & button {
    width: 50%;
  }

  @media ${device.mobile} {
    margin: 1rem 0;
  }
`;

export const useStyles = makeStyles((theme: Theme) => ({
  drawer: {
    width: drawerWidth.desktop,
    flexShrink: 0,
    height: "100%",
    [`@media ${device.tablet}`]: {
      width: `${drawerWidth.tablet} !important`,
    },
  },
  drawerPaper: {
    width: drawerWidth.desktop,
    display: "flex",
    alignItems: "center",
    [`@media ${device.tablet}`]: {
      width: `${drawerWidth.tablet} !important`,
    },
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
}));
