// 正解の答え
let json_question = {
  "key": "v",
  "ctrl": true,
  "meta": false,
  "alt": false,
  "shift": false
}

let questions =  [{
  "id": "1",
  "category_id": "1",
  "question_value": "Vscodeの検索する際のショートカットキー はなんですか",
  "answer": "c",
  "shift": false
},
{
  "id": "2",
  "category_id": "1",
  "question_value": "Vscodeの全選択をする際のショートカットキー はなんですか",
  "answer": "ctrl + a",
  "shift": false
},
]

// window.getElementById("question").textContent(questions[0].question_value);
$(document).ready(function () {
  $("#question").text(questions[0].question_value)
});

window.addEventListener("keypress", function(e){
    questions.forEach(question => {
      console.log(question.answer);
      console.log(e);
      if (e.key == question.answer && e.ctrlKey){  //答えのキー
        alert("正解");
      }
    })
  });