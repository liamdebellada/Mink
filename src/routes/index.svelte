<script language="ts">
    import PrimaryButton from '../lib/primaryButton.svelte';
    import TransitionWrapper from '../lib/transitionWrapper.svelte';
</script>   

<TransitionWrapper>
    <div class="container gridLayout">
        <div class="gridItem topItem">
            <img class="bottomImage" alt="minklogo" src="/MinkLogo.svg"/>
        </div>
        <div class="gridItem bottomArea flex">
            <div class="flex buttonLabel">
                <h1 class="wText">Welcome</h1>
                <p class="wSub">Please press start to setup mink and get learning!</p>
            </div>
            <div>
                <PrimaryButton to={"/setup"} message={"Start"}/>
            </div>
        </div>
    </div>
</TransitionWrapper>

<style>
.gridLayout {
    display: grid;
    grid-template-rows: 1fr 0.4fr;
    position: fixed;
    overflow: hidden;
}

.gridItem {
    grid-column: 1;
}

.bottomImage {
    align-self: flex-end;
    margin-bottom: 2rem;
}

.bottomArea {
    padding: 1rem;
    padding-top: 0;
    flex-direction: column;
    align-self: flex-end;
    margin-bottom: 1rem;
}

.topItem {
    display: flex;
    align-items: center;
    justify-content: center;
}

.wText {
    font-weight: 400;
}

.wSub {
    font-size: 0.9rem;
    margin-bottom: 0.4rem;
    color: #838383;
    text-align: center;
    width: 100%;
    max-width: 80%;
}

.buttonLabel {
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.buttonLabel h1 {
    margin-bottom: 0.2rem;
}
</style>