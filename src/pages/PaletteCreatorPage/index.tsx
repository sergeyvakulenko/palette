import { FC } from "react";
import Page from "shared/elements/Page";
import PaletteCreator from "../../components/PaletteCreator";

const PaletteCreatorPage: FC = () => {
  return (
    <Page>
      <PaletteCreator />
    </Page>
  );
};

export default PaletteCreatorPage;
