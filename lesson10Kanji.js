(function() {
  var lesson10Kanji = [
    {
      kanji: '前売り', //duplicate deleted from lesson 9
      kana: 'まえうり',
      english: ['advanced sale',],
    },
    {
      kanji: '住む',
      kana: 'すむ',
      english: ['to live',],
    },
    {
      kanji: '住所', //copy from lesson 11 deleted
      kana: 'じゅうしょ',
      english: ['address',],
    },
    {
      kanji: '移住する',
      kana: 'いじゅうする',
      english: ['to immigrate',],
    },
    {
      kanji: 'お正月',
      kana: 'おしょうがつ',
      english: ['New Year',],
    },
    {
      kanji: '正午', //duplicate deleted from lesson 9
      kana: 'しょうご',
      english: [ 'noon',],
    },
    {
      kanji: '三年生',
      kana: 'さんねんせい',
      english: ['third year student',],
    },
    {
      kanji: '来年',
      kana: 'らいねん',
      english: ['next year',],
    },
    {
      kanji: '今年',
      kana: 'ことし',
      english: ['this year',],
    },
    {
      kanji: '年',
      kana: 'とし',
      english: ['year',],
    },
    {
      kanji: '売る',
      kana: 'うる',
      english: ['to sell',],
    },
    {
      kanji: '売店',
      kana: 'ばいてん',
      english: [
        'stand',
        ' stall',
      ],
    },
    {
      kanji: '自動販売機',
      kana: 'じどうはんばいき',
      english: ['vending machine',],
    },
    {
      kanji: '買う',
      kana: 'かう',
      english: ['to buy',],
    },
    {
      kanji: '買い物',
      kana: 'かいもの',
      english: ['shopping',],
    },
    {
      kanji: '売買',
      kana: 'ばいばい',
      english: ['selling and buying',],
    },
    {
      kanji: '町',
      kana: 'まち',
      english: ['town',],
    },
    {
      kanji: '北山町',
      kana: 'きたやまちょう',
      english: ['Kitayama Town',],
    },
    {
      kanji: '町長',
      kana: 'ちょうちょう',
      english: ['mayor of a town',],
    },
    {
      kanji: '長い',
      kana: 'ながい',
      english: ['long',],
    },
    {
      kanji: '長男',
      kana: 'ちょうなん',
      english: ['the eldest son',],
    },
    {
      kanji: '社長',
      kana: 'しゃちょう',
      english: ['company president',],
    },
    {
      kanji: '道',
      kana: 'みち',
      english: [
        'way',
        'road',
      ],
    },
    {
      kanji: '書道',
      kana: 'しょどう',
      english: ['calligraphy',],
    },
    {
      kanji: '柔道',
      kana: 'じゅうどう',
      english: ['judo',],
    },
    {
      kanji: '北海道',
      kana: 'ほっかいどう',
      english: ['Hokkaido',],
    },
    {
      kanji: '雪',
      kana: 'ゆき',
      english: ['snow',],
    },
    {
      kanji: '新雪',
      kana: 'しんせつ',
      english: ['new snow',],
    },
    {
      kanji: '雪だるま',
      kana: '雪だるま',
      english: ['snowman',],
    },
    {
      kanji: '立つ',
      kana: 'たつ',
      english: ['to stand',],
    },
    {
      kanji: '国立大学',
      kana: 'こくりつだいがく',
      english: ['national university',],
    },
    {
      kanji: '私立高校',
      kana: 'しりつこうこう',
      english: ['private high school',],
    },
    {
      kanji: '自分',
      kana: 'じぶん',
      english: ['oneself',],
    },
    {
      kanji: '自動車',
      kana: 'じどうしゃ',
      english: ['automobile',],
    },
    {
      kanji: '自転車',
      kana: 'じてんしゃ',
      english: ['bicycle',],
    },
    {
      kanji: '自由',
      kana: 'じゆう',
      english: ['freedom',],
    },
    {
      kanji: '夜',
      kana: 'よる',
      english: ['night',],
    },
    {
      kanji: '夜中',
      kana: 'よなか',
      english: ['midnight',],
    },
    {
      kanji: '今夜',
      kana: 'こんや',
      english: ['tonight',],
    },
    {
      kanji: '夜明け',
      kana: 'よあけ',
      english: ['dawn',],
    },
    {
      kanji: '朝',
      kana: 'あさ',
      english: ['morning',],
    },
    {
      kanji: '今朝',
      kana: 'けさ',
      english: ['this morning',],
    },
    {
      kanji: '朝食',
      kana: 'ちょうしょく',
      english: ['breakfast',],
    },
    {
      kanji: '毎朝',
      kana: 'まいあさ',
      english: ['every morning',],
    },
    {
      kanji: '持つ',
      kana: 'もつ',
      english: ['to hold',],
    },
    {
      kanji: '持ってくる',
      kana: 'もってくる',
      english: ['to bring',],
    },
    {
      kanji: '所持品',
      kana: 'しょじひん',
      english: ['belongings',],
    },
    {
      kanji: '気持ち',
      kana: 'きもち',
      english: ['feeling',],
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
