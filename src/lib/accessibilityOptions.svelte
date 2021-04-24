<script language="ts">
    export let options = {};
</script>

<div class="aList">

    <label>
        <input name={options.i} class="cBox" type="checkbox"/>

        <span></span>
    </label>
    <div>{options.label}</div>

</div>

<style>
    .aList {
        display: flex;
        padding: 1rem;
        padding-bottom: 0;
    }

    .cBox {
        visibility: hidden;
        display: block;
        height: 0;
        width: 0;
        position: absolute;
        overflow: hidden;
    }

    span {
        transition: 0.2s ease-in-out;
        height: 1.5rem;
        width: 1.5rem;
        background: #F0F0F0;
        border-radius: 0.4rem;
        display: inline-block;
        margin-right: 0.5rem;
    }

    .cBox:checked + span {
        background: #6E5FB4;
    }
</style>