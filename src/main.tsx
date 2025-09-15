import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  Box,
  ChakraProvider,
  ColorModeScript,
  useColorMode,
} from "@chakra-ui/react";
import App from "./App";
import "./index.css";
import theme from "./theme";

const queryClient = new QueryClient();

function ParallaxWrapper() {
  const { colorMode } = useColorMode();
  return (
    <Box
      className="parallax"
      bgImage={colorMode === "dark" ? "url('bg.jpg')" : "none"}
      minH="100vh"
      bgAttachment="fixed"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <App />
    </Box>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <QueryClientProvider client={queryClient}>
        <ParallaxWrapper />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
