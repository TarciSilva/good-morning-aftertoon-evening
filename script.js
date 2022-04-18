
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
      msg.innerHTML = `Now it's ${hora} o'clock.`
      if (hora >= 0 && hora < 12) {
      //Good morning!
        img.src = 'assets/images/manha.png'
        document.body.style.background = '#e2cd9f'
      } else if (hora >= 12 && hora <= 18) {
        //Good afternoon!
        img.src = 'assets/images/tarde.png'
        document.body.style.background = '#b9846f'
      } else {
        //Good evening!
        img.src = 'assets/images/noite.png'
        document.body.style.background = '#515154'
      }
    }