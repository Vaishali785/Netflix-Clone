import React from 'react'

function RowWrapper({ title, children }) {

    return (
        <div className='row'>
            <h2>{title}</h2>
            {children}
        </div>
    )
}

export default RowWrapper