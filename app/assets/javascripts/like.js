$(function(){
  // CSRFトークンの追加
  $.ajaxPrefilter( function(options, originalOptions, jqXHR) {
      var token;
      if (!options.crossDomain) {
        var token = $('meta[name="csrf-token"]').attr('content');
        if (token) {
            return jqXHR.setRequestHeader('X-CSRF-Token', token);
        }
      }
    });
  // id="link-mark"の箇所(いいねボタン)をクリックしたら
    $('.link-mark').on('click', function(){
      // thisをglobalに
      var _this = this;
      // 非同期でlikes#createに処理を送信＋その時に情報(question_id)を渡す
      $.ajax({
        url: '/likes',
        type: 'POST',
        data: {question_id: $(_this).data('question_id')
        }
      })
      // 処理が上手く行ったらボタンを切り替えて
      .done(function (data) {
        if ($(_this).text() === 'BookMark') {
          $(_this).text('BookMarkを取り消す').removeClass('btn-primary').addClass('btn-secondary');
        } else if ($(_this).text() === 'BookMarkを取り消す') {
          $(_this).text('BookMark').removeClass('btn-secondary').addClass('btn-primary');
        }
      })
      // 処理が上手く行かなかったら失敗を伝えるアラートを表示
      .fail(function(data) {
      })
    });
  });