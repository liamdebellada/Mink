<script lang="typescript">
    import TransitionWrapper from '../lib/transitionWrapper.svelte'
    import DashedSelector from '../lib/dashedSelector.svelte'
    import PrimaryButton from '../lib/primaryButton.svelte'

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
            icon: "clock",
            route: "/history",
            color: 'E1D6FF'
        },
        {
            icon: "user",
            route: "/me",
            color: 'FEF3D5'
        },
        {
            icon: "multi",
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
    <div class="formHeader">
        <DashedSelector/>
        <p></p>
    </div>
    <div class="mainContent">
        <div class="homeContent">
            <p class="helloName">{activeUserData['name']}</p>
            <div class="hsContainer">
                <p>High Score</p>
                <p>{activeUserData['recentGames'] ? activeUserData['recentGames'].sort((x,y) => parseInt(y.score) - parseInt(x.score))[0].score : 0}</p>
            </div>
            <div class="optionList">
                {#each options as option}
                    <div style="background: #{option['color']}" class="option">
                        {option['icon']}
                    </div>
                {/each}
            </div>
        </div>
    </div>
    <div class="rcContainer">
        <p class="rcTitle">Recent games</p>
        <div class="hScroll">
            {#if activeUserData['recentGames']}
                {#each activeUserData['recentGames'] as hi}
                    <div class="hItem">
                        <div class="hHeader">
                            <p>clock</p>
                            <p class="hDate">{hi['date'].split("T")[0]}</p>
                        </div>
                        <div class="hBody">
                            {hi['score']}
                        </div>
                    </div>
                {/each}
            {/if}
        </div>
        <div class="bottomButton">
            <PrimaryButton message="Play" to="/play" />
        </div>
    </div>
</TransitionWrapper>

<style>
    .mainContent {
        padding: 1rem;
    }

    .homeContent {
        padding-top: 0;
        height: 100%;
    }

    .formHeader {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 0.8rem;
        padding: 1rem;
        padding-top: 4vh;
    }

    .helloName {
        font-size: 1.4rem;
    }

    .hsContainer {
        margin-top: 1rem;
        background: #6E5FB4;
        border-radius: 1rem;
        height: 10vh;
        min-height: 66px;
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
        margin-top: 1rem;
        display: flex;
    }

    .option {
        height: 4rem;
        width: 4rem;
        border-radius: 50%;
        background: red;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .rcContainer {
        height: 100%;
        width: 100%;
        overflow-x: auto;
    }

    .rcTitle {
        font-size: 1.1rem;
        margin: 1rem;
    }

    .hScroll {
        padding-bottom: 1rem;
        overflow-x: scroll;
        height: 30vh;
        display: flex;
        flex-direction: row;
    }

    .hItem {
        background: white;
        box-shadow: 0px 8px 14px -3px rgba(0, 0, 0, 0.25);
        border-radius: 1rem;
        min-width: 10rem;
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
        font-size: 1.6rem;
    }

    .hDate {
        font-size: 0.8rem;
        color: #808080;
    }

    .bottomButton {
        position: absolute;
        width: 100%;
        bottom: 0;
        padding: 1rem;
        box-sizing: border-box;
    }
</style>