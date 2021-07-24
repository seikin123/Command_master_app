// $(document).ready(function () {
//   const Json = document.querySelector('#questions_json').value;
//   const questions = JSON.parse(Json);
//   const pc = document.querySelector('#pc_type').value;
//   const input = document.querySelector('#input');
//   const $timeMessage = $('#time-message');
//   const command = document.querySelector('#command');
  
//   var answer = 0;
//   // var point = 0;
//   var point = 0;
//   var i = 0; //問題文
//   var start_game = false;　//ゲームスタート
//   var start_time = 0; //時間の設定
//   var keys = []; //入力されたキーを保存しておく配列

//   /*$(document).on('keydown', function(){
//   })*/
//   function addScore(point){
//     $("#answer").text(answer);
//     console.log(answer)
//     console.log('addScore is called!!!')
//     answer += point;
//   };
  
//   // 正解したときのメッセージ
//   function trueFlash() {
//     toastr.options = {
//         "closeButton": false,
//         "debug": false,
//         "newestOnTop": true,
//         "progressBar": false,
//         "positionClass": "toast-top-full-width",
//         "preventDuplicates": true,
//         "onclick": null,
//         "showDuration": "3000",
//         "hideDuration": "1000",
//         "timeOut": "1000",
//         "extendedTimeOut": "1000",
//         "showEasing": "swing",
//         "hideEasing": "linear",
//         "showMethod": "fadeIn",
//         "hideMethod": "fadeOut"
//     }
//     Command: toastr["success"](`${questions[i].display_key} 正解!!!`)
//     command.innerHTML = `<span id="right">${questions[i].display_key}</span>`;
//   }

//   // ヒントについて
//   // $(function() {
   
//     // チェックボックスをチェックしたら発動
//   //   $('input[name="check"]').change(function() {
   
//   //     // もしチェックが入ったら
//   //     if ($(this).prop('checked')) {
   
//   //       // value値を出力
//   //       $('#p01').text($(this).val());
   
//   //     } else {
   
//   //       // テキストをリセット
//   //       $('#p01').text('');
//   //     }
   
//   //   });
//   // });

//   //タイマー・終了判定が出たら
//   function finishAnswer() {
//     $(".finish").show();
//     $("#answer").text('');
//     const end_time = performance.now();
//     const typing_time = ( (end_time - start_time) / 1000).toFixed(2);
//     $timeMessage.text('かかった時間：'+typing_time+'秒');

//     //CSRFトークン  
//     $.ajaxPrefilter( (options, originalOptions, jqXHR) => {
//       if (!options.crossDomain) {
//         const token = $('meta[name="csrf-token"]').attr('content');
//         if (token) {
//             return jqXHR.setRequestHeader('X-CSRF-Token', token);
//         }
//       }
//     });
//         // 非同期でusers#createに処理を送信＋その時にプレイ情報(user_id)を渡す
//       $.ajax({
//           url: '/users/:user_id/update_user_point',
//           // url: '/user_questions/:id',
//           type: 'PATCH',
//           data: {
//           user: {
//             experience_point: answer,
//             // user_id: 
//           }
//           },
//           dataType: 'json'
//         })
//   //     // 処理が上手く行ったらボタンを切り替えて
//   //     .done((data) => {
//   //       alert('成功しました');
//   //       console.log(answer);
//   //     })
//   //     // 処理が上手く行かなかったら失敗の旨を伝えるアラートを表示
//   //     .fail((data) => {
//   //       alert('失敗しました');
//   //     })
//   }
  
  

//   // キー判定の処理
// document.addEventListener("keydown", e => {
//     console.log(keys)
//     e.preventDefault();
//     keys.push(e.key);
//     console.log(keys)
// });
//   document.addEventListener("keyup", e => {
//     if( keys.length > 2){
//       keys = [];
//       trueFlash();
//       return false;
//     }else if(keys.length == 1){
//       if (!start_game && e.keyCode === 32) {
//         $(".start-message").hide();
//         $("#answer").show();

