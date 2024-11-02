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
          colorPrimary: "#9f7aea",
        },
        components: {
          Button: {
            colorPrimary: "#9f7aea",
            fontWeight: "bold",
          },
          Checkbox: {
            colorPrimary: "#9f7aea",
          },
        },
      }}
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ConfigProvider>
  );
}
