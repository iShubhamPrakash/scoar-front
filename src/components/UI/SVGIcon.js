import React from 'react'

export default function SVGIcon({filepath, ...props}) {
    return (
        <div className="svg-container" {...props}>
            <img alt="" src={filepath} />
        </div>
    )
}
