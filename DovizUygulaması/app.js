const api_key = "api key here";
const url = `https://v6.exchangerate-api.com/v6/${api_key}`

const currency_one = document.getElementById('currency-one');
const currency_two = document.getElementById('currency-two');
const list_one = document.getElementById('list-one');
const list_two = document.getElementById('list-two');
const amount = document.getElementById('amount');
const calculate = document.getElementById('calculate');
const result = document.getElementById('result');


fetch(url + "/codes")
    .then(res => res.json())
    .then(data => {
        const items = data.supported_codes;
        let options;
        for(let item of items){
            options += `<option value=${item[0]}>${item[1]}</option>`;
        }

        list_one.innerHTML = options;
        list_two.innerHTML = options;
    });


calculate.addEventListener('click', ()=>{
    const doviz1 = currency_one.value;
    const doviz2 = currency_two.value;
    const miktar = amount.value;

    fetch(url + "/latest/" + doviz1)
        .then(res => res.json())
        .then(data => {
            currency_result = data.conversion_rates[doviz2];
            showExchangeResult(currency_result, miktar, doviz1, doviz2);
        });

});

const showExchangeResult = (res, amount, doviz1, doviz2) =>{
    last_amount = (res * amount).toFixed(2);
    let html = `
        <div class="card border-primary">
            <div class="card-body text-center" style="font-size: 30px;">
                ${amount} ${doviz1} = ${last_amount} ${doviz2}
            </div>
        </div>
    `;
    result.innerHTML = html;
};