"use client";
import { useReadContract,useBalance,useEnsName } from 'wagmi'
import {useState} from 'react';
import { erc20Abi } from 'viem';
export function ReadContract(){


  const [searchedAddress,setSearchedAddress]=useState("");
    /*
    const result = useReadContract({
        abi:erc20Abi,
    address: `0x${searchedAddress}`,
    functionName:"symbol"
    
  })
  const result2 = useReadContract({
        abi:erc20Abi,
    address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    functionName:"name"
    
  })*/
    //Usage of wagmi hooks to query respective data
      const symbol = useReadContract({
          abi:erc20Abi,
      address: `0x${searchedAddress}`,
      functionName:"symbol"
    })
    
    const balance = useBalance({
      address: `0x${searchedAddress}`,}
    )
    const ensName = useEnsName({
      address: `0x${searchedAddress}`,
    })
    // JSX rendering for the component
    return <>
    <div>Look up contract : {'0x'} 
    <input type="text" value={searchedAddress} onChange={(e)=>setSearchedAddress(e.target.value)}></input></div>
    <div hidden={!balance.isSuccess||!balance.data}>Balance is : {balance.data?.formatted}</div>
    <div hidden={!ensName.isSuccess||!ensName.data}>Name is : {ensName.data}</div>
    <div hidden ={!symbol.isSuccess||!symbol.data}>Symbol is : {symbol.data} </div>
    </>
}