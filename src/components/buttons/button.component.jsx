import React from 'react'
import "./button.style.scss";
const Button_type_class = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

function Button({childern, buttonType, ...otherproperties}) {
  return (
    <div>
        <button className={`button-container ${Button_type_class[buttonType]}`} {...otherproperties}>{childern}</button>
    </div>
  )
}

export default Button