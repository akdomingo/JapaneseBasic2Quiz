//(function() {
  var lesson9Kanji = [
    {
      kanji: '午前',
      kana: 'ごぜん',
      english: ['A.M.',],
    },
    {
      kanji: '午前中',
      kana: 'ごぜんちゅう',
      english: ['in the morning',],
    },
    {
      kanji: '午後',
      kana: 'ごご',
      english: [
        'P.M.',
        'in the afternoon',
      ],
    },
    {
      kanji: '〜の後',
      kana: '〜のあと',
      english: ['after...',],
    },
    {
      kanji: '後で',
      kana: 'あとで',
      english: ['later',],
    },
    {
      kanji: '後ろ',
      kana: 'うしろ',
      english: [
        'back',
        'behind',
      ],
    },
    /*{
      kanji: '最後に',
      kana: 'さいごに',
      english: ['lastly',],
    },*/
    {
      kanji: '前',
      kana: 'まえ',
      english: [
        'before',
        'front',
      ],
    },
    {
      kanji: '名前',
      kana: 'なまえ',
      english: ['name',],
    },
    /*{
      kanji: '前売り',
      kana: 'まえうり',
      english: ['advanced sale',],
    },*/
    {
      kanji: '',
      kana: '',
      english: ['famous',],
    },
    {
      kanji: '',
      kana: '',
      english: [
        'business card',
        'name card',
      ],
    },
    {
      kanji: '',
      kana: '',
      english: ['full name',],
    },
    {
      kanji: '',
      kana: '',
      english: ['place name',],
    },
    {
      kanji: '',
      kana: '',
      english: ['white',],
    },
    {
      kanji: '',
      kana: '',
      english: ['white color',],
    },
    /*{
      kanji: '白鳥',
      kana: 'はくちょう',
      english: ['swan',],
    },*/
  ];
  
  var question = '';

  for (var i = 0; i < lesson9Kanji.length; i++) {
    question += '<div class="items">' +
                  '<div class="qs">' + lesson9Kanji[i].english + '</div>' +
                  '<input class="answer" type="text">' +
                  '<div class="rslt" id="result' + i + '"></div>' +
                '</div>'
  }

  document.getElementById("lesson9Kanji").innerHTML = question;

  //SUBMIT ANSWERS
  function submitAnswers() {
    var answers, textColor, text;

    answers = document.getElementsByClassName("answer");

    for(var j = 0, i = 0; j < answers.length, i < lesson9Kanji.length; j++, i++) {
      if (answers[j].value == lesson9Kanji[i].kana　|| answers[j].value == lesson9Kanji[i].kanji) {
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
