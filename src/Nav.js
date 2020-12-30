import React, { useEffect, useState } from 'react'
import './Nav.scss'

function Nav() {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 320) {
                handleShow(true)
            } else {
                handleShow(false)
            }

            return () => {
                window.removeEventListener('scroll')
            }
        })
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo" src="https://lh5.ggpht.com/zFmlyt1-muRGXnZ3k8301jFbvLfrmW_AfYJ3lTsWL5P3AleYRR7p2Jc8nR8--jQ5Xcg" alt="logo"/>
            <img className="nav__avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="avatar"/>
        </div>
    )
}

export default Nav
