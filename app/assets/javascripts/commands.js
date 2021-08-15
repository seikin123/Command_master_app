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
        "hideDuration": "2000",
        "timeOut": "2000",
        "extendedTimeOut": "2000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
    Command: toastr["success"](questions.display_key + ' 正解!!!')
    command.innerHTML = '<span id="center">' + questions.display_key + '</span>';
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
        "hideDuration": "3000",
        "timeOut": "2000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
    Command: toastr["warning"]('スタート!!!')
  }

  // スタート表示
  function startPress(e) {
     var text = e.key;
     var command = ' ';
    if (e.ctrlKey){
      text = command + text;
    }
     $("#input").text(text);
  }

// 不正解判定
  function nomatch(e) {
    if (e.key === questions.answer_key) {
        trueFlash();
    } else {
        falseFlash(e);
    }
  }

 document.addEventListener("keydown", function(e) {
    e.preventDefault();
      
    // console.log(e.key)
    // スペースキーでスタート
    // console.log(i)
    //キー判定
    // alert('keydown');
    if (e.key != 'Meta') 
    if (e.key != 'Alt') 
    if (e.key != 'Shift')
    if (e.key != 'Control')
    if (e.keyCode != 32) {
    if ((questions.synchro_key === 'Meta') && (e.metaKey && e.key === questions.answer_key)) {
    //正解メッセージ
      trueFlash();
      return;
      //キー判定
    } else if ((questions.synchro_key === 'Alt') && (e.altKey && e.key === questions.answer_key)) {
    //正解メッセージ
      trueFlash();
      return;
    //キー判定
    } else if ((questions.synchro_key === 'ctrl') && (e.ctrlKey && e.key === questions.answer_key)) {
    //正解メッセージ
      trueFlash();
    // alert('ctrl');
      return
    // キー判定
    } else if ((questions.synchro_key === 'Meta+Shift') && (e.shiftKey && event.metaKey && e.key === questions.answer_key)) {
    //正解メッセージ
      trueFlash();
      return;
    } else if  ((questions.synchro_key === 'ctrl+Shift') && (e.shiftKey && e.ctrlKey && e.key === questions.answer_key)) {
    // nomatch(event.key);
      trueFlash();
      return;
    }
    nomatch(e.key); //不正解判定
    } else {
    }
    
 });
});
