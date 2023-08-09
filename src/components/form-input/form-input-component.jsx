import React from 'react'
import "./form-input-style.scss";
function Forminputcomponent({label, ...otherproperties}) {
  return (
    <div className='group' >
        {
            <label className={`${otherproperties.value.length ? 'shrink': 'null'} form-input-label`}>{label}</label>
        }
    <input className='form-input'
    {...otherproperties}/></div>
  )
}

export default Forminputcomponent