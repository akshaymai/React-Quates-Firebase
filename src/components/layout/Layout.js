import React from 'react'
import MainNavigation from './MainNavigation'
import stylecss from './Layout.module.css'
const Layout=(props)=>{
    return(
        <>
        <MainNavigation/>
        <main className={stylecss.main}>{props.children}</main>
        </>
    )
}

export default Layout