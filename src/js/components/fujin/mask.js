import React from 'react'

export default class Mask extends React.Component {

    render() {
        const styleMask = {
            width: '100%',
            height: '100%',
            position: 'absolute',
            backgroundColor: 'rgba(0,0,0,0.4)'
        }
        return (
            <div style={styleMask}>

            </div>
        )
    }
}
