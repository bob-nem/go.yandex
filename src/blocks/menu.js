import style from '../styles/Menu.module.css'


import Logo from '../images/orig.svg'

export default function menu () {
    return (
        <div className={style.Container}>
            <div className={style.Menu}>
                <div className={style.Logo}>
                    <img src={Logo} width='158px' height='45px' alt="yandex go logotype"/>
                </div>
                <nav className={style.Nav}>
                    <ul>
                        <li>Как арендовать самокат</li>
                        <li>Катайтесь нежно</li>
                        <li>Где самокаты?</li>
                    </ul>
                </nav>
                <div className={style.Right}>
                    <a href="https://go.yandex/ru_ru/lp/rides/scooter#app" rel="noopener"><button>Скачать</button></a>
                </div>
            </div>
        </div>
    )
}