//ローディング画面の表示
// $(window).on('load',function(){
//   $("#loading").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
//   $("#loading_box").delay(1500).fadeOut('slow');//ローディングテキストを1.4秒（1400ms）待機してからフェードアウト
// });

$(document).ready(function () {
  if (!$('#questions_json').length) {
    return false;
  }
  var Json = document.querySelector('#questions_json').value; //value値でquestionのデータをjson形式で受け取る
  //JSON.perseは文字列を JSON として受け取り、文字列によって記述されているJavaScript の値やオブジェクトを構築する
  var questions = JSON.parse(Json);　
  var pc = document.querySelector('#pc_type').value; //value値でpc_typeのデータをjson形式で受け取る
  var input = document.querySelector('#input');
  var $timeMessage = $('#time-message'); //かかった時間
  var command = document.querySelector('#command'); //入力コマンド
  var answer = 0; //表示点数
  var point = 0; //点数
  var i = 0; //問題文
  var start_time = 0; //時間の設定
  var start_game = false;　//ゲームスタート

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
    // inputのvalueを取得
    var inputElement = $('#hyouji')
    inputElement.val("ヒントON")
    $('#target').addClass("hidden-hint")

    // スコア更新
    addScore(questions[point].point);
     point++;
    $('#question-' + i).hide();
      i += 1;
    $('#question-' + i).show();
    //問題終了判定
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
    // 入力したキーを表示部分
    if ((pc != 'Mac') && e.key == 'Meta') {
      var text = "Win +"
    } else if ((pc = 'Mac') && e.key == 'Meta') {
      var text = "⌘ +"
    } else if ((pc = 'Mac') && (e.shiftKey && e.metaKey)) {
      var text = "⌘ + ⬆ +"
    } else if ((questions[i].synchro_key === 'Ctrl+Shift') && (e.key == "Shift" && e.ctrlKey)) {
      var text = "Ctrl + Shift +"
    } else if (e.key == 'Shift' && (pc = 'Mac')) {
      var text = "⬆"
    } else if (e.key == 'Alt' && (pc = 'Mac')) {
      var text = "⌥ +"
    } else if (e.key == 'Control' && (pc = 'Mac')) {
      var text = "⌃"
    } else if (e.key == 'Enter') {
      var text = "⏎"
    } else if (e.key == 'Backspace') {
      var text = "⌫"
    } else if (e.key == 'Tab') {
      var text = "→|"
    } else if(e.key == 'ArrowDown') {
      var text = "⇩"
    } else if (e.key == 'ArrowUp') {
      var text = "⇧"
    } else if (e.key == 'ArrowRight') {
      var text = "⇨"
    } else if (e.key == 'ArrowLeft') {
      var text = "⇦"
    } else {
      var text = e.key
    }
    $("#input").text(text);
  }

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
    i = 0; //問題数をリセット
    answer = 0; //合計数のリセット
    point = 0; //点数のリセット
    $("#target").hide();
    $("#click").hide();
    $("#leftber").hide();
    $(".finish").show();
    var score = $('#answer').html()
    var end_time = performance.now(); //かかった時間
    var typing_time = ( (end_time - start_time) / 1000).toFixed(0);
    $timeMessage.text(typing_time + '秒');
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
    // 非同期でusers#updateに処理を送信＋その時にプレイ情報を渡す
    $.ajax({
        url: '/users/:user_id/update_user_point',
        type: 'PUT',
        data: {
         user: {
          experience_point: score,
         }
        },
        dataType: 'json'
      })

    .done(function(data) {
    })
    
    .fail(function(data) {
    })
  }

  // // ヒントの表示機能
  $('#click').on('click', "#hyouji", function() {
    if (this.value === "ヒントON") {
        $('input').addClass("clicked");
        $('#hyouji').replaceWith('<input type="button" id="hyouji" value="ヒントOFF">');
        $('#input').removeClass("hidden-hint")
        $('#target').replaceWith('<p id="target" class="display">' + questions[i].display_key + '</p>');
    } else {
        $('input').removeClass('clicked');
        $('#hyouji').replaceWith('<input type="button" id="hyouji" value="ヒントON">');
        $('#target').replaceWith('<div id="target"></div>');
    }
  });

// キーイベント取得
 document.addEventListener("keydown", function(e) {
    e.preventDefault(); //デフォルトのキーイベントを無効化
    var event_key = e.key.toLowerCase(); //小文字に変換
    // スペースキーでスタート
    startPress(e)
    //キー判定
    // 特殊キーは判定しない
  if (e.key != 'Meta')
  if (e.key != 'Alt')
  if (e.key != 'Shift')
  if (e.key != 'Control')
  if (e.keyCode != 32) {
    if ((questions[i].synchro_key === 'Meta') && (e.metaKey && e.key === questions[i].answer_key)) {
      trueFlash(); //正解のメッセージ
      loop();// 問題の切り替え
      return;
      //キー判定
    } else if ((questions[i].synchro_key === 'Alt') && (e.altKey && e.key === questions[i].answer_key)) {
      trueFlash();
      loop();
      return;
      //キー判定
    }else if ((questions[i].synchro_key === 'Ctrl') && (e.ctrlKey && e.key === questions[i].answer_key)) {
      trueFlash();
      loop();
      return
      // キー判定
    }else if ((questions[i].synchro_key === 'Meta+Shift') && (e.shiftKey && e.metaKey && e.key === questions[i].answer_key)) {
      trueFlash();
      loop();
      return;
    } else if  ((questions[i].synchro_key === 'Ctrl+Shift') && (e.ctrlKey && e.shiftKey && event_key === questions[i].answer_key)) {
      trueFlash();
      loop();
      return;
    }
    nomatch(e.key); //不正解判定
  } else {
  }
 });
});
