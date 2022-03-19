document.addEventListener("DOMContentLoaded", () =>{
  const keyboard = document.querySelector('.keyboard')
  const screen = document.querySelector('#screen')
  const delete_word = document.querySelector('#delete')
  let content = ''

  keyboard.addEventListener("click", (e) =>{
    content += e.target.innerText
    screen.innerHTML = content
    })

  delete_word.addEventListener("click", () =>{
    let delete_character = content.length - 1
    content = content.slice(0,delete_character)
    screen.innerHTML = content
  })

  }
)