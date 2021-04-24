<script language="ts">
    import {goto} from '$app/navigation';
</script>

<button class="back" on:click={() => goto('/')}>
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