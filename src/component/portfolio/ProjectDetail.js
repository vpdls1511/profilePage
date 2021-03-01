import React from 'react'
import Wait from "../../pages/Wait";

const ProjectDetail = (props) => {

    const content = props.items;
    const [scrolled , setScrolled] = React.useState('0');



    const scrollProgress = () => {
        const contents = document.querySelector('.dialogContent')

        const scrollPx = contents.scrollTop;
        const winHeightPx =
            contents.scrollHeight -
            contents.clientHeight

        const scroll = `${scrollPx / winHeightPx * 100}`;

        setScrolled(scroll);
    };


    React.useEffect(()=>{
        const contents = document.querySelector('.dialogContent')
        contents.addEventListener("scroll", scrollProgress);
        return() => contents.removeEventListener("scroll", scrollProgress);
    },[])


    // document.querySelector('.projectDetailContent').scrollTop
    return(
        <React.Fragment>
            <div className='projectDetailWarp'>
                <div className='projectDetailContent'>
                    <div className='dialogTitle'>
                        <span className='exitButton' onClick={() => props.OpenDetail('')} >
                        <div className='exitLine-1'></div>
                        <div className='exitLine-2'></div>
                    </span>
                        <div className='dialogTitleImg' style={{ backgroundImage:'url('+content.image+')' }}/>
                        <progress className='horizontalScroll' value={scrolled} max='100' ></progress>
                    </div>
                    <div className='dialogContent'>
                        <p>{content.title}</p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dolor vitae lorem ullamcorper, vitae pellentesque libero consectetur. Aliquam feugiat sed justo vel dignissim. Aliquam eleifend odio nec sem suscipit, nec scelerisque sem hendrerit. Sed arcu turpis, ornare ut facilisis sed, mattis ut urna. Vestibulum id molestie risus. Duis fringilla erat eget diam iaculis, auctor tincidunt justo euismod. Etiam fermentum purus at laoreet maximus. Aliquam hendrerit mi sit amet massa egestas rutrum. Aliquam ornare in odio vitae fermentum.
                        <br/>
                        Praesent consequat hendrerit dui, et sagittis augue pharetra eu. Phasellus sed felis eget metus ultricies venenatis. Vivamus libero sem, sodales at scelerisque maximus, tincidunt sit amet augue. Cras convallis lorem a placerat tempus. Aenean at cursus est. Quisque euismod erat vitae quam aliquet, quis blandit quam pulvinar. Sed mattis cursus nunc, suscipit pellentesque augue posuere nec. Ut ultricies, massa et viverra varius, augue nulla interdum dolor, eget porta erat tellus non mauris. Nunc blandit enim ante, ac malesuada tortor tincidunt vitae. Aliquam aliquam augue nibh, vel pellentesque metus scelerisque in. Sed sollicitudin lobortis lectus, non ultricies mauris hendrerit non. Praesent id pellentesque orci, vel vulputate lectus. Ut quis pulvinar nibh, sed varius justo. Vivamus quis maximus libero. Sed a leo rhoncus, tincidunt massa quis, luctus lectus. Mauris eget auctor purus.
                        <br/>
                        Maecenas malesuada arcu eu accumsan euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam a metus hendrerit, placerat ex ut, euismod orci. Nulla et dictum magna. Donec vitae varius quam. Suspendisse aliquam metus nibh, non varius massa fermentum ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce rhoncus imperdiet arcu, sed imperdiet ligula mollis aliquet. Aliquam enim lorem, consectetur fringilla luctus vitae, rutrum sed ipsum. Sed vestibulum tortor elit, vitae pharetra libero cursus id. Proin gravida mi ut sapien consequat, sit amet efficitur magna ultricies. Donec vitae felis a nunc tempor consequat sed et purus. Donec eget placerat est, vitae facilisis magna. Mauris a luctus libero, quis bibendum lectus. In condimentum lacinia hendrerit.
                        <br/>
                        Pellentesque dictum dolor felis, sed molestie turpis cursus ultrices. Proin ut pretium libero, a varius eros. Curabitur pulvinar dolor justo, et fermentum orci dignissim vel. Fusce leo erat, faucibus sit amet euismod et, accumsan non massa. Integer ornare sollicitudin auctor. Pellentesque tincidunt porttitor ultrices. Nunc commodo magna quis tempor auctor. Maecenas leo tellus, maximus ac pretium id, fringilla nec lacus. Nam sapien tortor, bibendum ac ultricies vel, interdum at sapien. Nunc pretium convallis aliquet. Curabitur congue magna sed ante viverra, ut condimentum tortor accumsan. Nunc ac eleifend augue. Pellentesque id nunc elementum, euismod felis id, luctus erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam dignissim congue tortor, sed accumsan neque dictum sed. Morbi sollicitudin dui id enim ullamcorper placerat ac sed diam.
                        <br/>
                        Pellentesque volutpat erat ut tellus faucibus, sit amet dictum risus molestie. Sed risus leo, vulputate sit amet ligula vitae, semper placerat nulla. Vestibulum metus risus, viverra in magna a, rhoncus rhoncus erat. Aliquam quis augue id libero pharetra accumsan. Etiam nisl erat, dictum a purus at, suscipit porta augue. Maecenas quis bibendum neque. Duis non ex dictum est interdum finibus in nec tellus. Cras a nibh ante. Praesent a venenatis est. Phasellus non libero nisi.
                        <br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dolor vitae lorem ullamcorper, vitae pellentesque libero consectetur. Aliquam feugiat sed justo vel dignissim. Aliquam eleifend odio nec sem suscipit, nec scelerisque sem hendrerit. Sed arcu turpis, ornare ut facilisis sed, mattis ut urna. Vestibulum id molestie risus. Duis fringilla erat eget diam iaculis, auctor tincidunt justo euismod. Etiam fermentum purus at laoreet maximus. Aliquam hendrerit mi sit amet massa egestas rutrum. Aliquam ornare in odio vitae fermentum.
                        <br/>
                        Praesent consequat hendrerit dui, et sagittis augue pharetra eu. Phasellus sed felis eget metus ultricies venenatis. Vivamus libero sem, sodales at scelerisque maximus, tincidunt sit amet augue. Cras convallis lorem a placerat tempus. Aenean at cursus est. Quisque euismod erat vitae quam aliquet, quis blandit quam pulvinar. Sed mattis cursus nunc, suscipit pellentesque augue posuere nec. Ut ultricies, massa et viverra varius, augue nulla interdum dolor, eget porta erat tellus non mauris. Nunc blandit enim ante, ac malesuada tortor tincidunt vitae. Aliquam aliquam augue nibh, vel pellentesque metus scelerisque in. Sed sollicitudin lobortis lectus, non ultricies mauris hendrerit non. Praesent id pellentesque orci, vel vulputate lectus. Ut quis pulvinar nibh, sed varius justo. Vivamus quis maximus libero. Sed a leo rhoncus, tincidunt massa quis, luctus lectus. Mauris eget auctor purus.
                        <br/>
                        Maecenas malesuada arcu eu accumsan euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam a metus hendrerit, placerat ex ut, euismod orci. Nulla et dictum magna. Donec vitae varius quam. Suspendisse aliquam metus nibh, non varius massa fermentum ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce rhoncus imperdiet arcu, sed imperdiet ligula mollis aliquet. Aliquam enim lorem, consectetur fringilla luctus vitae, rutrum sed ipsum. Sed vestibulum tortor elit, vitae pharetra libero cursus id. Proin gravida mi ut sapien consequat, sit amet efficitur magna ultricies. Donec vitae felis a nunc tempor consequat sed et purus. Donec eget placerat est, vitae facilisis magna. Mauris a luctus libero, quis bibendum lectus. In condimentum lacinia hendrerit.
                        <br/>
                        Pellentesque dictum dolor felis, sed molestie turpis cursus ultrices. Proin ut pretium libero, a varius eros. Curabitur pulvinar dolor justo, et fermentum orci dignissim vel. Fusce leo erat, faucibus sit amet euismod et, accumsan non massa. Integer ornare sollicitudin auctor. Pellentesque tincidunt porttitor ultrices. Nunc commodo magna quis tempor auctor. Maecenas leo tellus, maximus ac pretium id, fringilla nec lacus. Nam sapien tortor, bibendum ac ultricies vel, interdum at sapien. Nunc pretium convallis aliquet. Curabitur congue magna sed ante viverra, ut condimentum tortor accumsan. Nunc ac eleifend augue. Pellentesque id nunc elementum, euismod felis id, luctus erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam dignissim congue tortor, sed accumsan neque dictum sed. Morbi sollicitudin dui id enim ullamcorper placerat ac sed diam.
                        <br/>
                        Pellentesque volutpat erat ut tellus faucibus, sit amet dictum risus molestie. Sed risus leo, vulputate sit amet ligula vitae, semper placerat nulla. Vestibulum metus risus, viverra in magna a, rhoncus rhoncus erat. Aliquam quis augue id libero pharetra accumsan. Etiam nisl erat, dictum a purus at, suscipit porta augue. Maecenas quis bibendum neque. Duis non ex dictum est interdum finibus in nec tellus. Cras a nibh ante. Praesent a venenatis est. Phasellus non libero nisi.
                        <br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum dolor vitae lorem ullamcorper, vitae pellentesque libero consectetur. Aliquam feugiat sed justo vel dignissim. Aliquam eleifend odio nec sem suscipit, nec scelerisque sem hendrerit. Sed arcu turpis, ornare ut facilisis sed, mattis ut urna. Vestibulum id molestie risus. Duis fringilla erat eget diam iaculis, auctor tincidunt justo euismod. Etiam fermentum purus at laoreet maximus. Aliquam hendrerit mi sit amet massa egestas rutrum. Aliquam ornare in odio vitae fermentum.
                        <br/>
                        Praesent consequat hendrerit dui, et sagittis augue pharetra eu. Phasellus sed felis eget metus ultricies venenatis. Vivamus libero sem, sodales at scelerisque maximus, tincidunt sit amet augue. Cras convallis lorem a placerat tempus. Aenean at cursus est. Quisque euismod erat vitae quam aliquet, quis blandit quam pulvinar. Sed mattis cursus nunc, suscipit pellentesque augue posuere nec. Ut ultricies, massa et viverra varius, augue nulla interdum dolor, eget porta erat tellus non mauris. Nunc blandit enim ante, ac malesuada tortor tincidunt vitae. Aliquam aliquam augue nibh, vel pellentesque metus scelerisque in. Sed sollicitudin lobortis lectus, non ultricies mauris hendrerit non. Praesent id pellentesque orci, vel vulputate lectus. Ut quis pulvinar nibh, sed varius justo. Vivamus quis maximus libero. Sed a leo rhoncus, tincidunt massa quis, luctus lectus. Mauris eget auctor purus.
                        <br/>
                        Maecenas malesuada arcu eu accumsan euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam a metus hendrerit, placerat ex ut, euismod orci. Nulla et dictum magna. Donec vitae varius quam. Suspendisse aliquam metus nibh, non varius massa fermentum ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce rhoncus imperdiet arcu, sed imperdiet ligula mollis aliquet. Aliquam enim lorem, consectetur fringilla luctus vitae, rutrum sed ipsum. Sed vestibulum tortor elit, vitae pharetra libero cursus id. Proin gravida mi ut sapien consequat, sit amet efficitur magna ultricies. Donec vitae felis a nunc tempor consequat sed et purus. Donec eget placerat est, vitae facilisis magna. Mauris a luctus libero, quis bibendum lectus. In condimentum lacinia hendrerit.
                        <br/>
                        Pellentesque dictum dolor felis, sed molestie turpis cursus ultrices. Proin ut pretium libero, a varius eros. Curabitur pulvinar dolor justo, et fermentum orci dignissim vel. Fusce leo erat, faucibus sit amet euismod et, accumsan non massa. Integer ornare sollicitudin auctor. Pellentesque tincidunt porttitor ultrices. Nunc commodo magna quis tempor auctor. Maecenas leo tellus, maximus ac pretium id, fringilla nec lacus. Nam sapien tortor, bibendum ac ultricies vel, interdum at sapien. Nunc pretium convallis aliquet. Curabitur congue magna sed ante viverra, ut condimentum tortor accumsan. Nunc ac eleifend augue. Pellentesque id nunc elementum, euismod felis id, luctus erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam dignissim congue tortor, sed accumsan neque dictum sed. Morbi sollicitudin dui id enim ullamcorper placerat ac sed diam.
                        <br/>
                        Pellentesque volutpat erat ut tellus faucibus, sit amet dictum risus molestie. Sed risus leo, vulputate sit amet ligula vitae, semper placerat nulla. Vestibulum metus risus, viverra in magna a, rhoncus rhoncus erat. Aliquam quis augue id libero pharetra accumsan. Etiam nisl erat, dictum a purus at, suscipit porta augue. Maecenas quis bibendum neque. Duis non ex dictum est interdum finibus in nec tellus. Cras a nibh ante. Praesent a venenatis est. Phasellus non libero nisi.
                        <br/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProjectDetail