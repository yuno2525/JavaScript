console.log('Hello World!');

let text = 'JavaScriptの練習'; //「let 変数名 = 値;」変数定義できる
console.log(text);

text = 'JavaScriptをマスターした';// 再代入(上書き)はlet不要
console.log(text);

// 処理① 1つにまとめる、編集が楽
let longText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
console.log(longText);
console.log(longText);
console.log(longText);

// 処理② いまいち
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);

let age = 23;
console.log(age);

let testText;
console.log(testText); // => undefined 何も代入されてない場合、この単語が代入される

let again = '定義しました';
again = '再代入はできます';

let again = '再定義します'; //再代入はできるけど、再定義はできない(let)
//再定義エラー文：Uncaught SyntaxError: Identifier 'again' has already been declared

//--let以外の変数定義--
const constant = 'これは定数です'; //変数じゃない定数 再代入ができない
constant = '再代入できません。';
//再代入してるよエラー：Uncaught TypeError: Assignment to constant variable.というエラーが出る

console.log('elephant'); // => elephant が出力される
console.log(elephant); // => Uncaught ReferenceError: elephant is not defined というエラーが出力される

let name = 'ジョニー';
let greet = '私は' + name + '!';
console.log(greet);

