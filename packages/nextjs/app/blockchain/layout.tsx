import "@rainbow-me/rainbowkit/styles.css";
import { ThemeProvider } from "next-themes";
import { ScaffoldEthAppWithProviders } from "~~/components/ScaffoldEthAppWithProviders";
import "~~/styles/globals.css";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({ title: "EduResultChain", description: "Secured By Ethereum Blockchain" });

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider enableSystem>
        <ScaffoldEthAppWithProviders>{children}</ScaffoldEthAppWithProviders>
      </ThemeProvider>
    </>
  );
};

export default ScaffoldEthApp;
