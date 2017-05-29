(function() {
  var lesson12Kanji = [
    {
      kanji: '神社', //duplicate removed from lesson 7
      kana: 'ジンジャー',
      english: [ 'shrine',],
    },
  ];

  var question = '';

  for (var i = 0; i < lesson12Kanji.length; i++) {
    question += '<div class="items">' +
                  '<div class="qs">' + lesson12Kanji[i].english + '</div>' +
                  '<input class="answer" type="text">' +
                  '<div class="rslt" id="result' + i + '"></div>' +
                '</div>'
  }

  document.getElementById("lesson12Kanji").innerHTML = question;

  //SUBMIT ANSWERS
  function submitAnswers() {
    var answers, textColor, text;

    answers = document.getElementsByClassName("answer");

    for(var j = 0, i = 0; j < answers.length, i < lesson12Kanji.length; j++, i++) {
      if (answers[j].value == lesson12Kanji[i].kana　|| answers[j].value == lesson12Kanji[i].kanji) {
        text = 'Correct!';
        textColor = 'correct';
      } else {
        text = 'Try Again.';
        textColor = 'incorrect';
      }

      document.getElementById("result"+i).innerHTML = text;
      document.getElementById("result"+i).className = textColor;

    }
  }

  document.getElementById('lessonContainer')
  .addEventListener('click', function(e) {
    console.log(e);
    var element = e.target;
    var isSubmitButton = element.classList.contains('check-button');

    if (isSubmitButton) {
      submitAnswers();
    }
  });
}());
