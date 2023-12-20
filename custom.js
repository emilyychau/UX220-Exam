// updating year copyright

class YearElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-fullyear", YearElement);

// Magic 8 Ball

class Magic8Ball extends HTMLElement{
    connectedCallback(){
        this.innerHTML = 
`
<button id="question">Ask</button>
<p id="answer"></p>
`
        this.button = document.querySelector("#question");
        this.button.addEventListener("click", ()=>{
            const answer = document.querySelector("#answer");
            const aAnswers=["yes", "definitely", "no"];
            const nAnswer = Math.floor(Math.random() * aAnswers.length);
            answer.innerHTML = aAnswers[nAnswer];
        })
    }
}
customElements.define("x-magic", Magic8Ball);