<script language="ts">
    import {push} from 'svelte-spa-router'
    export let to = '/';
</script>

<button class="back" on:click={() => push(to)}>
    <img class="icon" alt="back" src="/back.svg"/>
</button>

<style>
    .back {
        background: none;
        border: none;
    }

    .icon {
        height: 1.2rem;
        width: 1.2rem;
    }
</style>