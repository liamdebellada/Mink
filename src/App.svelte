<script lang="ts">
	import Router, {push, location} from 'svelte-spa-router';
	import Index from './routes/index.svelte';
	import Home from './routes/home.svelte';
	import Play from './routes/play.svelte';
	import Setup from './routes/setup.svelte';
	import GameOver from './routes/gameover.svelte'

	import { Plugins } from '@capacitor/core';
	const { Storage } = Plugins;

	const unsetRoutes = ['/', '/setup']

	location.subscribe(async (route) => {
		const { keys } = await Storage.keys();
		if (!unsetRoutes.includes(route) && keys.length < 1) {
			push('/')
		}

		if (route === "/" && keys.length > 0) {
			push('/home')
		}
	})

</script>
<Router routes={{
	'/' : Index,
	'/setup' : Setup,
	'/home' : Home,
	'/play' : Play,
	'/gameover/:score' : GameOver
}}/>
   