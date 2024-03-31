# SvelteKitを利用したテンプレート

- ダミーログイン機能を実装
- シンプルなPWAを実装

## 必要な操作

### ログイン用のID/PWを用意

- .envファイルで、ログイン用IDとPWを用意する
- .envファイルはgit管理されないので、clone段階では存在しない。自分で用意する必要がある
- PJ直下に`.env`を用意

```bash
# .envファイル
PUBLIC_ID="hoge"
PUBLIC_PW="fuga"
```

### 準備

```bash
# ライブラリーのインストール
$ npm install
```

### 開発環境の起動

```bash
$ npm run dev
```

### 本番用のビルド

```bash
$ npm run build
```

### ビルドされた内容の確認

```bash
$ npm run preview
```
