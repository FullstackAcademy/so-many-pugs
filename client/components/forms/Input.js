import React from 'react'

const Input = ({
  label,
  name,
  type,
  onChange = () => {},
  ...rest
}) => (
  <div className='column'>
    <label htmlFor={name}>{label}</label>
    {
      type === 'textarea'
        ? <textarea name={name} onChange={onChange} {...rest} />
        : <input type={type} name={name} onChange={onChange} {...rest} />
    }
  </div>
)

export default Input
