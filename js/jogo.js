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
        //clique em um diferente
        if(!(alvo == active)){
            alvo.classList.add('active');
            cartas.classList.add('cartas-'+alvo.getAttribute('id'));
            active.classList.remove('active');
            cartas.classList.remove('cartas-'+active.getAttribute('id'))
        }
    }
});