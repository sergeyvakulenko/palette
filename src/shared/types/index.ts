type BasePalette = {
  id: string;
  paletteName: string;
  emoji: string;
};

export type FlatPalette = BasePalette & {
  colors: FlatColor[];
};

export type FlatColor = {
  name: string;
  color: string;
};

export type Palette = BasePalette & {
  colors: { [key: number]: Color[] };
};

export type Color = {
  id: string;
  name: string;
  hex: string;
  rgb: string;
  rgba: string;
};

export enum Format {
  Hex = "hex",
  RGB = "rgb",
  RGBa = "rgba",
}
