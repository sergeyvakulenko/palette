import React, { FC } from "react";
import Page from "../../shared/elements/Page";
import PaletteList from "../../components/PaletteList";

const MainPage: FC<{}> = () => {
  return (
    <Page>
      <PaletteList />
    </Page>
  );
};

export default MainPage;
