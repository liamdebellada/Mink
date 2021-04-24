<script language="ts">
    export let options = {};
</script>

<div class="formRowContainer">
    <div class="inputRowText" for="inputRow">{options.label}</div>
    <input name="{options.i}" placeholder="{options.placeHolder}" class="inputRow"/>
</div>

<style>
    .formRowContainer {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        padding-bottom: 0;
    }

    .inputRow {
        border: none;
        background: #F0F0F0;
        border-radius: 1.2rem;
        height: 5vh;
        max-height: 45px;
        padding-left: 2rem;
    }

    .inputRowText {
        margin-bottom: 0.5rem;
    }
</style>