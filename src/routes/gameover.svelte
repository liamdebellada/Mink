<script>

    import {userStore} from '../stores/user'
    import { Plugins } from '@capacitor/core';
    import { onMount } from 'svelte';
    import PrimaryButton from '../lib/primaryButton.svelte'
    import {push} from 'svelte-spa-router';
    import BackButton from '../lib/backButton.svelte';
    import TransitionWrapper from '../lib/transitionWrapper.svelte';
    const { Storage } = Plugins;

    export let params = {};

    let restartDiff = 0;

    onMount(async () => {
        if ($userStore) { 
            var {value} = await Storage.get({key: $userStore})
            value = JSON.parse(value)
            restartDiff = value.difficulty
            if (value.recentGames) {
                value.recentGames.push({date: new Date(), score: params.score})
            } else {
                value.recentGames = [{date: new Date(), score: params.score}]
            }
            await Storage.set({key: $userStore, value: JSON.stringify(value)})
        }
    })
</script>

<TransitionWrapper>
    <div class="parent">
        <div class="backContainer">
            <BackButton to="/home"/>
        </div>
        <div class="minkContainer">
            <img alt="minkZoom" src="/mz.svg"/>
            <h1 class="gameOverText">Score: {params.score}</h1>
        </div>
        <div class="buttonContainer">
            <PrimaryButton to="/play/{restartDiff}" message="restart"/>
        </div>
    </div>
</TransitionWrapper>

<style>
    .parent {
        display: flex;
        height: 100%;
        width: 100%;
        align-items: center;
        justify-content: center;
    }

    .gameOverText {
        font-size: 1.2rem;
        font-weight: 400;
        margin: 0;
        text-align: center;
    }

    .backContainer {
        position: absolute;
        height: auto;
        top: 0;
        left: 0;
        padding-left: 1rem;
        padding-top: 1.5rem;
    }

    .buttonContainer {
        margin: 1rem;
        height: auto;
        width: 90%;
        position: absolute;
        bottom: 2rem;
    }
</style>