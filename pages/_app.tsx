import React from "react";
import { AppProps } from "next/app";
import { Refine } from "@pankod/refine-core";
import {
  notificationProvider,
  RefineSnackbarProvider,
  CssBaseline,
  GlobalStyles,
  ReadyPage,
  ErrorComponent,
} from "@pankod/refine-mui";
import routerProvider from "@pankod/refine-nextjs-router";
import dataProvider from "@pankod/refine-simple-rest";
import { ColorModeContextProvider } from "@contexts";
import { Title, Sider, Layout, Header } from "@components/layout";
import { MuiInferencer } from "@pankod/refine-inferencer/mui";

const API_URL = "https://api.fake-rest.refine.dev";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ColorModeContextProvider>
      <CssBaseline />
      <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
      <RefineSnackbarProvider>
        <Refine
          routerProvider={routerProvider}
          dataProvider={dataProvider(API_URL)}
          notificationProvider={notificationProvider}
          ReadyPage={ReadyPage}
          catchAll={<ErrorComponent />}
          Title={Title}
          Sider={Sider}
          Layout={Layout}
          Header={Header}
          resources={[
            {
              name: "products",
              list: MuiInferencer,
              show: MuiInferencer,
              create: MuiInferencer,
              edit: MuiInferencer,
            },
          ]}
        >
          <Component {...pageProps} />
        </Refine>
      </RefineSnackbarProvider>
    </ColorModeContextProvider>
  );
}

export default MyApp;
