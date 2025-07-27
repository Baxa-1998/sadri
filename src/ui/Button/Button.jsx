import './button.scss'

export const Button = ({children, className}) => {
  return (
    <div className={`button ${className}`}>{children}</div>
  )
}
