window.onload = () => {
    const questionElm = document.getElementById('question');
    const answerElm   = document.getElementById('answer');
    const stopButton  = document.getElementById('stopButton');
    const showButton  = document.getElementById('showButton');
    const nextButton  = document.getElementById('nextButton');

    let interval;
    let question = questions[0]; // 現在の問題
    let questionShowNum = 0; // 問題文表示文字数

    stopButton.addEventListener('click', questionStop);
    showButton.addEventListener('click', answerShow);
    nextButton.addEventListener('click', next);

    /**
     * 問題文表示を停止
     */
    function questionStop(){
        clearInterval(interval);
    }

    /**
     * 問題文全文、解答を表示
     */
    function answerShow(){
        clearInterval(interval);
        questionElm.textContent = question.question;
        answerElm.textContent = question.answer;
    }

    /**
     * 次の問題を表示
     */
    function next(){
        question = questions[Math.floor(Math.random() * questions.length)]; // 次の問題を選択
        questionShowNum = 0;
        answerElm.textContent = '';
        clearInterval(interval);
        interval = setInterval(questionShow, 100);
    }

    /**
     * 問題文を徐々に表示
     */
    function questionShow(){
        questionElm.textContent = question.question.substr(0, questionShowNum);
        questionShowNum++;
    }
}
