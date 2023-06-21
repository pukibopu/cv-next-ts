import Button from '@/components/Button'
import Logo from '@/components/Logo'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    const sectionLinks=[
        {name:"关于",link:"/#about"},
        {name:"经历",link:"/#experience"},
        {name:"工作",link:"/#work"},
        {
            name:"联系方式",
            link: "/#contact"
        }
    ]
  return (
    <nav>
        <div className="wrapper">
            <div className="brand">
                <Link href="baidu.com">
                    <Logo />
                </Link>
            </div>
            <div className="nav-items">
                <ul className="nav-items-list">
                    {
                        sectionLinks.map(({name,link})=>(
                            <li key={name} className='nav-items-list-item'>
                                <Link className='nav-items-list-item-link' href={link}>
                                    {name}
                                </Link>
                                 </li>
                        ))
                    }
                </ul>
                <div className="nav-items-button">
                    <Button text="Resume" link="" />
                </div>
            </div>
        </div>
    </nav>
  )
}

export default NavBar