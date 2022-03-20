document.addEventListener("DOMContentLoaded", () =>{
  const keyboard = document.querySelector('.keyboard')
  const screen = document.querySelector('#screen')
  const position = document.querySelector('.position')
  const delete_word = document.querySelector('#delete')
  let content = ''
  let position_number = 0

  function alphabet(e){ return e.target.innerText.match(/[a-z]/i) && e.target.innerText.length == 1? true:false }

  keyboard.addEventListener("click", (e) => {
    if( alphabet(e) ){    
      content += e.target.innerText
      screen.innerHTML = content
    }
    })

  delete_word.addEventListener("click", () => {
    let max_scentence_index = content.length - 1

    if ( Math.abs(position_number) <= max_scentence_index ){
      content = content.slice(0,max_scentence_index + position_number) + content.slice(max_scentence_index + position_number + 1, max_scentence_index + 1)
      screen.innerHTML = content
    }
  
  })

  position.addEventListener("click", (e) => {
    let content_length = content.length
    let end_of_left = Math.abs(position_number)
    let end_of_right = position_number + content_length

    if (e.target.innerText == "Left" && end_of_left < content_length -1){
      position_number -= 1
    } else if(e.target.innerText == "Right" & end_of_right < content_length){
      position_number += 1
    }
  })

  }
)