"use client";

import type { NextPage } from "next";
import { DocumentTextIcon, PresentationChartBarIcon } from "@heroicons/react/24/outline";
import { GlobalFooter } from "~~/components/GlobalFooter";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">EduResultChain</span>
          </h1>

          <p className="text-center text-lg">
            EduResultChain is a{" "}
            <code className="italic bg-gray-100 text-base font-bold max-w-full break-words break-all inline-block px-1 rounded">
              blockchain-based platform
            </code>{" "}
            that securely manages and verifies students&apos; academic certificates, and mark sheets.
          </p>
          <p className="text-center text-lg">
            This project is under development by the students of Ahsanullah University of Science and Technology.
          </p>
        </div>

        <div className="flex-grow bg-gray-100 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-white px-10 py-10 text-center items-center max-w-xs rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <DocumentTextIcon className="h-8 w-8 text-blue-500" />
              <p className="mt-4">
                Review the details of our project in the{" "}
                <a
                  href="https://github.com/alaminXpro/EduResultChain/blob/main/README.md"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Project Proposal
                </a>{" "}
                document.
              </p>
            </div>
            <div className="flex flex-col bg-white px-10 py-10 text-center items-center max-w-xs rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <PresentationChartBarIcon className="h-8 w-8 text-blue-500" />
              <p className="mt-4">
                Check out the design and functionality in our{" "}
                <a
                  href="https://www.canva.com/design/DAGbN0-R5Mk/X8LfC9UECSmnzG8pXztfpw/view?mode=prototype"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Mock UI
                </a>{" "}
                prototype.
              </p>
            </div>
          </div>
        </div>
      </div>
      <GlobalFooter />
    </>
  );
};

export default Home;
