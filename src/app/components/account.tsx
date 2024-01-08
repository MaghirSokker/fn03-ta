"use client";
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'

export function Account() {
  //Usage of wagmi hooks to get account info after login
  const { address } = useAccount()
  const { disconnect } = useDisconnect()
  const { data: ensName } = useEnsName({ address })
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! })
 // JSX rendering for the component
  return (
    <div>
      {/* Display ENS Avatar if available */}
      {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
      {/* Display ENS Name and Address information */}
      {address && <div>{ensName ? `${ensName} (${address})` : address}</div>}
      {/* Disconnect button, onClick triggers the disconnect hook */}
      <button onClick={() => disconnect()}>Disconnect</button>
    </div>
  )
}