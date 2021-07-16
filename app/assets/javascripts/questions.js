// 正解の答え
// let json_question = {
//   "key": "v",
//   "ctrl": true,
//   "meta": false,
//   "alt": false,
//   "shift": false
// }

// const $startMessage = $('#start-message');

window.onload = function () {
  const Json = document.querySelector('#questions_json').value;
  const questions = JSON.parse(Json);
  const answer_key = questions.answer_key;
  // console.log(questions[0].answer_key);
  const pc = document.querySelector('#pc_type').value;
  console.log(questions);
  console.log(questions[0].answer_key);
  console.log(questions[0].problem);
}
// キー判定の処理
    
  document.addEventListener("keydown", e => {
    e.preventDefault();
    let i = 0;
    let text = e.key;
    let command = ' ';
    if (e.ctrlKey){
    text = command + text;
    }
    $("#input").text(text);
    //入力されたキーが小文字でないと反応しないため、let event_key = e.key.toLowerCase();
    //問題に答えのキー登録しておき、else ifで特殊キーが押されたらそのキーを表示させるようにする
    if ((e.key === questions[0].answer_key && e.ctrlKey) || (e.key === questions[0].answer_key && e.metaKey)) {  //答えのキー
      console.log("true");
      // console.log(questions.answer_key);
      $("#input").text('');
    }
  });

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

