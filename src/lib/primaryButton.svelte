<script language="ts">
    import {goto} from '$app/navigation';
    export let message;
    export let to;
</script>

<button on:click={() => goto(to)} class="primaryButton">{message}</button>

<style>
.primaryButton {
    transition: 1s ease-in;
    background: #6E5FB4;
    color: white;
    border: none;
    width: 100%;
    border-radius: 1.6rem;
    font-size: 1.2rem;
    padding: 0.7rem 0 0.7rem 0;
}
</style>