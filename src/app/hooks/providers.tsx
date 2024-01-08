"use client";
import { WagmiProvider } from "wagmi";
import { config } from "../config";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
interface ProvidersProps {
  children: React.ReactNode
}
const queryClient = new QueryClient()
const Providers = ({ children } : ProvidersProps) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default Providers;