import React, { FC } from "react";
import Page from "../../shared/elements/Page";
import Palette from "../../components/Palette";

const SingleColorPalettePage: FC<{}> = () => {
  return (
    <Page>
      <Palette />
    </Page>
  );
};

export default SingleColorPalettePage;
