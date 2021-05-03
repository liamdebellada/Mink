<script>
    import TransitionWrapper from '../lib/transitionWrapper.svelte'
    import {push} from 'svelte-spa-router'

    export let params = {};

    class game {
        constructor(config, difficulty) {
            this.config = config;
            this.difficulty = difficulty;
            this.currentQuestion = null;
            this.timerInstance = null;
        }

        isValid(expression) {
            let result = eval(expression)
            let valid = parseInt(result) === result && parseInt(result) > 0
            return {"valid" : valid, "result" : result}
        }

        generateNumber() {
            return Math.floor(Math.random() * 12) + 1
        }

        tick() {
            if (time === 0) {
                clearInterval(gameInstance.timerInstance)
                time = gameInstance.config.timeLimits[gameInstance.difficulty] / 1000
                round ++;
                question = gameInstance.generateQuestion()
                return
            }
            time = time - 1
        }

        startTimer() {
            this.timerInstance = setInterval(this.tick, 1000)
        }

        generateQuestion() {
            let x = this.generateNumber()
            let y = this.generateNumber()
            let o = this.config.operators[Math.floor(Math.random() * this.config.operators.length -1) + 1]

            let valid = this.isValid(`${x} ${o} ${y}`)

            if (valid.valid) {
                this.currentQuestion = valid.result;
                if (this.difficulty != 0) {
                    this.startTimer()
                }
                return `${x} ${o} ${y}`
            } else {
                return this.generateQuestion()
            }
        }

        handleCorrect() {
            clearInterval(gameInstance.timerInstance)
            time = gameInstance.config.timeLimits[gameInstance.difficulty] / 1000
            round ++;
            score ++;
            question = gameInstance.generateQuestion()
            userAnswer = '';
        }
    }

    let round = 1;
    let gameInstance = new game({
        timeLimits : [-1, 20000, 10000],
        operators: ["+", "-", "/", "*"],
        maxRound: 10
    }, parseInt(params.difficulty))


    let question = gameInstance.generateQuestion()
    let time = gameInstance.config.timeLimits[gameInstance.difficulty] / 1000;
    let score = 0;
    let userAnswer = '';

    $: if (round > gameInstance.config.maxRound) {
        push(`/gameover/${score}`)
    }

    const handleKeyPad = (key) => {
        if (key != "del") {
            if (userAnswer.length < 3) {
                userAnswer += key;
                if (parseInt(userAnswer) == gameInstance.currentQuestion) {
                    gameInstance.handleCorrect()
                }
            }
        } else {
            userAnswer = userAnswer.slice(0, -1)
        }
    }


</script>

<TransitionWrapper>
    <div class="gameInfoContainer">
        <p>Question {round}</p>
        <p>Score: {score}</p>
    </div>
    <div class="gameContainer">
        <p class="questionText">{question}</p>
        <div>
            {#if gameInstance.difficulty != 0}
                <div class="timeContainer">
                    <div class="progressBarContainer">
                        <div style="width: {100 * time / (gameInstance.config.timeLimits[gameInstance.difficulty] / 1000)}%" class="progressBar"/>
                    </div>
                    <p>{time}s</p>
                </div>
            {/if}
        </div>
        <div class="displayInput">
            <div class="inputContainer">
                {userAnswer}
            </div>
        </div>
        <div class="keypadContainer">
            {#each [1,2,3,4,5,6,7,8,9,0,"del"] as key}
                <div on:click={() => handleKeyPad(key)} class="keypadItem">
                    {key}
                </div>
            {/each}
        </div>
    </div>
</TransitionWrapper>


<style>
    .gameInfoContainer {
        margin-top: 3rem;
        display:flex;
        flex-direction: column;
        align-items: center;
    }
    .gameInfoContainer :nth-child(1) {
        font-size: 2rem;
    }

    .gameInfoContainer :nth-child(2) {
        font-size: 1.4rem;
    }

    .gameContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 80%;
    }

    .questionText {
        margin-bottom: 5vh;
        font-size: 1.8rem;
        font-weight: 700;
    }

    .progressBarContainer {
        width: 85vw;
        height: 0.5rem;
        border-radius: 12px;
        background: #F0F0F0;
        overflow-x: hidden;
    }

    .progressBar {
        transition: all 1s linear;
        height: 100%;
        width: 3%;
        background: #6E5FB4;
    }

    .timeContainer {
        width: 100%;
        display: flex;
        font-size: 0.8rem;
        color: #838383;
        font-weight: 700;
        align-items: center;
    }
    .timeContainer p {
        margin-left: 0.2rem;
    }

    .keypadContainer {
        padding: 1rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        height: 50%;
        width: 100%;
    }

    .keypadContainer :nth-child(10) {
        grid-column: 2;
    }

    .keypadItem {
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        max-height: 5rem;
        min-height: 3rem;
        margin: 0.5rem;
        background: #6E5FB4;
        border-radius: 12px;
    }

    .displayInput {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 2rem;
        width: 100%;
        padding: 2rem;
    }

    .inputContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #F0F0F0;
        border-radius: 12px;
        width: 90vw;
        height: 2rem;
    }
</style>