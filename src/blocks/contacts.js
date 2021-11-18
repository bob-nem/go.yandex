import style from '../styles/Contacts.module.css'

import FooterImg from '../images/footer.png'

export default function Map() {
    return (
        <div className={style.Container}>
            <div className={style.Wrapper}>
                <h2>Скачайте приложение</h2>
                <p>Введите номер и мы пришлём вам СМС со ссылкой <br />на приложение </p>
                <div className={style.SedndForm}>
                    <form>
                        <input type="tel" name="phone" placeholder="7 123 XXXXXXX" />
                        <button type="submit">Отправить</button>
                    </form>
                </div>
            </div>
            <div className={style.FooterI}><img src={FooterImg} /></div>
        </div>
    )
}