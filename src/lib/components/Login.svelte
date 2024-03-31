<script>
	import { isLogin } from '$lib/store';
	let input_id = '';
	let input_pw = '';

	function login() {
		$isLogin = true;
	}
</script>

<div>ログインフォーム</div>
<div>
	<form method="GET">
		<div>
			<label for="id">ログインID</label>
			<input type="text" name="id" id="id" bind:value={input_id} />
		</div>
		<div>
			<label for="pw">パスワード</label>
			<input type="password" name="pw" id="pw" />
		</div>
		<div>
			<button on:click={login}>ログイン</button>
		</div>
	</form>
</div>
