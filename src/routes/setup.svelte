<script lang="typescript">
    import TransitionWrapper from '../lib/transitionWrapper.svelte'
    import BackButton from '../lib/backButton.svelte'
    import FormRow from '../lib/formRow.svelte'
    import AccessibilityOptions from '../lib/accessibilityOptions.svelte'
    import PrimaryButton from '$lib/primaryButton.svelte'

    const handleSetup = (data) => {
        const forminfo: FormData  = new FormData(data.target)
        console.log(Object.fromEntries(forminfo.entries()))
    }
</script>

<TransitionWrapper>
    <div class="parent">
        <div class="formHeader">
            <BackButton/>
            <p class="headerText">Setup</p>
        </div>
        <div class="formBody parent">
            <form id="setupForm" on:submit|preventDefault={handleSetup}>
                <FormRow options={{
                    label: "Child's name",
                    placeHolder: 'Enter name',
                    i: 'name'
                }}/>
                <FormRow options={{
                    label: "Child's age",
                    placeHolder: 'Enter age',
                    i: 'age'
                }}/>
                <FormRow options={{
                    label: "Difficulty",
                    placeHolder: '1-3',
                    i: 'difficulty'
                }}/>
                <div class="accessList">Accessibility</div>
                <AccessibilityOptions options={{
                    label: 'Colour blindness',
                    i: 'cb'
                }}/>
                <AccessibilityOptions options={{
                    label: 'Hearing issues',
                    i: 'hi'
                }}/>
                <AccessibilityOptions options={{
                    label: 'Low vision',
                    i: 'lv'
                }}/>

            </form>
            <div class="bottomArea">
                <PrimaryButton form="setupForm" message="Finish"/>
            </div>
        </div>
    </div>
</TransitionWrapper>

<style>
    .parent {
        width: 100%;
        height: 100%;
    }

    .formHeader {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 0.8rem;
        padding: 1rem;
        padding-top: 4vh;
    }

    .headerText {
        font-size: 1.2rem;
    }

    .accessList {
        padding: 1rem;
        padding-bottom: 0.5rem;
    }

    .formBody {
        display: grid;
        grid-template-rows: 1fr 0.6fr;
        height: 100%;

    }
    .bottomArea {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
    }

</style>