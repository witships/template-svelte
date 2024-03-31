<script>
	import '$lib/style.scss';
	import Login from '$lib/components/Login.svelte';
	import { isLogin } from '$lib/store';
	import Header from '$lib/components/Header.svelte';
</script>

{#if $isLogin}
	<Header />
	<div class="pa-1">
		<slot />
	</div>
{:else}
	<Login />
{/if}
