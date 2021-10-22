export const Button = (props) => {
  const {color, children} = props
  
  return (
    <button style={{
      padding: "1em",
      background: color
    }}>
      {children}
    </button>
  )
}
