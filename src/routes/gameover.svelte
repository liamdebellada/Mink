<script>

    import {userStore} from '../stores/user'
    import { Plugins } from '@capacitor/core';
    import { onMount } from 'svelte';
    import {push} from 'svelte-spa-router';
    const { Storage } = Plugins;

    export let params = {};
    console.log(params)

    onMount(async () => {
        if ($userStore) { 
            var {value} = await Storage.get({key: $userStore})
            value = JSON.parse(value)
            if (value.recentGames) {
                value.recentGames.push({date: new Date(), score: params.score})
            } else {
                value.recentGames = [{date: new Date(), score: params.score}]
            }
            await Storage.set({key: $userStore, value: JSON.stringify(value)})
        }
    })
</script>

<p>game over! score: {params.score}</p>
<button on:click={() => push('/home')}>home 4 bruno</button>