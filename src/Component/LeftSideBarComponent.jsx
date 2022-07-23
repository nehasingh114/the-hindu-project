import React, { useState } from 'react'
import './LeftSideBarComponent.css'
export const LeftSideBarComponent = ({ Name, Options }) => {
    const [flag, setFlag] = useState(false)
    return (
        <>
            {flag ? <div className='SideBarOptionsOpen' onClick={() => setFlag(!flag)}>
                <div>
                    <div>{Name}</div>
                    <div><i class="fas fa-angle-up"></i></div>
                </div>
                {Options.map((el) => {
                    return (
                        <div className='SideBarOptionsDiv'>{el}</div>
                    )
                })}
            </div> : <div className='SideBarOptionsClose' onClick={() => setFlag(!flag)}>
                <div>{Name}</div>
                <div><i class="fas fa-angle-down"></i></div>
            </div>}
        </>
    )
}
