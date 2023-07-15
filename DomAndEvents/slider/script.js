var models = [
  {
    name : 'Volvo XC90',
    source : 'img/volvoxc90.jpg',
    link : 'https://www.volvocars.com/tr/cars/xc90/'
  } ,
  {
    name : 'Fiat Doblo',
    source : 'img/fiatdoblo.jpg',
    link : 'https://www.fiatprofessional.com/tr/doblo-combi/yeni-doblo'
  } ,
  {
    name : 'Fiat Egea',
    source : 'img/fiategea.png',
    link : 'https://otomobil.fiat.com.tr/egea/egea-sedan'
  } ,
  {
    name : 'Honda Civic',
    source : 'img/hondacivic.jpg',
    link : 'https://www.honda.com.tr/otomobil/modeller/honda-civic-sedan'
  } 
];
var index = 0;
var interval;
var settings =
{
    duration: '1000',
    random : false
}
init(settings);
function init(settings)
{
    var prev;
    interval = setInterval(function(){
        if(settings.random)
        {
            do{
                index = Math.floor(Math.random() * models.length);
            }while(index == prev)
            prev = index;
        }else{
            changeIndexAuto();
        }
        showSlide(index);
    },settings.duration);
}

function changeIndexAuto()
{
    index ++;
    index = index == models.length ? 0 : index;
}

function changeIndex(id)
{
    if(id == 'left')
    {
        index --;
        index = index < 0 ? models.length - 1 : index;
    }
    else if(id == 'right')
    {
        index ++;
        index = index == models.length ? 0 : index; 
    }

    console.log(index);
    showSlide(index);
}

function showSlide(index)
{
    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src',models[index].source);

    document.querySelector('.card-link').setAttribute('href',models[index].link);
}

document.querySelectorAll('.arrows').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    });
});

document.querySelectorAll('.arrows').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    });
});
