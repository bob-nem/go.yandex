import style from '../styles/Yellow.module.css'

import Title from '../images/orig.png'

export default function yellow() {
    return (
        <div className={style.Container}>
            <div className={style.Wrapper}>
                <div className={style.Title}>
                    <p>Скачайте приложение,<br />чтобы арендовать<br />ближайший электросамокат<br /></p>
                </div>
                <div className={style.Download}>
                    <button>Скачать приложение</button>
                </div>
                <div className={style.SoFarOnly}>
                    <div className={style.SoFarOnlyBG}>
                        <p style={{ fontFamily: "YandexSansTextBold" }}>Пока только в <a href="https://go.yandex/ru_ru/lp/rides/scooter" style={{ fontFamily: "YandexSansTextBold", color: "white" }}>Москве</a><br /> и <a href="https://go.yandex/ru_ru/lp/rides/scooter/krasnodar" style={{ fontFamily: "YandexSansTextBold", color: "white" }}>Краснодаре</a></p>
                    </div>
                </div>
                <div className={style.HowToRent}>
                    <h1>Как арендовать самокат</h1>
                    <div className={style.AppUse}>
                        <div className={style.AppUseLeft}>
                            <div className={style.PushButton} style={{ paddingBottom: "96px" }}>
                                <img src="https://avatars.mds.yandex.net/get-lpc/1531919/20b26fd5-61e2-45f5-9c65-11564f430215/orig"></img>
                                <p>В Яндекс Go нажмите кнопку Город</p>
                            </div>
                            <div className={style.PushButton} style={{ paddingBottom: "96px" }}>
                                <img src="https://avatars.mds.yandex.net/get-lpc/1370085/80de62cf-bad2-4b16-ae0a-00f66cf01e80/orig"></img>
                                <p>Найдите на карте ближайшую парковку</p>
                            </div>
                            <div className={style.PushButton} style={{ paddingBottom: "96px" }}>
                                <img src="https://avatars.mds.yandex.net/get-lpc/1370085/c0430b62-e7b0-48b2-9f8e-757dcfaee867/orig"></img>
                                <p>Дойдите до самоката <br />и отсканируйте QR-код<br /> на руле</p>
                            </div>
                        </div>
                        <div className={style.AppUseRight}>
                            <video src="https://streaming.video.yandex.ru/get/yndx-video/m-69033-17a8044d759-bae55ecc453e3a37/720p.mp4" width="360" height="720" autoPlay={true} />
                        </div>
                    </div>
                    <img className={style.AngularArrow} src="https://avatars.mds.yandex.net/get-lpc/1364677/218f6fb2-1e57-4039-8eac-f0122a8e929f/orig"></img>
                    <button className={style.ReadyGo}>Готово, едем! Аренда: от 50 рублей <br />+ тариф от 6 рублей в минуту</button>

                </div>
            </div>
        </div>
    )
}