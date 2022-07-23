import "./Otp.css"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { LoginFunction, LoginStatus } from "../Redux/Action"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
const Otp = () => {
    const dispatch = useDispatch()
    const [otp1, setOtp1] = useState(0)
    const [otp2, setOtp2] = useState(0)
    const [otp3, setOtp3] = useState(0)
    const [otp4, setOtp4] = useState(0)
    const [otp5, setOtp5] = useState(0)
    const [otp6, setOtp6] = useState(0)
    const number = JSON.parse(localStorage.getItem(" theHinduCurrentUser"))
    const navigate = useNavigate()
    const GoToHome = () => {
        let len = number.length
        let flag = true
        if (number[len - 1] === otp6) {
            if (number[len - 2] === otp5) {
                if (number[len - 3] === otp4) {
                    if (number[len - 4] === otp3) {
                        if (number[len - 5] === otp2) {
                            if (number[len - 6] === otp1) {
                                flag = true
                            }
                        }
                    }
                }
            }
        }
        if (flag) {
            // window.location.href = "/"
            navigate('/Password')
        }
        else {

        }
    }
    return (
        <>
            <div className="logo1">
                <img style={{ width: "283px", marginTop: "12px" }} src="https://images.livemint.com/sso/newLogos/prod/ht_logo.svg?v2" alt="logo" />
            </div>
            <div className="maindiv">
                <h1 style={{ textAlign: "center" }}>Validate OTP</h1>
                <div className="sec_div">
                    <p style={{ textAlign: "center" }}>We have sent you a verification code to +91 - {number}.<br /> Please enter the code to proceed.</p>
                    <div style={{ marginTop: "50px" }}>
                        <div className="label">Enter OTP<span>*</span></div>
                        <div className="input">
                            <input style={{ marginLeft: "0%" }} maxLength={1} type="tel" inputMode="Numeric" onChange={(e) => { setOtp1(e.target.value) }} />
                            <input onChange={(e) => { setOtp2(e.target.value) }} maxLength={1} type="tel" inputMode="Numeric" />
                            <input onChange={(e) => { setOtp3(e.target.value) }} maxLength={1} type="tel" inputMode="Numeric" />
                            <input onChange={(e) => { setOtp4(e.target.value) }} maxLength={1} type="tel" inputMode="Numeric" />
                            <input onChange={(e) => { setOtp5(e.target.value) }} maxLength={1} type="tel" inputMode="Numeric" />
                            <input onChange={(e) => { setOtp6(e.target.value) }} maxLength={1} type="tel" inputMode="Numeric" />
                        </div>
                        <div className="resend">Resend OTP</div>
                    </div>
                    <div style={{ textAlign: "center", marginTop: "35px" }}>
                        <button id="OtpButtonCont" onClick={GoToHome}>Verify OTP to proceed</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export { Otp }