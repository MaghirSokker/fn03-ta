import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { metaMask } from 'wagmi/connectors'

export const config = createConfig({
    //selects active collection of contracts(chains)
    //Can be used to test this app on testnet
    chains: [mainnet, sepolia],
    //selects the connector for metaMask
    connectors: [
        metaMask(),
    ],
    //selects RpcUrls (http or WebSocket)
    transports: {
        [mainnet.id]: http(),
        [sepolia.id]: http(),
    },

})