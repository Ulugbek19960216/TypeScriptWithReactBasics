import { type PropsWithChildren } from "react";

type HeaderTypeProps = PropsWithChildren<{
  image: { src: string; alt: string };
}>;

export default function Header({ image, children }: HeaderTypeProps) {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
}
