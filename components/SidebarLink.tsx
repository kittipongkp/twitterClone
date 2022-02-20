import React from 'react'

interface Props {
    Icon: any
    text: string
    active?: boolean
}

const SidebarLink = ( Props:Props ) => {

    const { Icon, text, active } = Props
    
  return (
    <div className={`text-[#d9d9d9]  flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation  ${active && "font-bold"} `} >
        <Icon className="h-7"  />
        <span className='hidden xl:inline ' >{text}</span>
    </div>
  )
}

export default SidebarLink