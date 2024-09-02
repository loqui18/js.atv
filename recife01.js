function mudarCor() {
    
    var parag = document.getElementById('parag1');
    
    //Define cor
    var cores = ['purple', 'green', 'blue', 'yellow', 'purple', 'orange'];
    var corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    
    //Altera a cor do parágrafo
    parag.style.color = corAleatoria;
}
