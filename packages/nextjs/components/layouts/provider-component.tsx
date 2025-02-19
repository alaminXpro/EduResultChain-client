"use client";

import React, { ReactNode, Suspense } from "react";
import App from "@/App";
import Loading from "@/components/layouts/loading";
import store from "@/store";
import { appWithI18Next } from "ni18n";
import { ni18nConfig } from "ni18n.config.ts";
import { Provider } from "react-redux";

interface IProps {
  children?: ReactNode;
}

const ProviderComponent = ({ children }: IProps) => {
  return (
    <Provider store={store}>
      <Suspense fallback={<Loading />}>
        <App>{children} </App>
      </Suspense>
    </Provider>
  );
};

export default ProviderComponent;
// todo
// export default appWithI18Next(ProviderComponent, ni18nConfig);
