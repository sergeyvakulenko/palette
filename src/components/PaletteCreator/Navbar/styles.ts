import { makeStyles, Theme } from "@material-ui/core/styles";
import styled from "styled-components";
import { device, drawerWidth } from "../../../shared/helpers/responsive";

export const Container = styled.div`
  display: flex;
`;

export const NavButtons = styled.div`
  margin-right: 1rem;

  & button {
    margin: 0 0.5rem;
  }
`;

export const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth.desktop})`,
    marginLeft: `${drawerWidth.desktop}`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [`@media ${device.tablet}`]: {
      width: "100%",
      marginLeft: `calc(100%)`,
    },
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: "none",
  },
}));
