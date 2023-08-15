// OOP : Object Oriented Programing
const quiz = new Quiz(sorular);
const ui = new UI();

ui.btn_start.addEventListener("click", function(){
    ui.quiz_box.classList.add('active');
    startTimer(10);
    startTimerLine();
    ui.soruGoster(quiz.soruGetir());
    ui.soruSayisiGoster(quiz.soruIndex + 1, quiz.sorular.length);
    ui.btn_next.classList.remove("show");
});

ui.btn_next.addEventListener('click',function(){
    if(quiz.sorular.length != quiz.soruIndex + 1)
    {
        quiz.soruIndex += 1;
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(10);
        startTimerLine();
        ui.soruGoster(quiz.soruGetir());
        ui.soruSayisiGoster(quiz.soruIndex + 1, quiz.sorular.length);
        ui.btn_next.classList.remove("show");
    }else{
        clearInterval(counter);
        clearInterval(counterLine);
        ui.score_box.classList.add('active');
        ui.showScore(quiz.sorular.length, quiz.dogruCevapSayisi);
        ui.quiz_box.classList.remove('active');
    }
});

ui.btn_quit.addEventListener('click',function(){
    window.location.reload();
});

ui.btn_replay.addEventListener('click',function(){
    quiz.soruIndex = 0;
    quiz.dogruCevapSayisi = 0;
    ui.btn_start.click();
    ui.score_box.classList.remove('active');
});

function optionSelected(option){
    clearInterval(counter);
    clearInterval(counterLine);
    let cevap = option.querySelector("span b").textContent;
    let soru = quiz.soruGetir();
    if(soru.cevabiKontrolEt(cevap)){
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend",ui.correctIcon);
        ui.btn_next.classList.add("show");
        quiz.dogruCevapSayisi += 1;
    }else{
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend",ui.incorrectIcon);
        ui.btn_next.classList.add("show");
    }

    for(let i = 0; i < ui.option_list.children.length; i++){
        ui.option_list.children[i].classList.add('disabled');
    }
}

let counter;
function startTimer(time){
    counter= setInterval(timer,1000);

    function timer(){
        ui.time_second.textContent = time;
        time--;
        if(time < 0){
            clearInterval(counter);
            ui.time_text.textContent = "Süre Bitti";
            let cevap = quiz.soruGetir().dogruCevap;
            for(let option of ui.option_list.children)
            {
                if(option.querySelector("span b").textContent == cevap)
                {
                    option.classList.add("correct");
                    option.insertAdjacentHTML("beforeend",ui.correctIcon);
                }
               
                option.classList.add('disabled');
                
            }

            ui.btn_next.classList.add("show");
        }
    }
}

let counterLine;
function startTimerLine(){
    let lineWidth = 0;
    counterLine = setInterval(timer, 20);

    function timer(){
        lineWidth += 1;
        ui.time_line.style.width = lineWidth + "px";
        if(lineWidth == 550){
            clearInterval(counterLine);
        }
    }
}


