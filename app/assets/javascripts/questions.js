// 正解の答え
// let json_question = {
//   "key": "v",
//   "ctrl": true,
//   "meta": false,
//   "alt": false,
//   "shift": false
// }



// const answer_key = JSON.parse(Json);
// const $startMessage = $('#start-message');

// // 問題
// let questions =  [{
//   "id": "1",
//   "category_id": "1",
//   "question_value": "Vscodeのコピーする際のショートカットキー はなんですか",
//   "answer_key": "c",
//   // "metaKey": true,
//   "score": 10
// },
// {
//   "id": "2",
//   "category_id": "1",
//   "question_value": "Vscodeの全選択をする際のショートカットキー",
//   "answer_key": "a",
//   // "shiftKey": true,
//   "score": 10
// },
// {
//   "id": "3",
//   "category_id": "1",
//   "question_value": "Vscodeのペーストする際のショートカットキー",
//   "answer_key": "v",
//   "shiftKey": true,
//   "score": 10
// },
// {
//   "id": "4",
//   "category_id": "1",
//   "question_value": "Vscodeの一つ前に戻す処理際のショートカットキー",
//   "answer_key": "z",
//   "shiftKey": true,
//   "score": 10
// },
// {
//   "id": "5",
//   "category_id": "1",
//   "question_value": "Vscodeの選択範囲を切り取りのショートカットキー",
//   "answer_key": "x",
//   "shiftKey": true,
//   "score": 10
// },
// {
//   "id": "6",
//   "category_id": "1",
//   "question_value": "Vscodeの指定した行にジャンプのショートカットキー",
//   "answer_key": "g",
//   "shiftKey": true,
//   "score": 10
// },
// {
//   "id": "7",
//   "category_id": "1",
//   "question_value": "Vscodeの検索する際のショートカットキー",
//   "answer_key": "f",
//   "shiftKey": true,
//   "score": 10
// },
// ]
window.onload = function () {
  const Json = document.querySelector('#questions_json').value;
  const questions = JSON.parse(Json);
  const answer_key = questions.answer_key;
  console.log(questions[0].answer_key);
}
    let i = 0;
  document.addEventListener("keydown", e => {
    e.preventDefault();
    let text = e.key;
    let command = ' ';
    if (e.ctrlKey){
    text = command + text;
    }
    $("#input").text(text);
    if ((e.key === questions[i].answer_key && e.ctrlKey) || (e.key === questions[i].answer_key && e.metaKey)) {  //答えのキー
      console.log("true");
      // console.log(questions[i].answer_key);
      $("#input").text('');
      $("#inpot").text('');
    }
  });
// $(document).ready(function () {
  
//   function changeText(){
//     // $("#question").text(questions[i].problem;
//     // $("#ans").text(ans);
//   };
//   function addScore(score){
//     ans += score;
//   };
//   function test(test){
//     console.log()
//   };
//   changeText();
//   window.addEventListener("keypress", function(e){
//     if (e.key === answer_key && e.ctrlKey){  //答えのキー
//       console.log("true");
//       // addScore(questions[i].score);
//       i++;
//       // changeText();
//     }
//   });
// });




// jsのみの挙動
// let start_game = false;
// let ans = 0;
// let start_time = 0; // <<--ゲームがスタートしたかを判断する変数


// $(document).ready(function () {
//   console.log("document.ready")

//   function changeText(){
//     $("#question").text(questions[i].question_value);
//     $("#ans").text(ans);
//   };
//   function addScore(score){
//     ans += score;
//   };
//   function test(test){
//     console.log()
//   };
//   function finishAnswer(){
//     $("#question").text('');
//     $("#ans").text('');
//     $(".finish").show();
//   };

//   changeText();
//   document.addEventListener("keydown", e => {
//     e.preventDefault(); //ブラウザでのキーの反応を防ぐ
//     if (!start_game && e.keyCode === 32) { 
//       $("#start-message").hide();
//       $("#question").show();
//       $("#ans").show();
//       start_game = true;
//       start_time = performance.now();
//       return;
//     } else if (!start_game) {
//       return;
//     }
//     console.log(e);
    // let text = e.key;
    // let command = ' ';
    // if (e.ctrlKey){
    //   text = command + text;
    // }
    // $("#input").text(text);
    
//     if ((e.key === questions[i].answer_key && e.ctrlKey) || (e.key === questions[i].answer_key && e.metaKey)) {  //答えのキー
//       console.log("true");
//       $("#input").text('');  //入力されたキーを表示
//       addScore(questions[i].score);  //スコア加点
//       i++;
//       if (questions.length <= i){ //問題終了判定
//         finishAnswer();
//       } else {
//         changeText();
//       }
//     }
//   });
// });

