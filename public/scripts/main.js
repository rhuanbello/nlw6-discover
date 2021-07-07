import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//Pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
    //adicionar a escuta em cada um dos botoes 
    button.addEventListener("click", handleClick)
})


const deleteButtons = document.querySelectorAll(".actions a.delete")

deleteButtons.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true){
    event.preventDefault()
    const text = check ? "Marcar como lida" : "Excluir"
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML= `${text} esta pergunta`
    modalDescription.innerHTML= check ? `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?` : "Tem certeza que deseja excluir esta pergunta?"
    modalButton.innerHTML= `Sim, ${text.toLowerCase()}`
    check? modalButton.classList.remove("red") : modalButton.classList.add("red")

    modal.open()
}