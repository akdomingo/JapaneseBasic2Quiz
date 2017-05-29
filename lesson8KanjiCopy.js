(function(){
  var lesson8Kanji = [

    {
      kanji: '会社員', //duplicate deleted from lesson 7
      kana: 'かいしゃいん',
      english: [ 'office worker', ],
    },
    /*{
      kanji: '店員',
      kana: 'てんいん',
      english: [ 'store clerk',],
    },*/
    {
      kanji: '会員',
      kana: 'かいいん',
      english: [ 'member',],
    },
    {
      kanji: '駅員',
      kana: 'えきいん',
      english: [ 'station staff',],
    },
    {
      kanji: '新しい',
      kana: 'あたらしい',
      english: [ 'new',],
    },
    {
      kanji: '新聞',
      kana: 'しんぶん',
      english: [ 'newspaper',],
    },
    /*{
      kanji: '新幹線',
      kana: 'しんかんせん',
      english: [ 'bullet train',],
    },
    {
      kanji: '新鮮な',
      kana: 'しんせんな',
      english: [ 'fresh',],
    },*/
    {
      kanji: '聞く',
      kana: 'きく',
      english: [ 'to listen',],
    },
    {
      kanji: '聞こえる',
      kana: 'きこえる',
      english: [ 'can be heard',],
    },
    {
      kanji: '作る',
      kana: 'つくる',
      english: [ 'to make',],
    },
    {
      kanji: '作文',　//duplicate deleted from lesson 7
      kana: 'さくぶん',
      english: [
        'essay',
        'composition',
      ],
    },
    /*{
      kanji: '作品',
      kana: 'さくひん',
      english: [ 'artistic piece',],
    },*/
    {
      kanji: '作者',
      kana: 'さくしゃ',
      english: [ 'author',],
    },
    {
      kanji: '仕事',
      kana: 'しごと',
      english: [ 'job',],
    },
    /*{
      kanji: '仕返し',
      kana: 'しかえし',
      english: [ 'revenge',
    },*/
    {
      kanji: '仕える',
      kana: 'つかえる',
      english: [
        'to serve',
        'to work under',
      ],
    },
    {
      kanji: '事',
      kana: 'こと',
      english: [ 'thing',],
    },
    {
      kanji: '火事',
      kana: 'かじ',
      english: [ 'fire',],
    },
    {
      kanji: '食事',
      kana: 'しょくじ',
      english: [ 'meal',],
    },
    /*{
      kanji: '返事',
      kana: 'へんじ',
      english: [ 'reply',],
    },*/
    {
      kanji: '電車',
      kana: 'でんしゃ',
      english: [ 'train',],
    },
    {
      kanji: '電気',
      kana: 'でんき',
      english: [ 'electricity',],
    },
    {
      kanji: '電話', //to delete duplicate in lesson 9
      kana: 'でんわ',
      english: [ 'telephone',],
    },
    /*{
      kanji: '電池',
      kana: 'でんち',
      english: [ 'battery',],
    },
    {
      kanji: '駐車場',
      kana: 'ちゅうしゃじょう',
      english: [ 'parking lot',],
    },
    {
      kanji: '電子辞書', //duplicate deleted from lesson 7
      kana: 'でんしじしょ',
      english: [ 'electronic dictionary',],
    },*/
    {
      kanji: '車',
      kana: 'くるま',
      english: [ 'car',],
    },
    {
      kanji: '自転車',
      kana: 'じてんしゃ',
      english: [ 'bicycle',],
    },
    {
      kanji: '車いす',
      kana: 'くるまいす',
      english: [ 'wheel chair',],
    },
    {
      kanji: '休む',
      kana: 'やすむ',
      english: [
        'to rest',
        'to be absent',
      ],
    },
    {
      kanji: '休み',
      kana: 'やすみ',
      english: [
        'holiday',
        'absence',
      ],
    },
    {
      kanji: '言う',
      kana: 'いう',
      english: [ 'to say',],
    },
    {
      kanji: '言語学',
      kana: 'げんごがく',
      english: [ 'linguistics',],
    },
    /*{
      kanji: '方言',
      kana: 'ほうげん',
      english: [ 'dialect',],
    },
    {
      kanji: '言葉',
      kana: 'ことば',
      english: [
        'word',
        'language',
      ],
    },
    {
      kanji: '読み物',
      kana: 'よみもの',
      english: [ 'reading matter',],
    },*/
    {
      kanji: '読む',
      kana: 'よむ',
      english: [ 'to read',],
    },
    {
      kanji: '思う',
      kana: 'おもう',
      english: [ 'to think',],
    },
    {
      kanji: '思い出す',
      kana: 'おもいだす',
      english: [
        'to recall',
        'to remember',
      ],
    },
    /*{
      kanji: '不思議な',
      kana: 'ふしぎな',
      english: [ 'mysterious',],
    },*/
    {
      kanji: '次',
      kana: 'つぎ',
      english: [ 'next',],
    },
    {
      kanji: '次女',
      kana: 'じじょ',
      english: [ 'second daughter',],
    },
    {
      kanji: '目次',
      kana: 'もくじ',
      english: [ 'table of contents',],
    },
    {
      kanji: '次回',
      kana: 'じかい',
      english: [ 'next time',],
    },
    {
      kanji: '何',
      kana: 'なに',
      english: [ 'what',],
    },
    {
      kanji: '何時',
      kana: 'なんじ',
      english: [ 'what time',],
    },
    {
      kanji: '何人',
      kana: 'なんにん',
      english: [ 'how many people',],
    },
    {
      kanji: '何か',
      kana: 'なにか',
      english: [ 'something',],
    },
  ];

  var question = '';

  for (var i = 0; i < lesson8Kanji.length; i++) {
    question += '<div class="items">' +
                  '<div class="qs">' + lesson8Kanji[i].english + '</div>' +
                  '<input class="answer" type="text">' +
                  '<div class="rslt" id="result' + i + '"></div>' +
                '</div>'
  }

  document.getElementById("lesson8Kanji").innerHTML = question;

  //SUBMIT ANSWERS
  function submitAnswers() {
    var answers, textColor, text;

    answers = document.getElementsByClassName("answer");

    for(var j = 0, i = 0; j < answers.length, i < lesson8Kanji.length; j++, i++) {
      if (answers[j].value == lesson8Kanji[i].kana　|| answers[j].value == lesson8Kanji[i].kanji) {
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
