import React from 'react'

export default function SVGIcon({filepath}) {
    return (
        <div className="svg-container">
            <img alt="" src={filepath} />
        </div>
    )
}
