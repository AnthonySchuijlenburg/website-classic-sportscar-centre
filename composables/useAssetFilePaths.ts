import { filename } from "pathe/utils";

interface Image {
  default: string;
}

export default async function (
  glob: Record<string, Promise<Image>>,
): Promise<Record<string, string>> {
  const images: Record<string, string> = Object.fromEntries(
    await Promise.all(
      Object.entries(glob).map(async ([key, valuePromise]) => {
        const value = await valuePromise;
        return [filename(key), value.default];
      }),
    ),
  );

  return images;
}
