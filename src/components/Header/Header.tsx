import { useEffect, useState } from 'react';

export default function Header() {

    //https://www.youtube.com/watch?v=QzW03hyw_bU mark header automatizado
    // https://developer.mozilla.org/pt-BR/docs/Web/API/Window/scroll top page       
    const [scroll, setScroll] = useState('');
    const [isOpenNavbar, setIsOpenNavbar] = useState(false);
    function _handleNavbar() {
        setIsOpenNavbar(!isOpenNavbar);
    }
    const onScroll = () => {
        const Scrolled = document.documentElement.scrollTop;
        const MaxHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const ScrollPercent = (Scrolled / MaxHeight) * 100;
        setScroll(ScrollPercent.toString() + '%')

    };
    window.addEventListener("scroll", onScroll);
    // isOpenNavbar ? ' absolute h-screen w-full bg-slate-500 right-[-100%] transition ease-in-out delay-150' : "flex flex-row items-center gap-16 max-md:hidden"

    return (
        <nav className="fixed flex justify-center z-10 w-full min-h-[96px] px-5 bg-[#201D30] ">
            <div className=" flex w-full justify-end items-center lg:hidden">
                <a onClick={_handleNavbar}>
                 
                </a>
            </div>
            <div className='hidden lg:flex justify-center items-center text-2xl gap-16'>
           
                <a href="#aboutme">
                    <h1>GitHub API</h1>
                </a>
                <a href="#stacks">
                    <h1>Objeto</h1>
                </a>
                <a href="#projects">
                    <h1>github-automated-repos</h1>
                </a>
            </div>
            <div className={`absolute z-20 flex flex-col h-screen w-full bg-[#262337] gap-24 right-[-100%] transition-all ease-in-out delay-[0.1s] ${isOpenNavbar ? 'right-[0]' : ''}`}>
                <div className=" flex  justify-end min-h-[96px] px-5 items-center lg:hidden">
                    <a onClick={_handleNavbar}>
                     
                    </a>
                </div>
                <div className="flex flex-col justify-center items-center text-5xl gap-8 ">
                    <a href="#home" onClick={_handleNavbar}>
                        <h1  >Home</h1>
                    </a>
                    <a href="#aboutme" onClick={_handleNavbar}>
                        <h1>About me</h1>
                    </a>
                    <a href="#stacks" onClick={_handleNavbar}>
                        <h1>Stacks</h1>
                    </a>
                    <a href="#projects" onClick={_handleNavbar}>
                        <h1>Projects</h1>
                    </a>
                </div>

            </div>

            <div style={{ transition: 'width 0.5s linear 0s', width: `${scroll}` }} className={`h-1 absolute bg-slate-50  left-0 top-[96px]`} />
        </nav>
    )
}

