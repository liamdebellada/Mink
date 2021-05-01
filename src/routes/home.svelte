<script lang="typescript">
    import TransitionWrapper from '../lib/transitionWrapper.svelte'
    import DashedSelector from '../lib/dashedSelector.svelte'
</script>

<TransitionWrapper>
    <div class="formHeader">
        <DashedSelector/>
        <p></p>
    </div>
    <div class="homeContent">
        <p>Hi Jackson</p>
    </div>
</TransitionWrapper>

<style>
    .homeContent {
        padding: 1rem;
        padding-top: 0;
    }

    .formHeader {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 0.8rem;
        padding: 1rem;
        padding-top: 4vh;
    }
</style>