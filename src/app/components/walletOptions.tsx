"use client"
import {useState, useEffect} from 'react'
import { Connector, useConnect } from 'wagmi'

export function WalletOptions() {
  const { connectors, connect } = useConnect()
  
  const [ready, setReady] = useState(false)
  const connector:Connector = connectors[0];
  useEffect(() => {
    ;(async () => {
      const provider = await connectors[0].getProvider()
      setReady(!!provider)
    })()
  }, [connector])
  
  return (
    <button disabled={!ready} onClick={()=>connect({connector})}>
      {connector.name}
    </button>
  )
}