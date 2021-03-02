import React from 'react'

const ProfileInfo = () => {

    const skillImg = [
        '/images/resource/html.png',
        '/images/resource/javascript.png',
        '/images/resource/sass.png',
        '/images/resource/react.png',
        '/images/resource/node.png']

    return (
        <div className='profileInfo'>
            <div className='infoTextBox'>
                <span className='nameText'>
                    <p>김남규</p>
                    <p>KimNamGyu</p>
                </span>
                <span className='studyingText'>
                    <p>Now Studying</p>
                    <p>JavaScript ( ReactJS , NodeJS )</p>
                    <p>Design</p>
                </span>
                <span className='skillImages'>
                    {
                        skillImg.map((item, index) => {
                            return(
                                <img key={index} className={'skill-'+index} src={item} alt={'skills'+index} />
                            )
                        })
                    }
                </span>
            </div>
        </div>
    )
}

export default ProfileInfo