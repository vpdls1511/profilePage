import React from 'react'

const Blog = () => {
    const goBlog = () => {
        window.open('http://webaura.tistory.com/')
    }
    return(
        <React.Fragment>
            <div className='content'>
                <div className='textBox'>
                    <p>새로 배운것들을 <b>잊지 않기 위해</b></p>
                    <p>잊어도 <b>다시 찾아보기 위해</b><br/>
                        블로그에 <b>정리</b>합니다</p>
                    <div className='blogBtn' onClick={()=>goBlog()}>nGyu's Blog</div>
                </div>
            </div>
            <div className='blogImg'/>
        </React.Fragment>
    )
}

export default Blog;