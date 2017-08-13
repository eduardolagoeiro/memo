var cartas = document.querySelector('.cartas');

cartas.addEventListener("click", function(event){
    var alvo = event.target;
    if(!alvo.classList.contains("apertada")){
        if(alvo.classList[0] == 'cartas' || alvo.classList[alvo.classList.length-1] == 'foradojogo'){
            return;
        }else{
            var idAlvo = alvo.getAttribute('id');
            idAlvo = idAlvo.substring(idAlvo.length-2, idAlvo.length);
            var pulo = Math.floor(cartas.childElementCount/2);
            var id1 = parseInt(idAlvo);
            funcaoGirar(alvo, idAlvo, pulo, id1);
            var apertada = document.querySelector('.apertada');
            alvo.classList.add('apertada');
            if(apertada != null){
                var id2 = apertada.getAttribute('id');
                id2 = parseInt(id2.substring(id2.length-2, id2.length));
                if(id1 == id2-pulo || id1-pulo == id2){
                    console.log('sim');
                    setTimeout(function(){
                        alvo.classList.add('foradojogo');
                        apertada.classList.add('foradojogo');
                    }, 700);
                }else{
                    console.log('nao');
                    setTimeout(function(){
                        funcaoDesgirar(alvo, apertada);
                    }, 1000);
                }
                apertada.classList.remove('apertada');
                alvo.classList.remove('apertada');
                var cartasForaDoBaralho = document.querySelectorAll('.foradojogo');
                if(cartasForaDoBaralho.length == (pulo*2)-2){
                    setTimeout(function(){
                        alert('Você venceu!');
                        setTimeout(function(){
                            cartas.innerHTML = "<span class='carta nojogo carta-single'></span><!----><span class='carta nojogo carta-single'></span>";
                            document.querySelector('.menu').style.display = '';
                            document.querySelector('footer').style.display = '';
                        }, 300);
                    }, 1000);
                }
            }
        }
    }
});

function funcaoGirar(alvo, idAlvo, pulo, numIdAlvo){
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
        console.log(urlImg);
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