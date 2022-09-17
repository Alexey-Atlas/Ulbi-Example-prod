import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export const buildResolvers = (options: BuildOptions): ResolveOptions => {
  return {
    // для кого не указываем расширения
    extensions: [".tsx", ".ts", ".js"],
    // делает абсолютные пути приоритетными
    preferAbsolute: true,
    modules: [options.paths.src, "node_modules"],
    // если оставляем пустым, то ничего добавляться к путям не будет.если указать например "@",
    // то к путям она будет добаляться
    alias: {},
    // для каждого модуля файл index.ts(index.tsx) будет главным
    mainFiles: ["index"],
  };
};
