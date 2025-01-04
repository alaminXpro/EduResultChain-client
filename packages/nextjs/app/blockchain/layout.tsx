import "@rainbow-me/rainbowkit/styles.css";
import { ScaffoldEthAppWithProviders } from "~~/components/ScaffoldEthAppWithProviders";
import "~~/styles/globals.css";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({ title: "EduResultChain", description: "Secured By Ethereum Blockchain" });

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ScaffoldEthAppWithProviders>{children}</ScaffoldEthAppWithProviders>
    </>
  );
};

export default ScaffoldEthApp;
