import Mock, {
  RECORD,
  REG_EXP,
  type ColorTypeId,
  type HexCodeType,
  type HslCodeType,
  type RgbCodeType,
  type TermTagType,
} from "./mocks";

class Convert {
  getColorByType<
    ColorTypes extends ColorTypeId = "Hexa",
    ColorNames extends Extract<
      TermTagType,
      "crimson" | "darkred" | "gold" | "indigo" | "palegoldenrod" | "tomato"
    > = "tomato",
  >(type: ColorTypes, name: ColorNames): string | null {
    return (RECORD[type][name]?.match(REG_EXP[type]) as string[])[0];
  }
}

const Converter = new Convert();
export default Converter;
