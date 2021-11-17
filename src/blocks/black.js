import style from '../styles/Black.module.css'

export default function Black() {
    return (
        <div className={style.Container}>
            <div style={{ paddingTop: "130px", paddingLeft: "186px" }}>
                <img src="https://avatars.mds.yandex.net/get-lpc/1370085/0906edbc-b4ee-4f5d-9a4c-593a00852092/orig" />
            </div>
            <div className={style.Wrapper}>
                <h2><a href="https://market.yandex.ru/promo/art_of_scooter" target="_blank">Искусство кататься</a></h2>
                <p className={style.Description}><a href="https://market.yandex.ru/promo/art_of_scooter" target="_blank">Коллекция</a> про стиль и безопасность, <br />а не скорость.</p>
                <p className={style.Description2}>Специально для Маркета и Яндекс Go московские художники создали капсульную коллекцию защитных шлемов и разработали дизайн самокатов для безопасных поездок. Каждый шлем расписан вручную, а самокаты — в авторской оклейке художников. </p>
            </div>
            <img  className={style.Chuvak} src="https://avatars.mds.yandex.net/get-lpc/1220100/f68cf096-6c9d-44ba-88a2-12578d59615a/orig" />
        </div>
    )
}