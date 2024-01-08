"use client"
import {useState, useEffect} from 'react'
import { Connector, useConnect } from 'wagmi'

export function WalletOptions() {
  const { connectors, connect } = useConnect()
  
  const [ready, setReady] = useState(false)
  const connector:Connector = connectors[0];
  // useEffect to check the readiness of the wallet connection when the connector changes
  useEffect(() => {
    ;(async () => {
      const provider = await connectors[0].getProvider()
      // Update the 'ready' state based on the presence of the provider
      setReady(!!provider)
    })()
  }, [connector])
  // JSX rendering for the component
  return (
    <button className="" disabled={!ready} onClick={()=>connect({connector})}>
      {connector.name}
    </button>
  )
}