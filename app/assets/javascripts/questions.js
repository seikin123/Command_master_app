// 正解の答え
// let json_question = {
//   "key": "v",
//   "ctrl": true,
//   "meta": false,
//   "alt": false,
//   "shift": false
// }



// const answer_key = JSON.parse(Json);
const $startMessage = $('#start-message');

// 問題
let questions =  [{
  "id": "1",
  "category_id": "1",
  "question_value": "Vscodeのコピーする際のショートカットキー はなんですか",
  "answer": "c",
  // "metaKey": true,
  "score": 10
},
{
  "id": "2",
  "category_id": "1",
  "question_value": "Vscodeの全選択をする際のショートカットキー",
  "answer": "a",
  // "shiftKey": true,
  "score": 10
},
{
  "id": "3",
  "category_id": "1",
  "question_value": "Vscodeのペーストする際のショートカットキー",
  "answer": "v",
  "shiftKey": true,
  "score": 10
},
{
  "id": "4",
  "category_id": "1",
  "question_value": "Vscodeの一つ前に戻す処理際のショートカットキー",
  "answer": "z",
  "shiftKey": true,
  "score": 10
},
{
  "id": "5",
  "category_id": "1",
  "question_value": "Vscodeの選択範囲を切り取りのショートカットキー",
  "answer": "x",
  "shiftKey": true,
  "score": 10
},
{
  "id": "6",
  "category_id": "1",
  "question_value": "Vscodeの指定した行にジャンプのショートカットキー",
  "answer": "g",
  "shiftKey": true,
  "score": 10
},
{
  "id": "7",
  "category_id": "1",
  "question_value": "Vscodeの検索する際のショートカットキー",
  "answer": "f",
  "shiftKey": true,
  "score": 10
},
]

let start_game = false;
let i = 0;
let ans = 0;
let start_time = 0; // <<--ゲームがスタートしたかを判断する変数


$(document).ready(function () {
  // console.log("document.ready")

  function changeText(){
    $("#question").text(questions[i].question_value);
    $("#ans").text(ans);
  };
  function addScore(score){
    ans += score;
  };
  function test(test){
    console.log()
  };
  function finishAnswer(){
    $("#question").text('');
    $("#ans").text('');
    $(".finish").show();
  };

  changeText();
  document.addEventListener("keydown", e => {
    e.preventDefault(); //ブラウザでのキーの反応を防ぐ
    if (!start_game && e.keyCode === 32) { 
      $("#start-message").hide();
      $("#question").show();
      $("#ans").show();
      start_game = true;
      start_time = performance.now();
      return;
    } else if (!start_game) {
      return;
    }
    console.log(e);
    let text = e.key;
    let command = ' ';
    if (e.ctrlKey){
      text = command + text;
    }
    $("#input").text(text);
    if ((e.key === questions[i].answer && e.ctrlKey) || (e.key === questions[i].answer && e.metaKey)) {  //答えのキー
      console.log("true");
      $("#input").text('');  //入力されたキーを表示
      addScore(questions[i].score);  //スコア加点
      i++;
      if (questions.length <= i){ //問題終了判定
        finishAnswer();
      } else {
        changeText();
      }
    }
  });
});

