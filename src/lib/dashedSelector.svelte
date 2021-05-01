<script lang="typescript">
    import {slide} from 'svelte/transition'
    import {onMount} from 'svelte'

    let users = [];

    onMount(() => {
        users = JSON.parse(localStorage.getItem('users'))
    })


    let show = false;
</script>

<div>

<button class="btnWrapper" on:click={() => show = show == true ? false : true}>
    <img class="icon" alt="users" src="/userSelector.svg"/>
</button>
{#if show}
    <div transition:slide class="absoluteSelectorList">
        {#each users as user} 
            <div>{user['name']}</div>
        {/each}
    </div>
{/if}
</div>
<style>
    .btnWrapper {
        background: none;
        border: none;
        padding: 0;
    }

    .icon {
        height: 1.2rem;
        width: 1.2rem;
    }

    .absoluteSelectorList {
        padding: 1rem;
        height: 100%;
        max-height: 16vh;
        width: 5rem;
        background: #6E5FB4;
        color: white;
        border-radius: 0 1.6rem 0 1.6rem;
        position: absolute;
        z-index: 999;
    }
</style>
