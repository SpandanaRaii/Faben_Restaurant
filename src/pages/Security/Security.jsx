import React from 'react'
import style from './Security.module.css'

const Security = () => {
  return (
    <div className={style.securityverification}>
      <h1>Security Verification</h1>
      <p>To protect your account security, we need to verify your identity. Please choose a way to verify.</p>
      <button className={style.verifyemail}>Verify through Email</button>
      <button className={style.goback}>Go back</button>
    </div>
  )
}

export default Security
