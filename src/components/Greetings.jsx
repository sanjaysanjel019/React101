

const Greetings = () => {
    const name = "John";
  return (
    <div>
        <h1>Hello {name}</h1>
        <p>Today is {new Date().toLocaleDateString()}</p>
    </div>
  )
}

export default Greetings