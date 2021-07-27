$(document).ready(function () {
  if (!$('#questions_json').length) {
    return false;
  }
  var Json = document.querySelector('#questions_json').value;
  var questions = JSON.parse(Json);
  var pc = document.querySelector('#pc_type').value;
  var input = document.querySelector('#input');
  var $timeMessage = $('#time-message');
  var command = document.querySelector('#command');

  var answer = 0;
  var point = 0;
  var i = 0; //問題文
  var start_game = false;　//ゲームスタート
  var start_time = 0; //時間の設定

    // スコアの計算
  function addScore(point){
    $("#answer").text(answer);
    // console.log(answer)
    // console.log('addScore is called!!!')
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
    Command: toastr["success"](questions[i].display_key + ' 正解!!!')
    command.innerHTML = '<span id="center">' + questions[i].display_key + '</span>';
  }
  // 不正解メッセージ
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
    Command: toastr["error"](miss + ' 不正解!!!')
  }
  // スタートメッセージ
    function startFlash() {
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": true,
        "progressBar": false,
        "positionClass": "toast-top-full-width",
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": "1000",
        "hideDuration": "1000",
        "timeOut": "1000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
    Command: toastr["warning"]('スタート!!!')
  }

  //問題の表示
  function roop() {
    // console.log('roop');
    $("#input").text('');
    // スコア更新
    addScore(questions[point].point);
     point++;
    $('#question-' + i).hide();
      i += 1;
    $('#question-' + i).show();
    //問題終了判定
    console.log('lengthTest' + i + ' / ' + questions.length)
    if (i === questions.length){
      console.log('finishAnswer');
     finishAnswer();
    }
  }

  // スタート表示
  function startPress(e) {
    if (!start_game && e.keyCode === 32) {
      // init
      answer = 0;
      point = 0;
      i = 0;
      start_time = 0;

      startFlash()
      $(".start-message").hide();
      $('#questions').show();
      $('#question-' + i).show();
        start_game = true;
        start_time = performance.now();
         return;
    } else if (!start_game) {
         return;
    }
     var text = e.key;
     var command = ' ';
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

    //タイマー・終了判定が出たら結果を送信
  function finishAnswer() {
    
    i = 0;
    answer = 0;
    point = 0;
    
    $(".finish").show();
    // $("#answer").text('');
    var score = $('#answer').html()
    var end_time = performance.now();
    var typing_time = ( (end_time - start_time) / 1000).toFixed(0);
    $timeMessage.text('クリアタイム：'+typing_time+'秒');
    //CSRFトークン
    $.ajaxPrefilter( function(options, originalOptions, jqXHR) {
      var token;
      if (!options.crossDomain) {
        token = $('meta[name="csrf-token"]').attr('content');
        if (token) {
          return jqXHR.setRequestHeader('X-CSRF-Token', token);
        }
      }
    });
        // 非同期でusers#createに処理を送信＋その時にプレイ情報(user_id)を渡す
        console.log('ajax');
        alert('ajax');
    $.ajax({
        url: '/users/:user_id/update_user_point',
        // url: '/user_questions/:id',
        type: 'PUT',
        data: {
         user: {
          experience_point: score,
         }
        },
        dataType: 'json'
      })
      // 処理が上手く行ったらボタンを切り替えて
    .done(function(data) {
        // window.location.href = '/users/:id';
      // alert(`${typing_time}お疲れ様でした！`);
      // リダイレクトの処理を書く
      console.log('done');
     })
      // 処理が上手く行かなかったら失敗の旨を伝えるアラートを表示
    .fail(function(data) {
      console.log('fail');
      // window.location.href = "/users/:id";
      // alert(`タイムは${typing_time}秒です。お疲れ様でした。`);
    })
  }

document.addEventListener("keydown", function(e) {

      e.preventDefault();
      // console.log(e.key)
      // スペースキーでスタート
      startPress(e);
      // console.log(i)
      //キー判定
      // alert('keydown');
      if ((questions[i].synchro_key === 'Meta') && (e.metaKey && e.key === questions[i].answer_key)) {
        //正解メッセージ
        trueFlash();
        roop();
        return;
       //キー判定
      } else if ((questions[i].synchro_key === 'Alt') && (e.altKey && e.key === questions[i].answer_key)) {
         //正解メッセージ
        trueFlash();
        roop();
        return;
       //キー判定
      }else if ((questions[i].synchro_key === 'Control') && (e.ctrlKey && e.key === questions[i].answer_key)) {
         //正解メッセージ
        trueFlash();
        roop();
        alert('ctrl');
        return
        // キー判定
      }else if ((questions[i].synchro_key === 'Meta+Shift') && (e.shiftKey && event.metaKey && e.key === questions[i].answer_key)) {
         //正解メッセージ
        trueFlash();
        roop();
        alert('meta+shift');
        return;
      } else {
        // nomatch(event.key);
    }
  });
});

