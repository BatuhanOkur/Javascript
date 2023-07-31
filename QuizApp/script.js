// OOP : Object Oriented Programing

function Soru(soruMetni, cevapSecenekleri, dogruCevap){
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
    
}

Soru.prototype.cevabiKontrolEt = function(cevap){
    return cevap === this.dogruCevap;
}

let sorular = [
    new Soru("Hangisi İstanbulu fetheden padişahtır?", {a: "Kanuni Sultan Süleyman", b: "Yavuz Sultan Selim", c: "Fatih Sultan Mehmed"}, "c"),
    new Soru("Aşağıdaki hangi veri tipi sözdizimsel verileri ifade eder?", {a: "decimal", b: "string", c: "int"}, "b"),
    new Soru("Hangisi pozitif bir tam sayıyı temsil eder?", {a: "-4 - (2 - 4)", b: "-(-2)", c: "-4"}, "b"),
    new Soru("Su maddenin hangi halini temsil eder?", {a: "Sıvı", b: "Gaz", c: "Katı"}, "a")
]

function Quiz(sorular)
{
    this.sorular = sorular;
    this.soruIndex = 0;
}

Quiz.prototype.soruGetir = function(){
    return this.sorular[this.soruIndex];
}

const quiz = new Quiz(sorular);

document.querySelector(".btn-start").addEventListener("click", function(){
    document.querySelector('.quiz_box').classList.add('active');
    soruGoster(quiz.soruGetir());
    document.querySelector(".next_btn").classList.remove("show");
});

document.querySelector(".next_btn").addEventListener('click',function(){
    if(quiz.sorular.length != quiz.soruIndex + 1)
    {
        quiz.soruIndex += 1;
        soruGoster(quiz.soruGetir());
        document.querySelector(".next_btn").classList.remove("show");
    }else{
        console.log("quiz bitti");
    }
});

const option_list = document.querySelector(".option_list");
const correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
const incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';
function soruGoster(soru){
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
    
    document.querySelector(".question-text").innerHTML = question;
    option_list.innerHTML = options;

    const option = option_list.querySelectorAll(".option");
    for(let opt of option){
        opt.setAttribute("onclick", "optionSelected(this)");
    }
}

function optionSelected(option){
    let cevap = option.querySelector("span b").textContent;
    let soru = quiz.soruGetir();
    if(soru.cevabiKontrolEt(cevap)){
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend",correctIcon);
        document.querySelector(".next_btn").classList.add("show");
    }else{
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend",incorrectIcon);
        document.querySelector(".next_btn").classList.add("show");
    }

    for(let i = 0; i < option_list.children.length; i++){
        option_list.children[i].classList.add('disabled');
    }
}