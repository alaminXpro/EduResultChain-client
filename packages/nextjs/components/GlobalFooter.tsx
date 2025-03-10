import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";

/**
 * Site footer
 */
export const GlobalFooter = () => {
  return (
    <div className="min-h-0 py-5 px-1 mb-11 lg:mb-0">
      <div className="w-full">
        <ul className="menu menu-horizontal w-full">
          <div className="flex justify-center items-center gap-2 text-sm w-full">
            <span>© 2025</span>
            <span>·</span>
            <div className="flex justify-center items-center gap-2">
              <p className="m-0 text-center">
                Built with <HeartIcon className="inline-block h-4 w-4" /> by
              </p>
              <a
                className="flex justify-center items-center gap-1"
                href="https://www.linkedin.com/in/alaminxpro/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="link">AlaminXpro</span>
              </a>
            </div>
            <span>·</span>
            <div className="text-center">
              <a href="https://github.com/alaminXpro/EduResultChain" target="_blank" rel="noreferrer" className="link">
                GitHub
              </a>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};
