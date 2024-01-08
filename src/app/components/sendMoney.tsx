"use client"
// Importing necessary functions and hooks from external libraries
// "useSendTransaction" from 'wagmi' library is used for sending transactions
// "parseEther" from 'viem' library is used to convert the entered value to Ether

import { useSendTransaction } from 'wagmi'
import { parseEther } from 'viem'
import { useState } from 'react'

// Functional component for sending money
export function SendMoney(){
    
    const { sendTransaction } = useSendTransaction()
    // State variables for managing receiver address and value
    const [receiverAddress,setReceiverAddress]=useState("")
    const [value,setValue]=useState("")
    // JSX rendering for the component
  return (<>
    <div className="inputAddress">
        To : {"0x"}
        <input type="text" value={receiverAddress} onChange={(e)=>setReceiverAddress(e.target.value)}></input>
    </div>
    <div className="inputValue">
        Value = {' '}
        <input type="text" onChange={(e)=>setValue(e.target.value)}></input>
    </div>
    <button
      onClick={() =>
        sendTransaction({
          to:`0x${receiverAddress}`,
          value: parseEther(value),
        },)
      }
    >
      Send transaction
    </button>
    </>
  )
}