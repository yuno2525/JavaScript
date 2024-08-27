// ---Q1 変数
let nickname = 'ゆの'; //変数を定義 'ゆの'文字列を代入
let age ='29' //数値を代入

console.log("私のニックネームは" + nickname + "です。年齢は" + age +"歳です。");
// console.loで出力 +で連結

// ---Q2 配列
let languages = ["JavaScript", "PHP", "Ruby", "Python", "Go"];
// languages変数に配列を代入

let programming = (`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`);languages[0];
// インデックス0から始まる 配列 1と4を選択
// `${}`内入力(テンプレートリテラル)で出力

console.log(programming);

// ---Q3 オブジェクト
let user = { // user変数にキーとバリューを持たせる
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age); // 26を出力

// 配列との使い分け：同じジャンルでまとめるなら配列
// 配列：user[0]だと何の情報かわからないけど、user.ageなら血液型取得だと誰でもわかる

// ---Q4 配列・オブジェクト
let playerList = [ //配列[]の中に{}オブジェクトが入っている
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);
// インデックスは0から数える


// ---Q5 四則演算
let totalAge = playerList[0].age + playerList[1].age + playerList[2].age;
// トータル = 各リストの年齢を足す
let averageAge = totalAge / playerList.length;
// 平均 = トータル ÷ 変数名の後に.length(全体数)

console.log(averageAge); // アベレージエイジでの代入値を出力

// ---Q6 関数
function sayHello() { // 関数を作って定義
  console.log("Hello"); // ()の中にhelloを指定
}

sayHello(); // 実行 sayhelloと打つとコンソールにhelloと出力される

let sayWorld = function() { // 無名関数を変数sayWorldに代入
  console.log("World"); // ()の中にworldを指定
};

sayWorld(); // sayWorld を実行

//(let)変数宣言：データや値を一時保存するもの
//(function)関数宣言：一連処理をまとめたもの

// ---Q7 メソッド
user.birthday = '2000-09-27'; // Q3にbirthday プロパティを追加

user.sayHello = function() { // `sayHello` メソッドを追加 無名関数を代入
  console.log('Hello!'); // sauhelloにhelloが入る
};

user.sayHello(); // sayhelloメソッドを実行 コンソールに「Hello!」と表示されます


// ---Q8 引数
let calc = {}; // 空のオブジェクトを定義

//---x,yの和をコンソールに出力する add メソッドを定義し、7 になるように実行して下さい
calc.add = function(x, y) { // 和を計算するaddメソッドを定義
  console.log(x + y); // xとyの和をコンソールに出力 log=記録する
};

calc.add(3, 4); // // addを実行し、3+4=7 がコンソールに表示される

//---x,yの差をコンソールに出力する subtract メソッドを定義し10 になるように実行して下さい
calc.subtract = function(x, y) { //差を計算するメソッドを定義
  console.log(x - y); // x-yを引いた結果をコンソールに出力
};

calc.subtract(15, 5); // subtractを実行 15-5=10 がコンソールに表示される

//---x,yの積をコンソールに出力する multiply メソッドを定義し、49 になるように実行して下さい。
calc.multiply = function(x, y) { // 積を計算するメソッドを定義
  console.log(x * y); // xとyの積をコンソールに出力
};

calc.multiply(7, 7); // multiplyを実行 7*7=49がコンソールに表示される


//---x,yの商をコンソールに出力する divide メソッドを定義し、5 になるように実行して下さい。
calc.divide = function(x, y) { // 商を計算するメソッドを定義
  console.log(x / y); // xをyで割った結果をコンソールに出力
};

// divide メソッドを実行し、5 になるように x と y を設定
calc.divide(25, 5); // divideを実行 25/5=5 がコンソールに表示される


// ---Q9 返り値
function remainder(x, y) { // 関数を定義 引数xyを受け取る
  return x % y; //%でxをyで割った余りを計算し、結果を返す ※まだ実行はされない
}

let result = remainder(5, 3);
//ここから実行 5と3を引数に渡し実行 返り値2が呼び出しもと↑に返る resultに代入

console.log(`${5} を ${3} で割った余りは ${result} です。`);
// テンプレートリテラルを使用し、文字列をコンソールに出力

// ---Q10 スコープ

// 関数 foo の中で定義された変数 x は、関数 foo の中だけで使える変数です。
// 関数 foo の外では x を「参照」することができません。
// 関数 foo の外で console.log(x); を実行すると、「x is not defined」というエラーが出ます。


//---section6
//---Q1
let random = Math.random() * 10; // 0~9までの乱数の生成

let integer = Math.floor(random); // 小数点以下を切り捨てて整数に変換

console.log(integer); // 結果をコンソールに出力

// Math(標準組み込みオブジェクト) = 様々な数学的計算ツールボックス

//---Q2
setTimeout(function() { // 指定した時間が経過したら一度実行させる関数 定義
  console.log("Hello World!"); // コンソールに出力させる
}, 3000); // 3000 ミリ秒 (3秒) 後に実行させる

//---Q3
let num = 5; // 任意の数値を代入(例として5を代入)

if (num > 0) { // numが0より大きければ、trueで下が実行
  console.log("num is greater than 0"); // グレーター ザン 出力
} else if (num < 0) { // numが0より小さい場合、trueで下が実行
  console.log("num is less than 0"); // レス ザン 出力
} else { //上記がどちらも当てはまらなければ下記実行
  console.log("num is 0");
}

//エルス：上記が当てはまらない場合 上からエルスが実行される
//ifは当てはまったら処理終了

//---Q4
let numbers = []; // 空の配列を作成・定義

for (let i = 0; i < 100; i++) { // 0から99まで繰り返すループ
// iは0から始まりi<100が成り立つ(iが99まで) i++はループごとにiが1ずつ増えていく
  numbers.push(i); // numbers配列にiの値を追加 pushメソッドで配列末尾に値を追加している
}

console.log(numbers); // numbers配列をコンソールに出力

// pushメソッド：配列に新しい要素を追加する

//---Q5
let mixed = [4, '2', 5, '8', '9', 0, 1]; // mixedという配列を作成

for (let i = 0; i < mixed.length; i++) { // ループ処理 配列順番にアクセス iはインデックスを表す
  //iが0から始まり、mixed配列の長さ分繰り返す(index6まで) i++はループごとにiが1ずつ増えていく
  let item = mixed[i]; // mixedi要素を取り出し、item 変数に格納

  if (typeof item === 'number') { // typeof演算子でitemが数値型かどうかをチェック
    if (item % 2 === 0) { // 数値が偶数かどうかをチェック
      console.log('even'); // 偶数なら "even" イーブンをコンソールに出力
    } else { // 数値が奇数の場合
      console.log('odd'); // 奇数なら "odd" オドをコンソールに出力
    }
  } else { // 数値以外の要素の場合
    console.log('not number'); // 数値でない場合は "not number" をコンソールに出力
  }
}

