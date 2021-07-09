// 正解の答え
// let json_question = {
//   "key": "v",
//   "ctrl": true,
//   "meta": false,
//   "alt": false,
//   "shift": false
// }
// $(function() {
      
      //次の問題へ 
// function changeQuestionWord() {
   // 次の問題の実装
  // }    
  
// 問題
let questions =  [{
  "id": "1",
  "category_id": "1",
  "question_value": "Vscodeのコピーする際のショートカットキー はなんですか",
  "answer": "c",
  "metaKey": true,
  "score": 10
},
{
  "id": "2",
  "category_id": "1",
  "question_value": "Vscodeの全選択をする際のショートカットキー はなんですか",
  "answer": "a",
  "shiftKey": true,
  "score": 10
},
{
  "id": "3",
  "category_id": "1",
  "question_value": "Vscodeのペーストする際のショートカットキー はなんですか",
  "answer": "v",
  "shiftKey": true,
  "score": 10
},
{
  "id": "4",
  "category_id": "1",
  "question_value": "Vscodeの一つ前に戻す処理際のショートカットキー はなんですか",
  "answer": "z",
  "shiftKey": true,
  "score": 10
},
{
  "id": "5",
  "category_id": "1",
  "question_value": "Vscodeの選択範囲を切り取りのショートカットキー はなんですか",
  "answer": "x",
  "shiftKey": true,
  "score": 10
},
{
  "id": "6",
  "category_id": "1",
  "question_value": "Vscodeの指定した行にジャンプのショートカットキー はなんですか",
  "answer": "g",
  "shiftKey": true,
  "score": 10
},
]
let start_game = false;
let i = 0;
let ans = 0;

  
    
$(document).ready(function () {
  
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
  changeText();
  window.addEventListener("keydown", function(e){
    if ((e.key === questions[i].answer && e.ctrlKey) || (e.key === questions[i].answer && e.metaKey)) {  //答えのキー
      console.log("true");
      addScore(questions[i].score);
      i++;
      changeText();
    }
  });
});

// スペースキーを押したら、スタート
  $(document).on('keypress', function(e){
    if (!start_game && e.key) { 
      start_game = true;
      start_time = performance.now();
      return;
    } else if (!start_game) {
      return;
    };

  
  