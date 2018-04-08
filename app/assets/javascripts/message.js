$(function(){
  // メッセージのHTMLを生成する
  function messageHTML(message){
    var html = `<div class="right-content-message__user-name">${message.user_name}</div>
                <div class="right-content-message__date">${message.created_at}</div>
                <div class="right-content-message__message-text">${message.content}</div>`
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      datatype: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      console.log(data)
      var html = messageHTML(data);
      console.log(html)
      $('.right-content-message').prepend(html)
      $('#message_content').val('')
    })
    .fail(function(){
      alert('メッセージを入力してください');
    })
  })
})