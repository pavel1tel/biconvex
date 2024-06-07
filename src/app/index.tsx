import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { RouterProvider } from "atomic-router-react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { theme } from "@/app/theme";

import { Pages } from "@/pages";

import { router } from "@/shared/routing";

const helmetDefaultParams = {
  defaultTitle: "BitConvex",
  titleTemplate: "%s",
  htmlAttributes: { lang: "en" },
};

const getRootElement = () => (typeof window === "undefined" ? undefined : document.body);

export const Application = () => {
  document.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => window.scrollTo(0, 0)));
  return (
    <HelmetProvider>
      <MantineProvider theme={theme} classNamesPrefix="app">
        <ModalsProvider>
          <RouterProvider router={router}>
            <Helmet {...helmetDefaultParams}>
              <meta charSet="utf-8" />
              <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Helmet>
            <Notifications />
            <Pages />
          </RouterProvider>
        </ModalsProvider>
      </MantineProvider>
    </HelmetProvider>
  );
};
