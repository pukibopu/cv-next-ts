import Link from 'next/link'
import React from 'react'
import {FiGithub,FiMail} from 'react-icons/fi'

const socialLinks=[
    {name:"Github",icon:<FiGithub />,link:"https://github.com/pukibopu"},
    {name:"Mail",icon:<FiMail />,link:"mailto:decentralized_ysy@icloud.com"},
]

const SocialIcons = () => {
  return (
    <div className="social-icons">
        <ul className='social-icons-list'> 
            {socialLinks.map(({name,icon,link})=>(
                <li key={name} title={name} className='social-icons-list-item'>
                    <Link href={link} className='social-icons-list-item-link' target='_blank'>{icon}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default SocialIcons