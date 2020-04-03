import App from './App.svelte';

const app = new App({
	target: document.querySelector('#SvelteApp'),
	props: {
		name: 'Pablo'
	}
});

export default app;