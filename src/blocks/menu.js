import style from '../styles/Menu.module.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Logo from '../images/orig.svg'

export default function menu () {
    return (
        <div className={style.Container}>
            <div className={style.Menu}>
                <div className={style.Logo}>
                    <a href="https://go.yandex/"><img src={Logo} width='158px' height='45px' alt="yandex go logotype"/></a>
                </div>
                <nav className={style.Nav}>
                    <ul>
                        <AnchorLink href="#rent"><li>Как арендовать самокат</li></AnchorLink>
                        <AnchorLink href="#gentle"><li>Катайтесь нежно</li></AnchorLink>
                        <AnchorLink href="#where"><li>Где самокаты?</li></AnchorLink>
                    </ul>
                </nav>
                <div className={style.Right}>
                    <a href="https://go.yandex/ru_ru/lp/rides/scooter#app" rel="noopener"><button>Скачать</button></a>
                </div>
            </div>
        </div>
    )
}