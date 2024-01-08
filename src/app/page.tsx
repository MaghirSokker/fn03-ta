"use client";
import { Account } from './components/account' ;
import { useAccount } from 'wagmi';
import { WalletOptions } from './components/walletOptions';
import {ReadContract} from './components/readContract';
import { SendMoney } from './components/sendMoney';
function ConnectWallet() { 
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
