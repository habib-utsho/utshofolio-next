"use client";

import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";

const queryClient = new QueryClient();

export function Providers({ children }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00ABE4",
        },
        components: {
          Button: {
            colorPrimary: "#00ABE4",
            fontWeight: "bold",
          },
          Checkbox: {
            colorPrimary: "#00ABE4",
          },
        },
      }}
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ConfigProvider>
  );
}
