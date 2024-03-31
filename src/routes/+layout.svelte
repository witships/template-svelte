<script>
	import { goto } from '$app/navigation';
	import Login from '$lib/components/Login.svelte';
	import { isLogin } from '$lib/store';
	import { PUBLIC_ID } from '$env/static/public';
	// import { TEST_ID } from '$env/static/private';

	function logout() {
		$isLogin = false;
		goto('/');
	}
</script>

<header>
	<nav>
		<a href="/">home??</a>
		<a href="/profiles">Profile</a>
	</nav>
	{$isLogin}:{PUBLIC_ID}
	{#if isLogin}
		<button on:click={logout}>ログアウト</button>
	{/if}
</header>

<!-- <slot /> -->
{#if $isLogin}
	<slot />
{:else}
	<Login />
{/if}
