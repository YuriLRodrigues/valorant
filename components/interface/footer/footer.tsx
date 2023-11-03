import { BlurImage } from "@/components/ui/blur-image";
import { FooterMediaLinks } from "./footer-social-medias";

export const Footer = () => {
  return (
    <footer className="dark:bg-zinc-800 bg-zinc-200 px-4 py-6 flex flex-col gap-4 items-center">
      <FooterMediaLinks />
      <p className="text-sm dark:text-zinc-300 text-black">
        © 2021 Valorant Brasil
      </p>
      <BlurImage
        src="https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt84ae391429f2375a/5f2db8f41967337e7590c9a8/riot-seloclassind-14-val.png?&height=100&disable=upscale"
        className="max-w-[200px] max-h-[200px]"
        alt="Classfcação Indicativa"
      />
    </footer>
  );
};
