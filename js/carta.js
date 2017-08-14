var cartas = document.querySelector('.cartas');
var vitoriawarning = document.querySelector('.vitoriawarning');

vitoriawarning.addEventListener("click", function(){
    vitoriawarning.classList.add('off');
    cartas.innerHTML = "<span class='carta nojogo carta-single'></span><!----><span class='carta nojogo carta-single'></span>";
    document.querySelector('.menu').style.display = '';
    document.querySelector('footer').style.display = '';
    
});

cartas.addEventListener("click", function(event){
    var alvo = event.target;
    if(alvo.classList[0] == 'cartas'){
        return;
    }
    if(alvo.classList.contains('apertando')){
        return;
    }
    alvo.classList.add('apertando');
    setTimeout(function(){
        alvo.classList.remove('apertando');
    }, 900);
    if(!alvo.classList.contains('apertada')){
        if(alvo.classList[alvo.classList.length-1] == 'foradojogo'){
            return;
        }else{
            var idAlvo = alvo.getAttribute('id');
            idAlvo = idAlvo.substring(idAlvo.length-2, idAlvo.length);
            var pulo = Math.floor(cartas.childElementCount/2);
            var id1 = parseInt(idAlvo);
            var apertada = document.querySelector('.apertada');
            alvo.classList.add('apertada');
            funcaoGirar(alvo, idAlvo, pulo, id1);
            if(apertada != null){
                var id2 = apertada.getAttribute('id');
                id2 = parseInt(id2.substring(id2.length-2, id2.length));
                if(id1 == id2-pulo || id1-pulo == id2){
                    console.log('sim');
                    setTimeout(function(){
                        alvo.classList.add('foradojogo');
                        apertada.classList.add('foradojogo');
                        var cartasForaDoBaralho = document.querySelectorAll('.foradojogo');
                        setTimeout(function(){
                            if(cartasForaDoBaralho.length == (pulo*2)){
                                cartasForaDoBaralho.forEach(function(carta){
                                    _funcaoDesgirar(carta);
                                    carta.classList.remove('foradojogo');
                                    /*
                                    var idCarta = carta.getAttribute('id');
                                    idCarta = idCarta.substring(idCarta.length-2, idCarta.length);
                                    numIdCarta = parseInt(idCarta);
                                    setTimeout(function(){
                                            carta.classList.add('apertada')
                                            carta.classList.remove('desgira');
                                            carta.classList.add('gira');
                                            var tema = carta.classList[1];
                                            tema = tema.substr(6,tema.length);
                                            setTimeout(function(){
                                                carta.classList.remove('nojogo');
                                                if(numIdCarta > pulo){
                                                    numIdCarta = numIdCarta - pulo;
                                                    if(numIdcarta < 10){
                                                        idCarta = '0'+numIdCarta;
                                                    }else{
                                                        idCarta = numIdCarta;
                                                    }
                                                }
                                                var urlImg = 'url(img/carta/'+tema+idCarta+'.png)';
                                                carta.style.backgroundImage = urlImg;
                                                carta.style.backgroundPosition = 'center';
                                                carta.style.backgroundSize =  'contain';
                                                carta.style.backgroundRepeat = 'no-repeat';
                                                carta.classList.remove('gira');
                                                carta.classList.add('desgira');
                                            }, 400);
                                    }, 900);
                                    setInterval(function(){
                                        setTimeout(function(){
                                            var thisidCarta = idCarta;
                                            var thisnumIdCarta = numIdCarta;                                            
                                            funcaoGirar(carta, thisidCarta, pulo, thisnumIdCarta);
                                        }, 900);
                                        _funcaoDesgirar(carta);
                                    }, 1800);
                                    */
                                });
                                vitoriawarning.classList.remove('off');
                            }
                        }, 400);
                    }, 700);
                }else{
                    console.log('nao');
                    setTimeout(function(){
                        funcaoDesgirar(alvo, apertada);
                    }, 1000);
                }
                apertada.classList.remove('apertada');
                alvo.classList.remove('apertada');
            }
        }
    }
});

function funcaoGirar(alvo, idAlvo, pulo, numIdAlvo){
    alvo.classList.add('apertada')
    alvo.classList.remove('desgira');
    alvo.classList.add('gira');
    var tema = alvo.classList[1];
    tema = tema.substr(6,tema.length);
    setTimeout(function(){
        alvo.classList.remove('nojogo');
        if(numIdAlvo > pulo){
            numIdAlvo = numIdAlvo - pulo;
            if(numIdAlvo < 10){
                idAlvo = '0'+numIdAlvo;
            }else{
                idAlvo = numIdAlvo;
            }
        }
        var urlImg = 'url(img/carta/'+tema+idAlvo+'.png)';
        alvo.style.backgroundImage = urlImg;
        alvo.style.backgroundPosition = 'center';
        alvo.style.backgroundSize =  'contain';
        alvo.style.backgroundRepeat = 'no-repeat';
        alvo.classList.remove('gira');
        alvo.classList.add('desgira');
    }, 400);
}

function _funcaoDesgirar(alvo){
    alvo.classList.remove('desgira');
    alvo.classList.add('gira');
    var style = window.getComputedStyle(alvo);
    var execTime = style.getPropertyValue('transition-duration');
    execTime = parseInt(execTime[0]);
    setTimeout(function(){
        alvo.classList.add('nojogo');
        alvo.style.backgroundImage = "";
        alvo.style.backgroundPosition = "";
        alvo.style.backgroundSize =  "";
        alvo.style.backgroundRepeat = "";
        alvo.style.backgroundColor = "";
        alvo.classList.remove('gira');
        alvo.classList.add('desgira');
    }, 400);
}

function funcaoDesgirar(alvo1, alvo2){
    _funcaoDesgirar(alvo1);
    _funcaoDesgirar(alvo2);
}

function checkwin(cartas, pulo){
    var venci = true;
    if(venci){
        setTimeout(function(){
            setTimeout(function(){
                cartas.innerHTML = "<span class='carta nojogo carta-single'></span><!----><span class='carta nojogo carta-single'></span>";
                document.querySelector('.menu').style.display = '';
                document.querySelector('footer').style.display = '';
            }, 300);
        }, 1000);
    }
}