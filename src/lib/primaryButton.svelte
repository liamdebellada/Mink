<script language="ts">
    export let message;
    console.log(message)
</script>

<button class="primaryButton">{message}</button>

<style>
.primaryButton {
    background: #6E5FB4;
    color: white;
    border: none;
    width: 100%;
    border-radius: 1.6rem;
    font-size: 1.2rem;
    padding: 0.7rem 0 0.7rem 0;
}
</style>