document.addEventListener("DOMContentLoaded", () =>{
  const keyboard = document.querySelector('.keyboard')
  const screen = document.querySelector('#screen')
  let content = ''

  keyboard.addEventListener("click", (e) =>{
    // console.log(e.target.innerText)
    // console.log(screen.innerHTML)
    content += e.target.innerText
    screen.innerHTML = content
    })

  }
)