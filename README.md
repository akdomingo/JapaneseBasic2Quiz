# JapaneseBasic2Quiz
Ver 3-2
2017-05-29
Notes:
1. JS for Lesson 7 slightly differs with Lesson 8-12
2. Lesson7.js
  - classList.add for "Correct!" (.correct) doesn't change back to red for "Try Again." (.incorrect)
3. Additional JS Practice/Improvements:
  - Complete question items for lessons 9-12
  - Back to Top function;
  - Loading lesson quizzes without navigating out of main page (one page layout only)

/*-------*/

Quiz covering Vocabulary and Kanji for Genki Lessons 7 to 12

Ver-2
1. Limiting quiz to Kanji only

2. Reworking user story for quiz:
  - START BUTTON
  - LOAD ALL or PER CARD?

3. Reference material: http://genki.japantimes.co.jp/self/verbadjective-conjugation-practice

4. ERROR when wrapping everything in function:
   "Uncaught ReferenceError: submitAnswers is not defined at HTMLButtonElement.onclick (index.html:18)"
   
   Suggested solution/s: 
   - a. Rewrite script according to link below: http://eloquentjavascript.net/10_modules.html
  
