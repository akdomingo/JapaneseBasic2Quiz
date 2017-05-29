//(function() {
  var lesson10Kanji = [
    {
      kanji: '正午', //duplicate deleted from lesson 10
      kana: 'しょうご',
      english: [ 'noon',],
    },
    {
      kanji: '',
      kana: '',
      english: ['',],
    },
  ];

  var question = '';

  for (var i = 0; i < lesson10Kanji.length; i++) {
    question += '<div class="items">' +
                  '<div class="qs">' + lesson10Kanji[i].english + '</div>' +
                  '<input class="answer" type="text">' +
                  '<div class="rslt" id="result' + i + '"></div>' +
                '</div>'
  }

  document.getElementById("lesson10Kanji").innerHTML = question;

  //SUBMIT ANSWERS
  function submitAnswers() {
    var answers, textColor, text;

    answers = document.getElementsByClassName("answer");

    for(var j = 0, i = 0; j < answers.length, i < lesson10Kanji.length; j++, i++) {
      if (answers[j].value == lesson10Kanji[i].kana　|| answers[j].value == lesson10Kanji[i].kanji) {
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
//}());
