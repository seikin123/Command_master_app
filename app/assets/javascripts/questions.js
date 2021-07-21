
$(document).ready(function () {
  const Json = document.querySelector('#questions_json').value;
  const questions = JSON.parse(Json);
  const pc = document.querySelector('#pc_type').value;
  const input = document.querySelector('#input');
  const $timeMessage = $('#time-message');

  var ans = 0;
  // var point = 0;
  var p = 0;
  var i = 0; //問題文
  var start_game = false;　//ゲームスタート
  var start_time = 0; //時間の設定
  var keys = []; //入力されたキーを保存しておく配列

  /*$(document).on('keydown', function(){
  })*/
  function addScore(point){
    $("#ans").text(ans);
    console.log('ans')
    console.log('addScore is called!!!')
    ans += point;
  };

  //タイマー・終了判定が出たら
  function finishAnswer() {
    $(".finish").show();
    $("#ans").text('');
    const end_time = performance.now();
    const typing_time = ( (end_time - start_time) / 1000).toFixed(2);
    $timeMessage.text('かかった時間：'+typing_time+'秒');
        // 非同期でusers#createに処理を送信＋その時にプレイ情報(question_id)を渡す
    $.ajax({
      url: '/users',
      type: 'POST',
      data: {
        user: {
          point: p,
          // performance:  performance
      }
      },
      dataType: 'json'
    })
    // 処理が上手く行ったらボタンを切り替えて
    .done((data) => {
      alert('成功しました');
    })
    // 処理が上手く行かなかったら失敗の旨を伝えるアラートを表示
    .fail((data) => {
      alert('失敗しました');
    })
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
        $("#ans").show();

        start_game = true;
        start_time = performance.now();
    }else if(start_game){
        $('#input').text(keys[0]);
        if(keys[0] === questions[i].synchro_key) { //特殊キー
          console.log(questions[i].synchro_key);
          console.log("true" + k);
          $("#input").text('');
          addScore(questions[p].point);  //スコア加点
            p++;
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
          addScore(questions[p].point);  //スコア加点
          p++;
          $('#question-' + i).hide();
            i += 1;
          $('#question-' + i).show();
        if (questions.length <= i){ //問題終了判定
          finishAnswer();
        }
      }
    });
      keys = [];
    } else {
      keys = [];
    }
 });
});

    //   keys = [];
    // }else if(keys.length == 3 && start_game){
    //   $('#input').text(keys.join(' '));
    //   keys.forEach(function(k){
    //   if(k === questions[i].answer_key) { //3つ目の答えがある場合
    //       console.log("true" + k);
    //       $("#input").text('');
    //       $('#question-' + i).hide();
    //         i += 1;
    //       $('#question-' + i).show();
    //     if (questions.length <= i){ //問題終了判定
    //       finishAnswer();
    //     }
    //   }
    // });


//   $(function(){
//   // id="link-mark"の箇所(いいねボタン)をクリックしたら
//   $('#').on('click', function(){
//     // 非同期でlikes#createに処理を送信＋その時に店舗情報(question_id)を渡す
//     $.ajax({
//       url: '/users',
//       type: 'POST',
//       data: {_id: $(this).data('shop_id')

//       }
//     })
//     処理が上手く行ったらボタンを切り替えて
//     .done((data) => {
//       if ($(this).text() === 'いいね！') {
//         $(this).text('いいね！を取り消す').removeClass('btn-primary').addClass('btn-secondary');
//       }
//     })
//     // 処理が上手く行かなかったら失敗の旨を伝えるアラートを表示
//     .fail((data) => {
//       alert('失敗しました');
//     })
//   });
// });


  // $.ajax({
  //       url: '/users',
  //       type: 'POST',
  //       data: {
  //           user: {
  //               user_id: document.querySelector('.user_id').value,
  //               point: point
  //           }
  //       },
  //       dataType: 'json'
  //   });



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



    //正解
  // var synchro = { meta: '', ctrl: '', alt: '', shift: '' }
  //   Mac/windows切り替え
  //   window.onload = () => {
  //   synchro.meta  = (pc === 'Mac')? '<span id="input"> ⌘ </span>'  : '<span id="meta"> Win </span>';
  //   synchro.ctrl  = (pc === 'Mac')? '<span id="ctrl"> ⌃ </span>'  : '<span id="ctrl"> Ctrl </span>';
  //   synchro.alt   = (pc === 'Mac')? '<span id="alt"> ⌥ </span>'   : '<span id="alt"> Alt </span>';
  //   synchro.shift = (pc === 'Mac')? '<span id="shift"> ⇧ </span>' : '<span id="shift"> Shift </span>';
  //   };
