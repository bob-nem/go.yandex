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
                <div className={style.HowToRent} id="rent">
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
                            <video src="https://streaming.video.yandex.ru/get/yndx-video/m-69033-17a8044d759-bae55ecc453e3a37/720p.mp4" width="360" height="720" autoPlay={true} loop={true} mute={true} />
                        </div>
                    </div>
                    <img className={style.AngularArrow} src="https://avatars.mds.yandex.net/get-lpc/1364677/218f6fb2-1e57-4039-8eac-f0122a8e929f/orig"></img>
                    <button className={style.ReadyGo}>Готово, едем! Аренда: от 50 рублей <br />+ тариф от 6 рублей в минуту</button>
                    <div className={style.Swiper}>
                        <video src="https://streaming.video.yandex.ru/get/yndx-video/m-43474-17a7be21d43-cfb3f6c623bf8b7b/720p.mp4" controls={true}></video>
                    </div>
                    <div className={style.RideGently} id="gentle">
                        <h3>Катайтесь нежно</h3>
                        <div className={style.Row}>
                            <div className={style.RowItem}>
                                <img src="https://avatars.mds.yandex.net/get-lpc/1531919/cc3cba2a-db3e-40c9-af79-c97a853fb3e8/orig"></img>
                                <h4>Самокат —<br /> только для вас</h4>
                                <p>Кататься вдвоём на одном самокате правда опасно.</p>
                            </div>
                            <div className={style.RowItem}>
                                <img src="https://avatars.mds.yandex.net/get-lpc/1370085/9e926005-d504-417a-b278-b5e04fc5ff47/orig"></img>
                                <h4>Лучше наденьте шлем </h4>
                                <p>Если только учитесь кататься, <br />не повредит и другая защита.</p>
                            </div>
                        </div>
                        <div className={style.Row}>
                            <div className={style.RowItem}>
                                <img src="https://avatars.mds.yandex.net/get-lpc/1674605/6e94554a-eb70-4959-86ef-51a59ad70fce/orig"></img>
                                <h4>Катайтесь трезвыми </h4>
                                <p>Это правило справедливо <br />для любого транспорта.</p>
                            </div>
                            <div className={style.RowItem}>
                                <img src="https://avatars.mds.yandex.net/get-lpc/1364677/e8ec23bd-f6af-430c-8666-1fcadc57b406/orig"></img>
                                <h4>Переходите дорогу только пешком</h4>
                                <p>То же с бордюрами и ступеньками.</p>
                            </div>
                        </div>
                        <div className={style.Row}>
                            <div className={style.RowItem}>
                                <img src="https://avatars.mds.yandex.net/get-lpc/403342/21e693ff-f2d4-4a98-b124-81ca05ac3b7a/orig"></img>
                                <h4>Уступайте пешеходам</h4>
                                <p>Вы тоже один из них.</p>
                            </div>
                            <div className={style.RowItem}>
                                <img src="https://avatars.mds.yandex.net/get-lpc/1531919/9fe85b23-84ec-45c4-afb2-c9372c32cfde/orig"></img>
                                <h4>Катайтесь <br />по-взрослому </h4>
                                <p>Вы можете взять самокат, если вам уже исполнилось 18 лет.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={style.LifeEnshurance}>
                    <img src="https://avatars.mds.yandex.net/get-lpc/1368426/b66b005d-4cd9-4bdc-8737-acb70a4e7801/orig" />
                    <p>Во время катания действует <a href="https://go.yandex/ru_ru/doc/scooter/insurance">базовое страхование</a> жизни <br />и здоровья на сумму <br />до 100 000 ₽. А ещё <br />в приложении можно купить <br /><a href="https://go.yandex/ru_ru/doc/scooter/insurance">расширенную страховку</a> <br />с покрытием до 500 000 ₽ <br />и страхованием имущества. <br />Если в поездке что-то <br />произошло, сразу же пишите <br />в поддержку.</p>
                </div>
            </div>
        </div>
    )
}