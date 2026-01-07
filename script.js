function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adcionar imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se não, adcionar imagem dark
    img.setAttribute("src", "./assets/avatar.png")

    if (html.classList.contains("light")) {
      img.setAttribute(
        "alt",
        "Foto de Mayk Brinto, sorrindo, com camisa preta e jaqueta preta, usando óculos de sol com o fundo azul e roxo."
      )
    } else {
      img.setAttribute(
        "alt",
        "Foto de Mayk Brinto, sorrindo, com camisa preta e jaqueta preta, usando óculos de grau com o fundo azul e roxo."
      )
    }
  }
}
