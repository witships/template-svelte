<script>
	import { isLogin } from '$lib/store';
	import { PUBLIC_ID, PUBLIC_PW } from '$env/static/public';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	let input_id = '';
	let input_pw = '';
	let error_mes = false;

	function login() {
		if (input_id == PUBLIC_ID && input_pw == PUBLIC_PW) {
			reset;
			$isLogin = true;
		} else {
			error_mes = true;
		}
	}

	function reset() {
		input_id = '';
		input_pw = '';
		error_mes = false;
	}

	onMount(async () => {
		goto('/');
	});
</script>

<div class="wrap">
	<!-- <form method="GET"> -->
	<div class="form">
		<div class="grid">
			<label for="id">ログインID</label>
			<input type="text" name="id" id="id" bind:value={input_id} />
			<label for="pw">パスワード</label>
			<input type="password" name="pw" id="pw" bind:value={input_pw} />
		</div>
		{#if error_mes}
			<div class="errmes">ログインに失敗しました<button on:click={reset}>&times;</button></div>
		{/if}
		<button on:click={login} class="login">ログイン</button>
	</div>
	<!-- </form> -->
</div>

<style lang="scss">
	.wrap {
		background-color: black;
		height: 100vh;
		overflow: hidden;
		display: flex;
	}
	.form {
		background-color: white;
		max-width: 500px;
		margin: auto;
		padding: 1rem;
		.grid {
			display: grid;
			grid-template-columns: auto 1fr;
			gap: 1rem;
		}
		label {
			margin: auto;
		}
		input {
			font-size: large;
			padding: 0.5rem;
		}
	}
	.errmes {
		color: red;
		text-align: center;
		margin-top: 1rem;
		button {
			margin-left: 0.2rem;
			padding: 0.2rem;
			border: none;
			background-color: darkgray;
			border-radius: 1rem;
			color: white;
			font-size: large;
			font-weight: bold;
		}
	}
	.login {
		margin-top: 1rem;
		width: 100%;
		font-size: large;
	}
</style>
