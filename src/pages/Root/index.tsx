import React, { FC } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MainPage from "../MainPage";
import PaletteCreatorPage from "../PaletteCreatorPage";
import PalettePage from "../PalettePage";
import SingleColorPalettePage from "../SingleColorPalettePage";

const Root: FC<{}> = () => {
  const location = useLocation();

  return (
    <AnimatePresence initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/palette/*">
          <Route index element={<MainPage />} />
          <Route path="new" element={<PaletteCreatorPage />} />
          <Route path=":paletteId" element={<PalettePage />} />
          <Route
            path=":paletteId/:colorId"
            element={<SingleColorPalettePage />}
          />
        </Route>
        <Route path="*" element={<Navigate to="/palette" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Root;
