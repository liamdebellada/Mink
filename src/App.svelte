<script lang="ts">
	import Router from 'svelte-spa-router';
	import Index from './routes/index.svelte';
	import Home from './routes/home.svelte';
	import Play from './routes/play.svelte';
	import Setup from './routes/setup.svelte';
	import GameOver from './routes/gameover.svelte'
</script>
<Router routes={{
	'/' : Index,
	'/setup' : Setup,
	'/home' : Home,
	'/play' : Play,
	'/gameover/:score' : GameOver
}}/>
   