<script language="ts">
    import {goto} from '$app/navigation';
    export let to = '/';
</script>

<button class="back" on:click={() => goto(to)}>
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