import React,{useState} from 'react'

let count = 0

const MainCard = (props ) => {

    const mainImageList = props.images

    const [selectImgIndex, setSelectImgIndex] = useState('calc(-' + 0*100 + '% - ' +  0*10 + 'px)')

    const clickToFocus = (e) => {
        setSelectImgIndex('calc(-' + e*100 + '% - ' +  e*10 + 'px)')
    }

    return (
        <li className='cardWarp'>
            <div className='mainImg'>
                <div
                    className='slidehelper'
                    style={{
                        top : selectImgIndex,
                    }}
                >
                    {
                        mainImageList.map((items, index)=>{
                            return(
                                <div
                                    className={'mainImgList'}
                                    key={index}
                                    style={{backgroundImage : "url("+items+")"}}
                                    onClick={() => clickToFocus(index)}
                                />
                            )
                        })
                    }
                </div>
            </div>

            <div className='imgListBox'>
                {
                    mainImageList.map((items, index)=>{
                        return(
                            <div
                                className={'mainImgList'}
                                key={index}
                                style={{backgroundImage : "url("+items+")"}}
                                onClick={() => clickToFocus(index)}
                            />
                        )
                    })
                }
            </div>

            <div className={'cardContent'}>
                <p>{props.title}</p>
                <p>{props.desc}</p>
            </div>
        </li>
    )
}

export default MainCard