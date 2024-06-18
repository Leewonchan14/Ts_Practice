import './App.css'

function App() {
  const number = document.getElementById("number");
  const increaseButton = document.getElementById("increase");
  const decreaseButton = document.getElementById("decrease");
  increaseButton!.onclick = () => {
    const current = parseInt(number!.innerText, 10)
    number!.innerText = "" + (current + 1)
  }

  decreaseButton!.onclick = () => {
    const current = parseInt(number!.innerText, 10)
    number!.innerText = "" + (current - 1)
  }

  return (
    <>
      <h2 id={"number"}>0</h2>
      <div>
        <button id={"increase"}>+1</button>
        <button id={"decrease"}>-1</button>
      </div>
    </>
  )
}

export default App
