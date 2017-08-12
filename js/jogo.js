var jogos = document.querySelector('.jogos');
jogos.addEventListener("click", function(event){
    var active = document.querySelector('.active');
    var cartas = document.querySelector('.cartas');
    var alvo = event.target;
    //nenhum clicado
    if(active == null){
        alvo.classList.add('active');
        cartas.classList.add('cartas-'+alvo.getAttribute('id'));
    }else{
        //clique no mesmo
        if(alvo == active){
            alvo.classList.remove('active');
            cartas.classList.remove('cartas-'+alvo.getAttribute('id'));
        //clique em um diferente
        }else{
            alvo.classList.add('active');
            cartas.classList.add('cartas-'+alvo.getAttribute('id'));
            active.classList.remove('active');
            cartas.classList.remove('cartas-'+active.getAttribute('id'))
        }
    }
});