import React, { useEffect } from "react"
import { useMoralis } from "react-moralis"

function ManualHeader() {
  const { enableWeb3, account, isWeb3Enabled, Moralis, deactivateWeb3, isWeb3EnableLoading } = useMoralis()

  useEffect(() => {
    if (isWeb3Enabled) return;
    if (!isWeb3Enabled && typeof window !== "undefined" && window.localStorage.getItem("connected")) {
      if (window.localStorage.getItem("connected")) {
        enableWeb3()
      }
    }
  }, [isWeb3Enabled])

  useEffect(() => {
    Moralis.onAccountChanged((account) => {
      console.log(`Account changed to ${account}`)
      if (account == null) {
        window.localStorage.removeItem("connected")
        deactivateWeb3()
        console.log("Null account found")
      }
    })
  }, [])

  const handleClick = async () => {
    await enableWeb3()
    if (typeof window !== "undefined") {
      window.localStorage.setItem("connected", "inject")
      if (window.localStorage.getItem("connected")) {
        console.log("You're connected!")
      }
    }
  }

  return (
    <div>
      <div className="header">
        <h1>Gil's Smart Decentralized Lottery</h1>
        {account ? (
          <p>
            You're connected! (Address: {account.slice(0, 6)}...{account.slice(account.length - 4)})
          </p>
        ) : (
          <button 
            onClick={handleClick}
            disabled={isWeb3EnableLoading}
          >Connect</button>
        )}
      </div>
      <hr />
    </div>
  )
}

export default ManualHeader
