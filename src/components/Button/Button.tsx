import './Button.scss'

interface ButtonProps {
    onClick: () => void
    label: string
    color: 'red' | 'green' | 'white' | 'blue'
    isDisabled?: boolean
}

export const Button = ({onClick, label, color, isDisabled}: ButtonProps) => {
    return (
        <button onClick={onClick} className={`button--${color} button`} disabled={isDisabled}>
            {label}
        </button>
    )
}