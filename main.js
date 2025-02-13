const inputFeedback = document.getElementById('feedback-content')
const inputName = document.getElementById('feedback-name')
const btnFeedback = document.getElementById('feedback-btn')
const collectionFeedback = document.getElementById('feedback-colection')

document.addEventListener('DOMContentLoaded', ()=>{
    btnFeedback.addEventListener('click', (e)=>{
        e.preventDefault()
        console.log(`Nome: ${inputName.value} Feedback: ${inputFeedback.value}`)
        

        collectionFeedback.innerHTML += `
            <li class="card-colection__card card-colection__card--feedback text--small">
                <h3 class="text">${inputName.value}</h3>
                <p class="text-small">${inputFeedback.value}</p>
            </li>
        `

        inputName.value = ''
        inputFeedback.value = ''
    })
})