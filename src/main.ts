import App from './App.svelte';
import {Plugins} from '@capacitor/core';
Plugins.App.addListener('backButton', () => {})

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;