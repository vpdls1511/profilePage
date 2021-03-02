import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'


const Contact = () => {

    const [isKakaoId , setIsKakaoId] = React.useState('KAKAO TALK');

    const toMail = () => {
        console.log('click to mail')
        window.location.href = 'mailto:vpdls1511@gmail.com';
    }
    const toKakao = () => {
        setIsKakaoId('ID : cpcpu')
        setTimeout(()=>{
            setIsKakaoId('KAKO TALK')
        },2000)
    }

    return(
        <React.Fragment>
            <div className='contactWarp'>
                <div className='profileBox'>
                    <img
                        src='https://avatars.githubusercontent.com/u/7870736?s=460&u=54ae3ca25381e64269c1d5dbb78ed4ae5cc97b4b&v=4'
                        alt='contactProfile'
                    />
                    <div className='titleText'>
                        <p><b>김남규</b> KimNamGyu</p>
                        <p className='blogIcon'> <FontAwesomeIcon icon={faShareAlt}/> http://webaura.tistory.com/ </p>
                        <p className='contactMent'>
                            항상 노력하는 개발자, 김남규 입니다.<br/>
                            This is Nam-gyu Kim, a developer who always works hard.
                        </p>
                    </div>
                </div>

                <div className='contactBtn' >
                    <button onClick={toKakao}> {isKakaoId} </button>
                    <button onClick={toMail}> E-Mail </button>
                </div>
                <div className='contactImgBox'>
                    <div> <div style={{backgroundImage:"url('/images/contactImg/first.jpeg'"}} /> </div>
                    <div> <div style={{backgroundImage:"url('/images/contactImg/second.jpg'"}} /> </div>
                    <div> <div style={{backgroundImage:"url('/images/contactImg/third.jpg'"}} /> </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Contact