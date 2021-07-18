
$(document).ready(function () {
  const Json = document.querySelector('#questions_json').value;
  const questions = JSON.parse(Json);
  const pc = document.querySelector('#pc_type').value;
  const input = document.querySelector('#input');
  const $timeMessage = $('#time-message'); 
  
  var i = 0; //問題文
  var start_game = false;　//ゲームスタート
  var start_time = 0; //時間の設定
  /*$(document).on('keydown', function(){
    
  })*/　　
  var keys = [];
  //終了判定
  function finishAnswer() {
    $(".finish").show();
    const end_time = performance.now();
    const typing_time = ( (end_time - start_time) / 1000).toFixed(2);
    $timeMessage.text('かかった時間：'+typing_time+'秒');
   }
   
   // キー判定の処理
  document.addEventListener("keydown", e => {
    console.log(keys)
    e.preventDefault();
    keys.push(e.key);
    console.log(keys)
  });
  document.addEventListener("keyup", e => {
    if( keys.length > 2){
      keys = [];
      return false;
    }else if(keys.length == 1){
      if (!start_game && e.keyCode === 32) { 
        $("#start-message").hide();
        $('#questions').show();
        $('#question-' + i).show();
        start_game = true;
        start_time = performance.now();
    }else if(start_game){
        $('#input').text(keys[0]);
        if(keys[0] === questions[i].synchro_key) { //特殊キー
          console.log(questions[i].synchro_key);
          console.log("true" + k);
          $("#input").text('');
          $('#question-' + i).hide();
              i += 1;
          $('#question-' + i).show();
        }
      }
      keys = [];
    }else if(keys.length == 2 && start_game){ //答えのキーが二つの場合
      $('#input').text(keys.join(' '));
      keys.forEach(function(k){
        if(k === questions[i].answer_key) { //2つ目の答え
          console.log("true" + k);
          $("#input").text('');
          $('#question-' + i).hide();
            i += 1;
          $('#question-' + i).show();
        if (questions.length <= i){ //問題終了判定
          finishAnswer();
        }
        }
      });
      keys = [];
    }else{
      keys = [];
    }
});




    /*keys.forEach(function(k){
      if (!start_game && e.keyCode === 32) { 
        $("#start-message").hide();
        $('#questions').show();
        $('#question-' + i).show();
        start_game = true;
      // start_time = performance.now();
            return;
      } else if (!start_game) {
        return;
      }*/
      /*let text = e.key;
      let command = ' ';
      if (e.ctrlKey || e.metakey){
          text = command + text;
      }*/
      /*$("#input").text(text);
      console.log(i)
      if (event.metaKey && e.key === questions[i].answer_key) {
          console.log("true");
          $("#input").text('');
          $('#question-' + i).hide();
          i += 1;
          $('#question-' + i).show();
        }
    });*/
  /*document.addEventListener("keydown", e => {
      e.preventDefault();
      console.log(e.key)
      if (!start_game && e.keyCode === 32) { 
      $("#start-message").hide();
      $('#questions').show();
      $('#question-' + i).show();
        start_game = true;
      // start_time = performance.now();
            return;
          } else if (!start_game) {
            return;
          }
      let text = e.key;
      let command = ' ';
      if (e.ctrlKey || e.metakey){
          text = command + text;
      }
      $("#input").text(text);
      console.log(i)
      if (event.metaKey && e.key === questions[i].answer_key) {
          console.log("true");
          $("#input").text('');
          $('#question-' + i).hide();
          i += 1;
          $('#question-' + i).show();
        }
    });*/
});


    //正解 
  // var synchro = { meta: '', ctrl: '', alt: '', shift: '' }
    // Mac/windows切り替え
    // window.onload = () => {
    // synchro.meta  = (pc === 'Mac')? '<span id="meta"> ⌘ </span>'  : '<span id="meta"> Win </span>';
    // synchro.ctrl  = (pc === 'Mac')? '<span id="ctrl"> ⌃ </span>'  : '<span id="ctrl"> Ctrl </span>';
    // synchro.alt   = (pc === 'Mac')? '<span id="alt"> ⌥ </span>'   : '<span id="alt"> Alt </span>';
    // synchro.shift = (pc === 'Mac')? '<span id="shift"> ⇧ </span>' : '<span id="shift"> Shift </span>';
    // };
