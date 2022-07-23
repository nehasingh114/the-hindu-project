import React, { useState } from "react";
import "./Login.css"
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [mobile, setMobile] = useState("")
    const navigate = useNavigate()
    const [check, setCheck] = useState(false)
    const handleChange = (e) => {
        if (mobile.length === 9) {
            setCheck(true)
        }
        else {
            setCheck(false)
        }
        setMobile(e.target.value)
    }
    const handleSubmit = () => {
        if (mobile.length === 10) {
            if (mobile[0] === "9" || mobile[0] === "8" || mobile[0] === "6" || mobile[0] === "7") {
                localStorage.setItem("TheHinduCurrentUser", JSON.stringify(mobile))
                navigate('/Otp')
            }
        }

    }
    return (
        <>
            <div className="logo1">
                <img style={{ width: "283px", marginTop: "12px" }} src="https://www.thehindu.com/theme/images/th-online/logo.png" alt="logo" />
            </div>
            <div className="div1">
                <h1 style={{ textAlign: "center", padding: "35px 0px 0px" }}>Login or Register</h1>
                <div className="div2">
                    <div >
                        <div className="div3">
                            <div style={{ backgroundColor: "#EEEEEE", color: "black" }}><img className="allLogo" src="https://accounts.hindustantimes.com/images/icgl.svg" alt="googleLogo" />Sign in with Google</div>
                            <div style={{ backgroundColor: "#1877f2" }}><img className="allLogo" src="https://www.thehindu.com/theme/images/th-online/logo.png" alt="fbLogo" />Sign in with Facebook</div>
                            <div style={{ backgroundColor: "#000000" }}><img className="allLogo" src="https://images.livemint.com/sso/appleid_iconlogo.png" alt="appleLogo" />Sign in with Apple</div>
                        </div>
                        <div className="div4"><div></div><span>OR</span><div></div></div>
                        <div>
                            <div className="number">Email or Mobile Number<span>*</span></div>
                            <input onChange={(e) => { handleChange(e) }} className="input_div" type="text" placeholder="" />
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <button onClick={handleSubmit} className={check ? "button goAhead" : "button wait"}>Continue</button>

                            <div style={{ marginTop: "60px", lineHeight: "4px" }}>
                                <p>Powered by</p>
                                <img src="https://images.livemint.com/img/static/ht-digital-logo.svg" alt="logo2" />
                                <p>One network. One account</p>
                                <img src="https://images.livemint.com/dev/LHNewFooterLogoDesk.svg" alt="logo3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export { Login }