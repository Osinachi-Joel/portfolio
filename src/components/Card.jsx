import './card.css'

/**
 * Card component is a reusable component representing an article or card with optional click functionality.
 * @param {Object} props - The properties passed to the Card component.
 * @param {ReactNode} props.children - The content within the Card component.
 * @param {string} props.className - Additional class names to be applied to the Card component.
 * @param {function} props.onClick - The function to be executed on click of the Card component.
 * @returns {JSX.Element} The JSX representation of the Card component.
 */

const Card = ({children, className, onClick}) => {
  return (
    <article className={`card ${className}`} onClick={onClick}>
        {children}
    </article>
  )
}

export default Card