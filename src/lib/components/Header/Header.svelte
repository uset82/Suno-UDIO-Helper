<script>
	import Logo from './Logo.svelte';
	import Navigation from './Navigation.svelte';
</script>

<header class="header">
	<Logo />
	<Navigation />
</header>

<style>
	.header {
		padding: 1rem;
		background: var(--color-bg-code);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>