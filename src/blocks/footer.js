import style from '../styles/Footer.module.css'

export default function Footer () {
    return (
        <div className={style.Container}>
            <p style={{marginRight: "48px"}}>Электросамокаты Яндекс Go — сервис аренды электросамокатов на условиях, указанных на: <a href="https://ya.cc/go/" target="_blank">ya.cc/go.</a></p>
            <p>©2021 ООО «Яндекс.Микромобильность»</p>
        </div>
    )
}