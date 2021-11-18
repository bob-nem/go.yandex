import style from '../styles/Map.module.css'

export default function Map() {
    return (
        <div className={style.Container} id="where">
            <div className={style.Wrapper}>
                <h2>Где есть самокаты</h2>
                <p> Самокаты постепенно появляются в разных районах Москвы. Карта в приложении покажет, где взять самокат — и на какой парковке его можно оставить. </p>
                <img src="https://avatars.mds.yandex.net/get-lpc/403342/6ea73211-2577-4806-843f-6412c16dd614/orig" width="920px" height="920px" />
            </div>
        </div>
    )
}