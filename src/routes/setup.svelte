<script lang="typescript">
    import TransitionWrapper from '../lib/transitionWrapper.svelte'
    import BackButton from '../lib/backButton.svelte'
    import FormRow from '../lib/formRow.svelte'
    import AccessibilityOptions from '../lib/accessibilityOptions.svelte'
    import PrimaryButton from '../lib/primaryButton.svelte'

    import {push} from 'svelte-spa-router';

    import * as yup from 'yup';

    let schema = yup.object().shape({
        name: yup.string().required('Name cannot be empty.').strict(true).test('name', 'Name must only have letters', (str) => RegExp(/\d/).test(str) ? false : true),
        age: yup.number().required('Age cannot be empty.').positive().integer().min(1, 'You must be born to play.').max(10, 'You must be under 11 to play').typeError('Age must be a number'),
        difficulty: yup.number().min(1).max(3).required('Difficulty cannot be empty.').typeError('Difficulty must be a number'),
        cb: yup.string(),
        hi: yup.string(),
        lv: yup.string()
    });

    
    import { Plugins } from '@capacitor/core';
    const { Storage } = Plugins;

    let formErrors = [];

    const handleSetup = async (data) => {
        const forminfo: FormData  = new FormData(data.target)
        schema.validate(Object.fromEntries(forminfo.entries()), { abortEarly: false }).then(async (valid) => {
            await Storage.set({
                key: JSON.stringify(valid.name),
                value: JSON.stringify(valid)
            });
            push('/home')
        }).catch((err) => {
            formErrors = err.inner
        })
    }

</script>

<TransitionWrapper>
    <div class="parent">
        <div class="formHeader">
            <BackButton to="/"/>
            <p class="headerText">Setup</p>
        </div>
        <div class="formBody parent">
            <form id="setupForm" on:submit|preventDefault={handleSetup}>
                <FormRow options={{
                    label: "Child's name",
                    placeHolder: 'Enter name',
                    i: 'name',
                    errors: formErrors
                }}/>
                <FormRow options={{
                    label: "Child's age",
                    placeHolder: 'Enter age',
                    i: 'age',
                    errors: formErrors
                }}/>
                <FormRow options={{
                    label: "Difficulty",
                    placeHolder: '1-3',
                    i: 'difficulty',
                    errors: formErrors
                }}/>
                <div class="accessList">Accessibility</div>
                <AccessibilityOptions options={{
                    label: 'Colour blindness',
                    i: 'cb',
                    errors: formErrors
                }}/>
                <AccessibilityOptions options={{
                    label: 'Hearing issues',
                    i: 'hi',
                    errors: formErrors
                }}/>
                <AccessibilityOptions options={{
                    label: 'Low vision',
                    i: 'lv',
                    errors: formErrors
                }}/>

            </form>
            <div class="bottomArea">
                <PrimaryButton formSelector="setupForm" message="Finish"/>
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