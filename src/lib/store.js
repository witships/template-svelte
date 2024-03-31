import { writable } from 'svelte/store'; // 読み書き可の場合、witableが必要

export const isLogin = writable(false);
