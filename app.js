'use strict';
const memo = new Map(); // 連想配列Mapを使って計算結果を保存（メモ化）する
memo.set(0, 0); // keyには順番、valueには答えを格納する
memo.set(1, 1);
function fib(n) {
    if (memo.has(n)) { // 連想配列が、nをキーとした答えを持っていればその値をそのまま関数の値として返す
        return memo.get(n);
    }
    const value = fib(n-1) + fib(n-2); // そうでない場合は、再帰関数を計算して値を求め、それを連想配列に格納した後に返す
    memo.set(n, value);
    return value;
}

const length = 40;
for (let i = 0; i <=length; i++) {
    console.log(fib(i));    
}