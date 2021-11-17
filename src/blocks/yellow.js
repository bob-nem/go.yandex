import style from '../styles/Yellow.module.css'

import Title from '../images/orig.png'

export default function yellow() {
    return (
        <div className={style.Container}>
            <div className={style.Wrapper}>
                <div className={style.Title}>
                    <p>Скачайте приложение,<br />чтобы арендовать<br />ближайший электросамокат<br /></p>
                </div>
            </div>
        </div>
    )
}