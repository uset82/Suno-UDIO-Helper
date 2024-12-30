<script>
	export let tag;
</script>

<div class="tag-item">
	<code>{tag.tag}</code>
	<p>{tag.description}</p>
</div>

<style>
	.tag-item {
		background: var(--color-bg-code);
		padding: 1rem;
		border-radius: 4px;
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	code {
		background: #fff;
		padding: 0.25rem 0.5rem;
		border-radius: 4px;
		font-family: monospace;
		color: var(--color-primary);
	}

	p {
		margin: 0;
		font-size: 0.9rem;
	}
</style>