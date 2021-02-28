import React from 'react'

const Card = ( props ) => {

    const mainImage = props.images !== undefined ? props.images[0] : '/images/resource/profile.jpeg'

    return (
        <li className='cardWarp'
            style={{
                left:props.state
            }}>
            <div
                className={'mainImg'}
                style={{
                    backgroundImage : "url('"+mainImage+"')"
                }}
            />
            <div className={'cardContent'}>
                <p>{props.title}</p>
                <p>{props.desc}</p>
            </div>
        </li>
    )
}

export default Card