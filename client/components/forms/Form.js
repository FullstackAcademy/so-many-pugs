import React from 'react'

const Form = ({
  children,
  onSubmit = () => {},
  ...rest
}) => (
  <form onSubmit={onSubmit} {...rest}>
    {children}
  </form>
)

export default Form
