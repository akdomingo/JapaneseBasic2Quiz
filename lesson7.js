(function() {
  /**
   * Wrapping everything in a function (read about IIFE) so we don't put too much
   * stuff in the global window object.
   *
   * @see https://www.javatpoint.com/javascript-global-variable
   *
   * Declaring plain variables outside - as you've previously done here -is not the best way to
   * organize code.
  */
  var lesson7 = [
    // Nouns
    {
      kanji: "姉",
      kana: "あね",
      english: [ "(my) older sister",],
    },
    {
      kana: "アパート",
      english: [ "apartment",],
    },
    {
      kanji: "妹",
      kana: "いもうと",
      english: [ "younger sister",],
    },
    {
      kana: "おじいさん",
      english: [
        "grandfather",
        "old man",
      ],
    },
    {
      kanji: "弟",
      kana: "おとうと",
      english: [ "younger brother",],
    },
    {
      kanji: "男の人",
      kana: "おとこのひと",
      english: [ "man",],
    },
    {
      kanji: "お兄さん",
      kana: "おにいさん",
      english: [ "older brother",],
    },
    {
      kanji: "お姉さん",
      kana: "おねえさん",
      english: [ "older sister",],
    },
    {
      kana: "おばあさん",
      english: [
        "grandmother",
        "old woman",
      ],
    },
    {
      kanji: "女の人",
      kana: "おんなのひと",
      english: [ "woman",],
    },
    {
      kanji: "会社", //also in kanji list
      kana: "かいしゃ",
      english: [ "company", ],
    },
    {//also in lesson 9
      kanji: "家族",
      kana: "かぞく",
      english: [ "family",],
    },
    {
      kanji: "兄弟",
      kana: "きょうだい",
      english: [ "brothers and sisters",],
    },
    {
      kanji: "国",
      kana: "くに",
      english: [
        "country",
        "place of origin",
      ],
    },
    {
      kana: "ゲーム",
      english: [ "game",],
    },
    {
      kana: "コンビニ",
      english: [ "convenience store",],
    },
    {
      kana: "サークル",
      english: [ "club activity",],
    },
    {
      kanji: "食堂",
      kana: "しょくどう",
      english: [
        "cafeteria",
        "dining commons",
      ],
    },
    {
      kanji: "父",　//also in kanji list
      kana: "ちち",
      english: [ "(my) father",],
    },
    /*{
      kana:　"ヂィーヴィーヂィ",
      english: [ "DVD",],
    },*/
    {
      kanji: "母", //also in kanji list
      kana: "はは",
      english: [ "(my) mother",],
    },
    {
      kanji: [
        "主人",
        "夫",
      ],
      kana: [
        "しゅじん",
        "おっと",
      ],
      english: [ "husband (yours)",],
    },
    {
      kanji: "ご主人",
      kana: "ごしゅじん",
      english: [ "husband",],
    },
    {
      kanji: "奥さん",
      kana: "おくさん",
      english: [ "wife",],
    },
    {
      kanji:　"妻",
      kana: "つま",
      english: [ "wife (yours)",],
    },
    {
      kanji: "髪",
      kana: "かみ",
      english: [ "hair",],
    },
    {
      kanji: "眉毛",
      kana: "まゆげ",
      english: [ "eyebrows",],
    },
    {
      kanji: "目",
      kana: "め",
      english: [ "eye",],
    },
    {
      kanji: "耳",
      kana: "みみ",
      english: [ "ear",],
    },
    {
      kanji: "鼻",
      kana: "はな",
      english: [ "nose",],
    },
    {
      kanji: "口",
      kana: "くち",
      english: [ "mouth",],
    },
    {
      kanji: "歯",
      kana: "は",
      english: [ "teeth",],
    },
    {
      kanji: "首",
      kana: "くび",
      english: [ "neck",],
    },
    {
      kanji: "指",
      kana: "ゆび",
      english: [ "fingers",],
    },
    {
      kanji: "手",
      kana: "て",
      english: [ "hand",],
    },
    {
      kanji: "手首",
      kana: "てくび",
      english: [ "wrist",],
    },
    {
      kanji: "頭",
      kana: "あたま",
      english: [ "head",],
    },
    {
      kanji: "顔",
      kana: "かお",
      english: [ "face",],
    },
    {
      kanji: "肩",
      kana: "かた",
      english: [ "shoulders",],
    },
    {
      kanji: "胸",
      kana: "むね",
      english: [ "chest",],
    },
    {
      kanji: "腕",
      kana: "うで",
      english: [ "arm",],
    },
    {
      kanji: "お腹",
      kana: "おなか",
      english: [ "stomach",],
    },
    {
      kanji: "背中",
      kana: "せなか",
      english: [ "back",],
    },
    {
      kanji: "お尻",
      kana: "おしり",
      english: [ "butt",],
    },
    {
      kanji: "膝",
      kana: "ひざ",
      english: [ "knee",],
    },
    {
      kanji: "足",
      kana: "あし",
      english: [ "foot",],
    },
    {
      kanji: "眼鏡",
      kana: "めがね",
      english: [ "glasses",],
    },
    // Adjectives
    {
      kanji: "頭がいい",
      kana: "あたまがいい",
      english: [
        "bright",
        "smart",
        "clever",
      ],
    },
    {
      kana: "かわいい",
      english: [ "cute",],
    },
    {
      kanji: "背が高い",
      kana: "せがたかい",
      english: [ "tall (stature)",],
    },
    {
      kanji: "背が低い",
      kana: "せがひくい",
      english: [ "short (stature)",],
    },
    {
      kanji: "長い",
      kana: "ながい",
      english: [ "long",],
    },
    {
      kanji: "速い",
      kana: "はやい",
      english: [ "fast",],
    },
    {
      kanji: "短い",
      kana: "みじかい",
      english: [ "short (length)",],
    },
    {
      kanji: [
        "親切な",
        "親切",
      ],
      kana: [
        "しんせつな",
        "しんせつ",
      ],
      english: [ "kind",],
    },
    {
      kanji: [
        "便利",
        "便利な",
      ],
      kana: [
        "べんり",
        "べんりな",
      ],
      english: [ "convenient",],
    },
    // Verbs
    {
      kanji: "歌う",
      kana: "うたう",
      english: [ "to sing",],
    },
    {
      kana: "かぶる",
      english: [ "to put on (a hat)",],
    },
    {
      kanji: "知る",
      kana: "しる",
      english: [ "to get to know",],
    },
    {
      kanji: "知っています",
      kana: "しっています",
      english: [ "I know",],
    },
    {
      kanji: "知りません",
      kana: "しりません",
      english: [ "I do not know",],
    },
    {
      kanji: "住む",
      kana: "すむ",
      english: [ "to live (in)",],
    },
    {
      kana: "はく",
      english: [
        "to wear (below your waist)",
        "to put on (items below your waist)",
      ],
    },
    {
      kanji: "太る",
      kana: "ふとる",
      english: [ "to gain weight",],
    },
    {
      kanji: "太っています",
      kana: "ふとっています",
      english: [ "to be on the heavy side",],
    },
    {
      kana: "かける",
      english: [
        "to put on glasses",
        "to wear glasses",
      ],
    },
    {
      kanji: "着る",
      kana: "きる",
      english: [
        "to wear (above your waist)",
        "to put on (clothes above your waist)",
      ],
    },
    {
      kanji: "勤める",
      kana: "つとめる",
      english: [ "to work for",],
    },
    {
      kana: "やせる",
      english: [ "to lose weight",],
    },
    {
      kana: "やせています",
      english: [ "to be thin",],
    },
    {
      kanji: "結婚する",
      kana: "けっこんする",
      english: [ "to get married",],
    },
    // Adverbs and Other Expressions
    {
      kana: "〜が",
      english: [ "...but",],
    },
    {
      kanji: "何も〜ない",
      kana: "なにも〜ない",
      english: [ "not...anything",],
    },
    {
      kanji: "〜人",
      kana: "〜にん",
      english: [ "counter for people",],
    },
    {
      kanji: "一人",
      kana: "ひとり",
      english: [ "one person",],
    },
    {
      kanji: "二人",
      kana: "ふたり",
      english: [
        "two people",
        "two persons",
      ],
    },
    {
      kanji: "別に〜ない",
      kana: "べつに〜ない",
      english: [ "nothing in particular",],
    },
    {
      kana: "もしもし",
      english: [ "Hello? (on the phone)",],
    },
    {
      kana: "もちろん",
      english: [ "of course",],
    },
    {
      kana: "よかったら",
      english: [ "if you like",],
    },
    {
      kanji: "〜の時",
      kana: "〜のとき",
      english: [ "when (I) was...",],
    },
    // Kanji
    {
      kanji: "東京",
      kana: "とうきょう",
      english: [ "Tokyo",],
    },
    {
      kanji: "京子",
      kana: "きょうこ",
      english: [ "Kyoko",],
    },
    {
      kanji: "京都",
      kana: "きょうと",
      english: [ "Kyoto",],
    },
    {
      kanji: "上京する",
      kana: "じょうきょうする",
      english: [ "to go to the capital",],
    },
    {
      kanji: "子ども",
      kana: "こども",
      english: [ "child",],
    },
    {
      kanji: "女の子",
      kana: "おんなのこ",
      english: [ "girl",],
    },
    {
      kanji: "男の子",
      kana: "おとこのこ",
      english: [ "boy",],
    },
    {
      kanji: "小さい",
      kana: "ちいさい",
      english: [ "small",],
    },
    {
      kanji: "小学校",
      kana: "しょうがっこう",
      english: [ "elementary school",],
    },
    {
      kanji: "小学生",
      kana: "しょうがくせい",
      english: [ "elementary school student",],
    },
    {
      kanji: "会う",
      kana: "あう",
      english: [ "to meet",],
    },
    {
      kanji: "神社",
      kana: "じんじゃ",
      english: [ "shrine",],
    },
    {
      kanji: "社会",
      kana: "しゃかい",
      english: [ "society",],
    },
    {
      kanji: "入社",
      kana: "にゅうしゃ",
      english: [ "entry to a company",],
    },
    {
      kanji: "お父さん",
      kana: "おとうさん",
      english: [ "father",],
    },
    {
      kanji: "父母",
      kana: "ふぼ",
      english: [ "father and mother",],
    },
    {
      kanji: "祖父",
      kana: "そふ",
      english: [ "grandfather (formal)",],
    },
    {
      kanji: "お母さん",
      kana: "おかあさん",
      english: [ "mother",],
    },
    {
      kanji: "母語",
      kana: "ぼご",
      english: [ "mother tongue",],
    },
    {
      kanji: "祖母",
      kana: "そぼ",
      english: [ "grandmother (formal)",],
    },
    {
      kanji: "高い",
      kana: "たかい",
      english: [
        "expensive",
        "high",
      ],
    },
    {
      kanji: "高校",
      kana: "こうこう",
      english: [ "high school",],
    },
    {
      kanji: "高校生",
      kana: "こうこうせい",
      english: [ "high school student",],
    },
    /*{
      kanji: "最高",
      kana: "saigou",
      english: [ "the best",],
    },*/
    {
      kanji: "学校",
      kana: "がっこう",
      english: [ "school",],
    },
    {
      kanji: "中学校",
      kana: "ちゅうがっこう",
      english: [ "junior high school",],
    },
    {
      kanji: "毎日",
      kana: "まいにち",
      english: [ "everyday",],
    },
    {
      kanji: "毎晩",
      kana: "まいばん",
      english: [ "every night",],
    },
    {
      kanji: "毎年",
      kana: [
        "まいねん",
        "まいとし",
      ],
      english: [ "every year",],
    },
    {
      kanji: "日本語",
      kana: "にほんご",
      english: [
        "Japanese language",
        "Japanese",
      ],
    },
    {
      kanji: "英語",
      kana: "えいご",
      english: [
        "English",
        "English language",],
    },
    {
      kanji: "敬語",
      kana: "けいご",
      english: [
        "honorific expressions",
        "formal speech pattern",
      ],
    },
    {
      kanji: "文学",
      kana: "ぶんがく",
      english: [ "literature",],
    },
    {
      kanji: "文字",
      kana: "もじ",
      english: [
        "letter",
        "character",
      ],
    },
    {
      kanji: "文化",
      kana: "ぶんか",
      english: [ "culture",],
    },
    {
      kanji: "文法",
      kana: "ぶんぽう",
      english: [ "grammar",],
    },
    {
      kanji: "帰る",
      kana: "かえる",
      english: [ "to return",],
    },
    {
      kanji: "帰国",
      kana: "きこく",
      english: [ "going home",],
    },
    /*{
      kanji: "帰宅",
      kana: "きたく",
      english: [ "returning home",],
    },*/
    {
      kanji: "帰り",
      kana: "かえり",
      english: [ "return",],
    },
    {
      kanji: "入る",
      kana: "はいる",
      english: [ "to enter",],
    },
    {
      kanji: [
        "入り口",
        "入口",
      ],
      kana: "いりぐち",
      english: [ "entrance",],
    },
    {
      kanji: "入れる",
      kana: "いれる",
      english: [ "to put something in",],
    },
    /*{
      kanji: "輸入",
      kana: "ゆにゅう",
      english: [ "import",],
    },*/
  ];

  var len = lesson7.length;
  var text = ''; // Always use single-quotes for strings.

  // Move the declaration & instantiation of i to the loop header(?) for one less
  // line of code.
  for (var i = 0; i < len; i++) {
      text += '<div class="qs">' + lesson7[i].english[0] + '</div>' +
              '<input class="qs-answer-7" type="text">' +
              '<br><br>';
  }

  document.getElementById("lesson7").innerHTML = text;
} ());