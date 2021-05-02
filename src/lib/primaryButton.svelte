<script language="ts">
    import {push} from 'svelte-spa-router'
    export let message;
    export let to;
    export let formSelector;
</script>

<button form={formSelector ? formSelector : ""} on:click={() => push(to)} class="primaryButton">{message}</button>

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