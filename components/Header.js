import React from 'react'
import { ConnectButton } from 'web3uikit'

function Header() {
  return (
    <div className='border-b-2'>
      <div className='header'>
        <h3 className='text-xl'>Gil's Smart Decentralized Lottery</h3>
        <ConnectButton moralisAuth={false} />
      </div>
    </div>
  )
}

export default Header