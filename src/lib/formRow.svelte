<script language="ts">
    export let options = {};
    let error = '';
    $: if (options.errors) {
        var currentError = options.errors.filter((i) => i.path === options.i);
        if (currentError.length > 0) {
            error = options.errors.filter((i) => i.path === options.i)[0].message
        } else {
            error = ''
        }
    }
</script>

<div class="formRowContainer">
    <div class="labelRow">
        <div class="inputRowText" for="inputRow">{options.label}</div>
        {#if options.errors}
            <div class="errorText">{error}</div>
        {/if}
    </div>
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
        min-height: 1.9rem;
        max-height: 45px;
        padding-left: 2rem;
    }

    .inputRowText {
        margin-bottom: 0.5rem;
    }

    .labelRow {
        display: flex;
        justify-content: space-between;
    }

    .errorText {
        color: red;
    }
</style>