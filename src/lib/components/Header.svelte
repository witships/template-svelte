<script>
	import { goto } from '$app/navigation';
	import { isLogin } from '$lib/store';

	function logout() {
		$isLogin = false;
		goto('/');
	}
</script>

<header>
	<a href="/" class="title">たいとる</a>
	<nav class="ms-auto">
		<a href="/about">Profile</a>
	</nav>

	<button on:click={logout} class="ms-1">ログアウト</button>
</header>

<style lang="scss">
	header {
		padding: 0.5rem;
		background-color: var(--main-color);
		display: flex;
		align-items: center;
		.title {
			font-size: x-large;
			color: white;
		}
		.ms-auto {
			margin-left: auto;
		}
		.ms-1 {
			margin-left: 0.5rem;
		}
	}
</style>
