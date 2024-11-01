import ButtonSvg from "../assets/svg/ButtonSvg"

const Button = ({className, href, onClick, children, px, white}) => {

const classes =`button relative infline-flex items-center justify-center h-11 transition-colors text-color-1 ${px || 'px-7'} ${white ? 'text-n-8' : 'text-n-1'} ${className || ''}`;

const spanClass = 'relative z-10 p-8   '

const renderButton = () => (
    <button className={classes} onClick={onClick}>
        <span className={spanClass } >{children}</span>
        {ButtonSvg(white)}
    </button>
)
const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClass}>{children}</span>
      {ButtonSvg(white)}
    </a>
)

return href 
 ? renderLink()
 : renderButton();
}

export default Button
