import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import "../styles/globals.css";
import { NotificationsProvider } from "@mantine/notifications";
import axios from "axios";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useEffect } from "react";
import { useRouter } from "next/router";
import authRepo from "@/app/api/repositories/auth.repo";
import AppWrapper from "@/components/AppWrapper";
import AppContextProvider from "@/context/AppContextProvider";

// axios.defaults.baseURL = "http://104.251.211.125:8055";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme: "light",
            primaryColor: "cyan",
          }}
        >
          <NotificationsProvider position="top-right">
            <AppContextProvider>
              <AppWrapper>
                <Component {...pageProps} />
              </AppWrapper>
            </AppContextProvider>
          </NotificationsProvider>
        </MantineProvider>
      </QueryClientProvider>
    </>
  );
}
