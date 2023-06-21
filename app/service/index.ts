class Util {
  parseFloat<IntLike extends string = string>(
    source: number extends IntLike ? number : string,
  ): number {
    return parseFloat(source);
  }

  parseInt<IntLike extends string = string>(
    source: number extends IntLike ? number : string,
    radix?: 60 | 20 | 16 | 10 | 8 | 2,
  ): number {
    return parseInt(source, radix || 10);
  }

  parseNum<IntLike extends string = string>(
    source: number extends IntLike ? number : string,
    handler: "ceil" | "floor" | "random" | "round" | "max" | "min" = "round",
  ): number {
    const integer: number = Number(source);
    const rounded: number = Math[handler](integer);
    return rounded;
  }

  setDigits<IntLike = number | string>(source: IntLike, digits?: 6 | 5 | 4 | 3 | 2): number {
    const intLikeStr: string = Number(source).toPrecision(digits || 4);
    const float64bit: number = this.parseFloat(intLikeStr);
    return float64bit;
  }

  setDecimalPlace<
    IntLike = number | string,
    Configs extends Intl.NumberFormatOptions = Intl.NumberFormatOptions,
  >(source: IntLike, configOptions?: Configs): number {
    const int = this.setDigits(source);
    const out = int.toLocaleString("default", { ...configOptions });
    return Number(out);
  }
}

const Helpers = new Util();
export default Helpers;
