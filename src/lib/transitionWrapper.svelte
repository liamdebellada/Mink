<script>
    import { fly } from 'svelte/transition';
</script>

<div class="test"
    in:fly="{{ x: 50, duration: 250, delay: 300 }}"
    out:fly="{{ x: -50, duration: 250 }}" 
    >
    <slot/>
</div>

<style>
    .test {
        position: fixed;
        width: 100%;
        height: 100%;
    }
</style>