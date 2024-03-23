import React from 'react'
import Sidebar from '@/components/shared/Sidebar';
import MobileNav from '@/components/shared/MobileNav';

//This would house the entire application
const Layout = ({children}: {children: React.ReactNode }) => {
  return (
    <main className="root">
      {/* Sidebar */}
      <Sidebar/>
      <MobileNav />
    
      {children}
    <div className="root-container">
        <div className="wrapper">
        {children}
        </div>
    </div>
    </main>
  )
}

export default Layout;