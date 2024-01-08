"use client";
import { WagmiProvider } from "wagmi";
import { config } from "../config";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
interface ProvidersProps {
  children: React.ReactNode//pleasing the gods of typescript
}
const queryClient = new QueryClient()
//wrapping the entire app in necessary Hooks
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