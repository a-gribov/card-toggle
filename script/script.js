document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".card__toggle")
  const contentWrapper = document.querySelector(".card__content-wrapper")
  const content = document.querySelector(".card__content")

  toggleBtn.addEventListener("click", () => {
    if (contentWrapper.classList.contains("expanded")) {
      // Закрытие текста
      contentWrapper.style.maxHeight = "120px" // Ограничиваем 5 строками
      contentWrapper.classList.remove("expanded")
    } else {
      // Раскрытие текста
      contentWrapper.style.maxHeight = content.scrollHeight + "px" // Полный текст
      contentWrapper.classList.add("expanded")
    }
  })
})
