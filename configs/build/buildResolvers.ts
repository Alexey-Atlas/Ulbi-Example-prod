import { ResolveOptions } from "webpack";

export const buildResolvers = (): ResolveOptions => {
  return {
    // для кого не указываем расширения
    extensions: [".tsx", ".ts", ".js"],
  };
};
