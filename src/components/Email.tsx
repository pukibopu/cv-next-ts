import Link from 'next/link'
import React from 'react'

const Email = () => {
  return (
    <div className='email'>
      <Link href="mailto:decentralized_ysy@icloud.com" className='email-link'>
        decentralized_ysy@icloud.com
      </Link>
    </div>
  )
}

export default Email