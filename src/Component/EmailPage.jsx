import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { LoginFunction, LoginStatus } from "../Redux/Action"
import "./EmailPage.css"

export const Email = () => {
    const [email, setEmail] = useState("")
    const handleEmail = (val) => {
        setEmail(val)
    }
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = () => {
        dispatch(LoginFunction(false))
        dispatch(LoginStatus(true))
        localStorage.setItem("HinduEmail", JSON.stringify(email))
        navigate('/')
    }
    return <>
        <div className="logo1">
            <img style={{ width: "283px", marginTop: "12px" }} src="https://www.thehindu.com/theme/images/th-online/logo.png" alt="logo" />
        </div>
        <div className="main">
            <div style={{ textAlign: "center", marginTop: "40px" }}>
                <img src="https://images.livemint.com/img/static/thumsup.svg" alt="" />
                <h1 >You have successfully registered</h1>
            </div>
            <div className="div2">
                <p >Do you wish to link your email adrress?</p>
                <input onChange={(e) => handleEmail(e.target.value)} className="emailInput" type="email" placeholder="you@example.com"></input>
                <div style={{ display: "flex" }}>
                    <div className="skip">Skip</div>
                    <div className="continue" onClick={handleSubmit}>Continue</div>
                </div>
            </div>
        </div>
    </>
}