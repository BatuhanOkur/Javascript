const word_el = document.getElementById('word');
const popup = document.getElementById('popup-container');
const message_el = document.getElementById('success-message');
const wrongLetters_el = document.getElementById('wrong-letters');
const items = document.querySelectorAll('.item');
const msg_el = document.getElementById('message');
const playAgainBtn = document.getElementById('play-again');


const correcLetters = [];
const wrongletters = [];
let selectedWord = getRandomWord();


function getRandomWord(){
    const words = ['javascript', 'java', 'python'];
    return words[Math.floor(Math.random()*words.length)];
}


function displayWord(){
    

    word_el.innerHTML = `
       ${selectedWord.split('').map(letter => `
            <div class="letter">
                ${correcLetters.includes(letter) ? letter : ''}
            </div>
       `).join('')} 

    `;
    
    const w = word_el.innerText.replace(/\n/g,'');
    if(w === selectedWord)
    {
        popup.style.display='flex';
        message_el.innerText = 'Tebrikler kazandınız!';
    }
}

function updateWrongLetters(){
    wrongLetters_el.innerHTML = `
        ${wrongletters.length > 0? '<h3>Hatalı Harfler</h3>':''}
        ${wrongletters.map(letter => `<span>${letter}</span>`)}
    `;

    items.forEach((item, index) => {
        const errorCount = wrongletters.length;        
        if(index < errorCount)
        {
            item.style.display = 'block';
        }else{
            item.style.display = 'none'
        }
    })

    if(wrongletters.length == items.length)
    {
        popup.style.display='flex';
        message_el.innerText='Kaybettiniz :('
    }
}

function displayMessage()
{
    msg_el.classList.add('show');
    setTimeout(function(){
        msg_el.classList.remove('show'); 
    },2000)
}

playAgainBtn.addEventListener('click', function(){
    correcLetters.splice(0);
    wrongletters.splice(0);

    selectedWord = getRandomWord();

    displayWord();
    updateWrongLetters();

    popup.style.display = 'none';
});

window.addEventListener('keydown', function(e){
    if(e.keyCode >= 65 && e.keyCode <= 90 && popup.style.display != 'flex')
    {
        const letter = e.key;

        if(selectedWord.includes(letter)){
            if(!correcLetters.includes(letter))
            {
                correcLetters.push(letter);
                displayWord();
            }else{
                displayMessage();
            }
        }else{
            if(!wrongletters.includes(letter)){
                wrongletters.push(letter);
                updateWrongLetters();
            }
            else{
                displayMessage();
            }
        }
    }
});

displayWord();