//ローディング画面の表示
$(window).on('load',function(){
  $("#loading").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  $("#loading_box").delay(1400).fadeOut('slow');//ローディングテキストを1.4秒（1400ms）待機してからフェードアウト
});

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
  function loop() {
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
      start_game = true;
      start_time = performance.now();
        return;
    } else if (!start_game) {
        return;
    }
    // 入力したキーを表示させている部分
    if (e.key == 'Meta') {
      var text = "⌘"
    } else if (e.key === 'Meta' && e.shiftkey) {
      var text = "⌘ + ⬆"
    } else if(e.key == 'Alt') {
      var text = "⌥"
    } else if(e.key == 'Shift') {
      var text = "⬆"
    } else if(e.key == 'Control') {
      var text = "⌃"
    } else if(e.key == 'Enter') {
      var text = "⏎"
    } else if(e.key == 'Backspace') {
      var text = "⌫"
    } else if(e.key == 'Tab') {
      var text = "→|"
    } else if(e.key == 'ArrowDown') {
      var text = "⇩"
    } else if(e.key == 'ArrowUp') {
      var text = "⇧"
    } else if(e.key == 'ArrowRight') {
      var text = "⇨"
    } else if(e.key == 'ArrowLeft') {
      var text = "⇦"
    } else {
      // var text = e.key
    }
         $("#input").text(text);
  }
  
    // } else if (e.key = e.altkey)
    //     var text =  "⌥"
    // var text = e.key = 
    // if text = (e.key === (e.ctrlKey = "⌃")
    // if (e.key = (e.metaKey = "⌘"))
    // if (e.key = (e.altKey = "⌥"))
    // var command = ' ';
    // if (e.ctrlKey){
    //   text = command + text;
    // }


// 不正解判定
  function nomatch(e) {
    // e.keyに答えのキーが入ったら
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
    var end_time = performance.now(); //かかった時間
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
      // 処理が上手く行ったら切り替え
    .done(function(data) {
        // window.location.href = '/users/:id';
      // alert(`${typing_time}お疲れ様でした！`);
      // リダイレクトの処理を書く
    })
      // 処理が上手く行かなかったら失敗の旨を伝えるアラートを表示
    .fail(function(data) {
      // window.location.href = "/users/:id";
      // alert(`タイムは${typing_time}秒です。お疲れ様でした。`);
    })
  }
  // ヒントの表示機能
  $('#click').on('click', "#hyouji", function() {
    if (this.value === "ヒントON") {
        $('input').addClass("clicked");
        $('#hyouji').replaceWith('<input type="button" id="hyouji" value="表示OFF">');
        $('#target').replaceWith('<p id="target" class="display">' + questions[i].display_key + '</p>');
    } else {
        $('input').removeClass('clicked');
        $('#hyouji').replaceWith('<input type="button" id="hyouji" value="ヒントON">');
        $('#target').replaceWith('<div id="target"></div>');
    }
  });

  document.addEventListener("keydown", function(e) {
    e.preventDefault(); //デフォルトのキーイベントを無効化
    // console.log('e.key197',e.key);
    // スペースキーでスタート
    startPress(e)
    //キー判定
    // alert('keydown');
    //e.metakeyはaltkeyを押しているかどうか
    //e.key === questions[i].answer_keyは、正解のアルファベットを押されているかどうか
    // 特殊キーは判定しない
  if (e.key != 'Meta')
  if (e.key != 'Alt')
  if (e.key != 'Shift')
  if (e.key != 'Control')
  if (e.keyCode != 32) {
    if ((questions[i].synchro_key === 'Meta') && (e.metaKey && e.key === questions[i].answer_key)) {
      //正解メッセージ
      trueFlash();
      // 問題を回している
      loop();
      return;
      //キー判定
    } else if ((questions[i].synchro_key === 'Alt') && (e.altKey && e.key === questions[i].answer_key)) {
      //正解メッセージ
      trueFlash();
      loop();
      return;
      //キー判定
    }else if ((questions[i].synchro_key === 'ctrl') && (e.ctrlKey && e.key === questions[i].answer_key)) {
      //正解メッセージ
      trueFlash();
      loop();
      return
      // キー判定
    }else if ((questions[i].synchro_key === 'Meta+Shift') && (e.shiftKey && e.metaKey && e.key === questions[i].answer_key)) {
      //正解メッセージ
      trueFlash();
      loop();
      return;
    } else if  ((questions[i].synchro_key === 'ctrl+Shift') && (e.shiftKey && e.ctrlKey && e.key === questions[i].answer_key)) {
      trueFlash();
      loop();
      return;
    }
    console.log('hoge');
    console.log('e.metakey', e.metaKey);
    console.log('正解のキー(アルファベット)', questions[i].answer_key); //back
    console.log('正解のキー(アルファベットじゃない)', questions[i].synchro_key); //meta
    console.log('入力したキー', e.key); //meta
    console.log('入力したキー(イベント)', event.key); //meta
    nomatch(e.key); //不正解判定
  } else {
  }
  });
 });