//         start_game = true;
//         start_time = performance.now();
//     }else if(start_game){
//       // console.log(questions[i].display_key)
//         $('#input').text(keys[0]);
//         if(keys[0] === questions[i].synchro_key) { //特殊キー
//           console.log(questions[i].synchro_key);
//           console.log("true" + k);
//           $("#input").text('');
//           addScore(questions[point].point);  //スコア加点
//             point++;
//             // console.log(point);
//           $('#question-' + i).hide();
//               i += 1;
//           $('#question-' + i).show();
//         }
//       }

//       keys = [];
//     }else if(keys.length == 2 && start_game){ //答えのキーが二つの場合
//       $('#input').text(keys.join(' '));
//       keys.forEach(function(k){
//         if(k === questions[i].answer_key) { //2つ目の答え
//           trueFlash();
//           console.log("true" + k);
//           $("#input").text('');
//           trueFlash();
//           addScore(questions[point].point);  //スコア加点
//           point++;
//           $('#question-' + i).hide();
//             i += 1;
//           $('#question-' + i).show();
//         if (questions.length <= i){ //問題終了判定
//           finishAnswer();
//         }
//       }
//     });
//       keys = [];
//     } else {
//       keys = [];
//     }
//   });
// });

    // keys.forEach(function(k){
    //   if (!start_game && e.keyCode === 32) {
    //     $("#start-message").hide();
    //     $('#questions').show();
    //     $('#question-' + i).show();
    //     start_game = true;
    //   // start_time = performance.now();
    //         return;
    //   } else if (!start_game) {
    //     return;
    //   }
    //   let text = e.key;
    //   let command = ' ';
    //   if (e.ctrlKey || e.metakey){
    //       text = command + text;
    //   }
    //   $("#input").text(text);
    //   console.log(i)
    //   if (event.metaKey && e.key === questions[i].answer_key) {
    //       console.log("true");
    //       $("#input").text('');
    //       $('#question-' + i).hide();
    //       i += 1;
    //       $('#question-' + i).show();
    //     }
    // });
    
    //正解
  // var synchro = { meta: '', ctrl: '', alt: '', shift: '' }
  //   Mac/windows切り替え
  //   window.onload = () => {
  //   synchro.meta  = (pc === 'Mac')? '<span id="input"> ⌘ </span>'  : '<span id="meta"> Win </span>';
  //   synchro.ctrl  = (pc === 'Mac')? '<span id="ctrl"> ⌃ </span>'  : '<span id="ctrl"> Ctrl </span>';
  //   synchro.alt   = (pc === 'Mac')? '<span id="alt"> ⌥ </span>'   : '<span id="alt"> Alt </span>';
  //   synchro.shift = (pc === 'Mac')? '<span id="shift"> ⇧ </span>' : '<span id="shift"> Shift </span>';
  //   };

