import "./Password.css"
import '../fontawesome-free-6.0.0-web/css/all.css'
import { useState } from "react"
import { checkUpper, checkLower, checkSpChar, checkNum } from '../Redux/Action'
import { useNavigate } from "react-router-dom"
export const Password = () => {
    const [passwordVal, setPassword] = useState("")
    const [char, setChar] = useState(false)
    const [upper, setUpper] = useState(false)
    const [lower, setLower] = useState(false)
    const [SpChar, setSpChar] = useState(false)
    const [Num, setNum] = useState(false)
    const [cont, setCont] = useState(false)
    const [percen, setPercen] = useState(0)
    let count;
    const handlePassword = (val) => {
        if (val.length === 0) {
            setChar(false)
            setUpper(false)
            setLower(false)
            setSpChar(false)
            setNum(false)
        }
        count = 0;
        // setPassword(val);
        if (val.length > 7) {
            count++;
            setChar(true)
        }
        else {
            setChar(false)
        }
        if (checkUpper(val)) {
            count++;
            setUpper(true)

        }
        else {
            setUpper(false)
        }
        if (checkLower(val)) {
            count++;
            setLower(true)
        }
        else {
            setLower(false)
        }
        if (checkSpChar(val)) {
            count++;
            setSpChar(true)
        }
        else {
            setSpChar(false)
        }
        if (checkNum(val)) {
            count++;
            setNum(true)
        }
        else {
            setNum(false)
        }
        if (char && upper && lower && SpChar && Num) {
            setCont(true)
        }
        else {
            setCont(false)
        }
        setPercen(count)
        console.log(percen);
    }
    const navigate = useNavigate()
    const handleSubmit = () => {
        if (cont) {
            navigate("/Email")
        }
    }
    return <>
        <div className="logo1">
            <img style={{ width: "283px", marginTop: "12px" }} src="https://images.livemint.com/sso/newLogos/prod/ht_logo.svg?v2" alt="logo" />
        </div>
        <div className="mainDiv">
            <h1 style={{ textAlign: "center" }}>Create Password</h1>
            <div className="secDiv">
                <p style={{ textAlign: "center", marginBottom: "50px" }}>Please craete a secure password including the secure criteria below</p>
                <input id="passInput" type="password" maxLength="14" minLength="8" onKeyUp={(e) => handlePassword(e.target.value)}></input>
                <div className="passRow1">
                    <p className={char && "check"}><i className="fas fa-check"></i>8-14 characters</p>
                    <p className={upper && "check"}><i className="fas fa-check"></i>1 uppercase letter</p>
                    <p className={lower && "check"}><i className="fas fa-check"></i>1 lowercase letter</p>
                </div>
                <div className="passRow2">
                    <p className={SpChar && "check"}><i className="fas fa-check"></i>One special character</p>
                    <p className={Num && "check"}><i className="fas fa-check"></i>1 number</p>
                </div>
                <p style={{ marginBottom: "8px", fontSize: "16px", fontWeight: "700", }}>Password Strength</p>
                <div className="strength"><div id={`ColorLine${percen}`}></div></div>
                <div style={{ textAlign: "center" }}><button id="PasswordButton" className={cont ? "continueButton ContHover_T" : "continueButton ContHover_F"} onClick={handleSubmit}>Continue</button></div>
            </div>
        </div>
    </>

}