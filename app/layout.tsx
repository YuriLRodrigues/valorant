import { Header } from "@/components/interface/header";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Providers } from "@/providers/providers";

export const metadata: Metadata = {
  title: "Valorant",
  description:
    "Explore estratégias avançadas, dicas e truques para dominar o jogo Valorant. Nosso projeto pessoal oferece análises detalhadas de agentes, mapas e táticas, além de vídeos de jogabilidade e guias para ajudá-lo a se tornar um mestre em Valorant. Aperfeiçoe suas habilidades, suba no ranking e alcance o topo da classificação com nossa comunidade dedicada de jogadores apaixonados. Junte-se a nós e leve seu jogo a um nível superior no mundo de Valorant!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="dark:bg-zinc-900 bg-zinc-100 overflow-x-hidden font-poppins">
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
