
export class UI {
    showQuestion(text) {
        const questionTitle =document.getElementById("question")
        questionTitle.innerText = text
    }

    showChoices(choices,callback){
        const choicesContainer = document.getElementById("choices")
        choicesContainer.innerHTML = ""
        for (let i=0; i<choices.length; i++){
            const button = document.createElement("button")
            button.innerText = choices[i]
            button.className = "button"
            button.addEventListener('click' , ()=> callback(choices[i]))
            choicesContainer.append(button)
        }

    }
    showScore(score){
        const quizEndHTML =
        `<h2>Tu opinion a sido enviada<h2>
        <button class="button return" onclick="window.location.href='/'">Regresar al inicio</button>`
        const element = document.getElementById("quiz")
        element.innerHTML = quizEndHTML
        
    }

    showProgress(currentIndex, total){
        const element = document.getElementById('progress')
        element.innerHTML = `Question ${currentIndex} of ${total}`
    }
}