function UI(){
    this.btn_start = document.querySelector(".btn-start"),
    this.btn_next = document.querySelector(".next_btn"),
    this.option_list = document.querySelector(".option_list"),
    this.quiz_box = document.querySelector('.quiz_box'),
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>',
    this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>',
    this.question_text = document.querySelector(".question-text"),
    this.question_index = document.querySelector('.question_index'),
    this.score_box = document.querySelector('.score_box'),
    this.score_text = document.querySelector('.score_text'),
    this.btn_replay = document.querySelector('.btn_replay'),
    this.btn_quit = document.querySelector('.btn_quit'),
    this.time_text = document.querySelector('.time_text'),
    this.time_second = document.querySelector('.time_second'),
    this.time_line = document.querySelector('.time_line')
}

UI.prototype.soruGoster = function(soru){
    let question = `<span>${soru.soruMetni}</span>`;
    let options = '';
    for(let cevap in soru.cevapSecenekleri){
        options += 
            `
                <div class="option">
                    <span><b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]} </span>
                </div>
            `;
    }
    
    this.question_text.innerHTML = question;
    this.option_list.innerHTML = options;

    const option = this.option_list.querySelectorAll(".option");
    for(let opt of option){
        opt.setAttribute("onclick", "optionSelected(this)");
    }
}

UI.prototype.soruSayisiGoster = function(soruSirasi, toplamSoru){
    let tag= `<span class="badge bg-warning">${soruSirasi}/${toplamSoru}</span>`;
    this.question_index.innerHTML = tag;
}


UI.prototype.showScore = function(toplamSoru, dogruCevap){
    let tag= `<span>Quiz bitti! Toplam ${toplamSoru} sorudan ${dogruCevap} doğru cevap verdiniz.</span>`;
    this.score_text.innerHTML = tag;
}