$(document).ready(function () {
  const Json = document.querySelector('#questions_json').value;
  const questions = JSON.parse(Json);
  const pc = document.querySelector('#pc_type').value;
  const input = document.querySelector('#input');
  const $timeMessage = $('#time-message');
  const command = document.querySelector('#command');
  
  var answer = 0;
  var point = 0;
  var i = 0; //問題文
  var start_game = false;　//ゲームスタート
  var start_time = 0; //時間の設定
    
    // スコアの計算
  function addScore(point){
    $("#answer").text(answer);
    console.log(answer)
    console.log('addScore is called!!!')
    answer += point;
  };
  
    
    // 正解したときのメッセージ
  function trueFlash() {
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": true,
        "progressBar": false,
        "positionClass": "toast-top-full-width",
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": "3000",
        "hideDuration": "1000",
        "timeOut": "1000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
    Command: toastr["success"](`${questions[i].display_key} 正解!!!`)
    command.innerHTML = `<span id="right">${questions[i].display_key}</span>`;
  }
  
  function falseFlash(miss) {
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": true,
        "progressBar": false,
        "positionClass": "toast-top-full-width",
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": "3000",
        "hideDuration": "1000",
        "timeOut": "1000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
    Command: toastr["error"](`${miss} 不正解!!!`)
  }
  
  //問題の表示
  function roop() {
    $("#input").text('');
    // スコア更新
    addScore(questions[point].point); 
      point++;
    $('#question-' + i).hide();
      i += 1;
    $('#question-' + i).show();
    //問題終了判定
    if (questions.length <= i){ 
     finishAnswer();
    }
  }
  
  // スタート表示
  function startPress(e) {
    if (!start_game && e.keyCode === 32) {
      $(".start-message").hide();
      $('#questions').show();
      $('#question-' + i).show();
        start_game = true;
      start_time = performance.now();
         return;
    } else if (!start_game) {
         return;
    }
      let text = e.key;
      let command = ' ';
      if (e.ctrlKey){
        text = command + text;
      }
      $("#input").text(text);
  }
  
  function nomatch(e) {
    if (e.key === questions[i].answer_key) {
        trueFlash();
    } else {
        falseFlash(e);
    }
  }
  
    //タイマー・終了判定が出たら
  function finishAnswer() {
    $(".finish").show();
    $("#answer").text('');
    const end_time = performance.now();
    const typing_time = ( (end_time - start_time) / 1000).toFixed(2);
    $timeMessage.text('かかった時間：'+typing_time+'秒');
    //CSRFトークン  
    $.ajaxPrefilter( (options, originalOptions, jqXHR) => {
      if (!options.crossDomain) {
        const token = $('meta[name="csrf-token"]').attr('content');
        if (token) {
          return jqXHR.setRequestHeader('X-CSRF-Token', token);
        }
      }
    });
        // 非同期でusers#createに処理を送信＋その時にプレイ情報(user_id)を渡す
    $.ajax({
        url: '/users/:user_id/update_user_point',
        // url: '/user_questions/:id',
        type: 'PUT',
        data: {
         user: {
          experience_point: answer,
          // user_id: 
        }
        },
        dataType: 'json'
      })
      // 処理が上手く行ったらボタンを切り替えて
    .done((data) => {
      alert('成功しました');
      console.log(answer);
     })
      // 処理が上手く行かなかったら失敗の旨を伝えるアラートを表示
    .fail((data) => {
      alert('失敗しました');
    })
  }
  
  
document.addEventListener("keydown", e => {
      e.preventDefault();
      console.log(e.key)
      // スペースキーでスタート
      startPress(e);
      console.log(i)
      //キー判定
      if ((questions[i].synchro_key === 'Meta') && (event.metaKey && e.key === questions[i].answer_key)) {
        trueFlash();
        console.log("true");
         //正解メッセージ
        trueFlash();
        roop();
       //キー判定
      } else if ((questions[i].synchro_key === 'Alt') && (e.altKey && e.key === questions[i].answer_key)) {
        trueFlash();
        console.log("true");
         //正解メッセージ
        trueFlash();
        roop();
       //キー判定
      }else if ((questions[i].synchro_key === 'Control') && (e.ctrlKey && e.key === questions[i].answer_key)) {
        trueFlash();
        console.log("true");
         //正解メッセージ
        trueFlash();
        roop(); 
        // キー判定
      }else if ((questions[i].synchro_key === 'Meta+Shift') && (e.ctrlKey && event.metaKey && e.key === questions[i].answer_key)) {
        trueFlash();
        console.log("true");
         //正解メッセージ
        trueFlash();
        roop(); 
      } else {
        nomatch(event.key);
    }
  });
});


  // function nomatch('keyup', e => {
  //   if (e.key === questions[i].answer_key) {
  //       trueFlash();
  //   } else {
  //       falseFlash(e.key);
  //   }
  // });