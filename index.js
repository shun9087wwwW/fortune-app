// HTML要素を取得する
const button = document.querySelector("button");
const result = document.getElementById("result");

// ボタンが押されたらおみくじの結果を表示させる関数
function startGame() {
  button.addEventListener("click", () => {
    const min = 5;
    const max = 10;

    let number = Math.floor(Math.random() * (max + 1 - min)) + min;

    switch (number) {
      case 5:
        result.innerText = "大吉!";
        break;
      case 6:
        result.innerText = "吉";
        break;
      case 7:
        result.innerText = "中吉";
        break;
      case 8:
        result.innerText = "小吉";
        break;
      case 9:
        result.innerText = "末吉";
        break;
      case 10:
        result.innerText = "凶💀";
        break;
      default:
        break;
    }
  });
}

// 関数の実行
startGame();
