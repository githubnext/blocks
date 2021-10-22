export const Button = (props) => {
  const {color, children} = props
  
  return (
    <button style={{
      padding: "4em",
      background: color
    }}>
      {children}
    </button>
  )
}
