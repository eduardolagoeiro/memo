var jogar = document.querySelector('.jogar');
var temawarning = document.querySelector('.temawarning');

temawarning.addEventListener("click", function(){
    temawarning.classList.add('off');
});

jogar.addEventListener("click", function(event){
    var num = document.querySelector('#numcartas-input').value;
    if(num > 20){
        alert('No máximo 20 cartas u.u');
        return;
    }
    if(num < 4){
        alert('Com menos de 4 cartas não tem graça...');
        return;
    }
    if(num%2 != 0){
        alert('O jogo deve ter um número par de cartas!');
        return;
    }
    var checarEscolhaTipo = embaralhamento(num);
    if(!checarEscolhaTipo){
        temawarning.classList.remove('off');
    }else{
        document.querySelector('.menu').style.display = 'none';
        document.querySelector('footer').style.display = 'none';
    }
});


function embaralhamento(num){
    var cartas = document.querySelector('.cartas');
    var classList = cartas.classList;
    if(classList.length != 2) return false;
    var tipo = classList[1];
    tipo = tipo.substring(7, tipo.length);
    cartas.innerHTML = "";
    var arr = [];
    while(arr.length < num){
        var randomnumber = Math.ceil(Math.random()*num);
        if(arr.indexOf(randomnumber) > -1) continue;
        arr[arr.length] = randomnumber;
    }

    for(var i = 0; i < num; i++){
        var span = document.createElement("span");
        span.classList.add('carta');
        span.classList.add('carta-'+tipo)
        span.classList.add('desgira');
        span.classList.add('nojogo');
        if(parseInt(arr[i]) < 10){
            span.setAttribute("id", "carta0"+arr[i]);
        }else{
            span.setAttribute("id", "carta"+arr[i]);
        }
        cartas.appendChild(span);
    }
    return true;
}