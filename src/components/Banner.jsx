import styles from "../Noah.module.css"
const Banner = () => {
  let myName = "Noah"
  let myStyle = {color:'red',backgroundColor:"purple"}
  return (
    <div>
        <h1 style={myStyle}>Study to become a global talent</h1>
        <h2 className="bg-warning">Hello {myName}</h2>
        <h3 className={styles.banner}>{Math.random()}</h3>
    </div>
  )
}

export default Banner

// interpolation {}