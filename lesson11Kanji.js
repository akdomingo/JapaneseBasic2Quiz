(function() {
  var lesson11Kanji = [
    {
      kanji: '歌', //moved from lesson 7* (vocabs?)
      kana: 'うた',
      english: 'song',
    },
    {
      kanji: '白紙', //moved from lesson 9
      kana: 'はくし',
      english: ['blank sheet',],
    },
  ];

  var question = '';

  for (var i = 0; i < lesson11Kanji.length; i++) {
    question += '<div class="items">' +
                  '<div class="qs">' + lesson11Kanji[i].english + '</div>' +
                  '<input class="answer" type="text">' +
                  '<div class="rslt" id="result' + i + '"></div>' +
                '</div>'
  }

  document.getElementById("lesson11Kanji").innerHTML = question;

  //SUBMIT ANSWERS
  function submitAnswers() {
    var answers, textColor, text;

    answers = document.getElementsByClassName("answer");

    for(var j = 0, i = 0; j < answers.length, i < lesson11Kanji.length; j++, i++) {
      if (answers[j].value == lesson11Kanji[i].kana　|| answers[j].value == lesson11Kanji[i].kanji) {
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
