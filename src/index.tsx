import { FC } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Root from "./pages/Root";
import "./index.css";
import { store } from "./shared/store";

const theme = createTheme({
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
  },
});

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Root />
      </Provider>
    </ThemeProvider>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
