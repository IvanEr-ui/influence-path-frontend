import './infoSection.css'
import InfoLogo from "@shared/assets/images/png/infosection.png"

export function InfoSection() {

    return <div className="info">
        <h2>Начните зарабатывать<br /> на амбассадорских <br />программах</h2>
        <p>
            <span style={{ color: "rgb(252,104,250, 0.8)" }}>Амбассадорская программа </span>- программа, целю которого является привлечение амбассадоров.<br />
            <span style={{ color: "rgb(252,104,250, 0.8)" }}> Амбассадоры </span>- это люди, которые доносят идеи компании, а также продвигают  продукты компании среди  целевой аудитории, с целью привлечь новых пользователей.
        </p>
        <img src={InfoLogo} />
    </div>

}