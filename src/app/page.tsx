"use client";
import { Account } from './components/account' ;
import { useAccount } from 'wagmi';
import { WalletOptions } from './components/walletOptions';
import {ReadContract} from './components/readContract';
import { SendMoney } from './components/sendMoney';
function ConnectWallet() { 
  //renders components based on the state of connection to the wallet
  //One can't send money without being connected
  const { isConnected } = useAccount() 
  if (isConnected) return <>
  <Account/>
   <SendMoney/>
  </>
  return <><WalletOptions/> 
  
  </>
}
export default function Home() {
  return (
  <main>
    <div className='Wrapper'>
      <div className='Container'>
        <ConnectWallet/>
        <ReadContract/>
      </div>
    </div>
  </main>
  )
}
