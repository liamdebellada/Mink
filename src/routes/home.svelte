<script lang="typescript">
    import TransitionWrapper from '../lib/transitionWrapper.svelte'
    import DashedSelector from '../lib/dashedSelector.svelte'
    import PrimaryButton from '../lib/primaryButton.svelte'

    // let test = new Audio('/boing.wav')

    const handleSound = () => {
        new Audio('/boing.wav').play()
    }

    let activeUserData = {};

    import {onMount} from 'svelte'

    import {userStore} from '../stores/user'
    import { Plugins } from '@capacitor/core';
    const { Storage } = Plugins;

    onMount(async () => {
        const { keys } = await Storage.keys()
        userStore.subscribe(async (activeUser) => {
             if (activeUser) {
                const {value} = await Storage.get({key: activeUser})
                activeUserData = JSON.parse(value);
            } else {
                userStore.set(keys[0])
            }
        })
    })

    interface option {
        icon: string,
        route: string,
        color: string
    }

    let options: Array<option> = [
        {
            icon: "schedule",
            route: "/history",
            color: 'E1D6FF'
        },
        {
            icon: "person_outline",
            route: "/me",
            color: 'FEF3D5'
        },
        {
            icon: "groups",
            route: "/multi",
            color: 'F8E9F1'
        },
        {
            icon: "settings",
            route: "/settings",
            color: 'CEEDDC'
        }
    ]

</script>

<TransitionWrapper>
    <div class="parent">
        <div class="header">
            <DashedSelector/>
        </div>
        <div class="userContent">
            <p class="helloName">Hi {activeUserData['name']}</p>
            <div on:click={handleSound} class="hsContainer">
                <p>High Score</p>
                <p>{activeUserData['recentGames'] ? activeUserData['recentGames'].sort((x,y) => parseInt(y.score) - parseInt(x.score))[0].score : 0}</p>
            </div>
        </div>
        <div class="optionContent">
            <div class="optionList">
                {#each options as option}
                    <div style="background: #{option['color']}" class="option material-icons">
                        {option['icon']}
                    </div>
                {/each}
            </div>
        </div>
        <div class="scoresContent">
            <p class="rcTitle">Recent games</p>
            <div class="hScroll">
                {#if activeUserData['recentGames']}
                    {#each activeUserData['recentGames'] as hi}
                        <div class="hItem">
                            <div class="hHeader">
                                <p class="timeIcon material-icons">schedule</p>
                                <p class="hDate">{hi['date'].split("T")[0]}</p>
                            </div>
                            <div class="hBody">
                                {hi['score']}
                            </div>
                        </div>
                    {/each}
                {:else}
                    <div class="getStarted">Tap play to get started!</div>
                {/if}
            </div>
        </div>
        <div class="buttonContent">
            <PrimaryButton message="Play" to="/play/{activeUserData['difficulty']}"/>
        </div>
    </div>
</TransitionWrapper>

<style>

    .getStarted {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: grey;
        font-size: 2rem;
        text-align: center;
    }

    .header {
        padding: 1rem;
    }

    .parent {
        display: grid;
        height: 100%;
        grid-template-rows: 0.1fr auto auto 0.8fr 0.2fr;
    }

    .userContent {
        padding: 0 1rem 0 1rem;
    }

    .optionContent {
        padding: 1rem 1rem 0 1rem;
    }

    .scoresContent {
        display: grid;
        max-height: 330px;
        grid-template-rows: 0.1fr auto;
    }

    .buttonContent {
        padding: 0 2rem 0 2rem;
    }

    .helloName {
        font-size: 1.4rem;
    }

    .hsContainer {
        margin-top: 1rem;
        background: #6E5FB4;
        border-radius: 1rem;
        min-height: 66px;
        max-height: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0.5rem;
        padding-left: 1rem;
        color: white;
    }

    .hsContainer :nth-child(1) {
        font-size: 0.8rem;
    }

    .hsContainer :nth-child(2) {
        font-size: 1.2rem;
    }

    .optionList {
        width: 100%;
        justify-content: space-between;
        display: flex;
        padding-top: 0;
        box-sizing: border-box;
    }

    .option {
        font-size: 1.8rem;
        height: 4rem;
        width: 4rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }


    .rcTitle {
        font-size: 1.1rem;
        margin: 1rem;
    }

    .hScroll {
        height: 100%;
        overflow-x: scroll;
        display: flex;
        flex-direction: row;
    }

    .hItem {
        margin-bottom: 1rem;
        background: white;
        box-shadow: 0px 8px 14px -3px rgba(0, 0, 0, 0.25);
        border-radius: 1rem;
        min-width: 11rem;
        margin-left: 1rem;
        display: grid;
        grid-template-rows: auto 1fr;
    }

    .hHeader {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 0.5rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }

    .hBody {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .hBody {
        font-size: 2rem;
    }

    .timeIcon {
        color: #6E5FB4;
        font-size: 2.5rem;
    }

    .hDate {
        font-size: 0.8rem;
        color: #808080;
    }

</style>