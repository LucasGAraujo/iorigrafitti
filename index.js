window.onscroll = function() {scrollFunction()};
    
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("ioriHeader").classList.add("fixed");
    } else {
        document.getElementById("ioriHeader").classList.remove("fixed");
    }
}
function openModal(depoimentoId) {
document.getElementById(depoimentoId + "Modal").style.display = "block";
}

// Função para fechar o modal
function closeModal(depoimentoId) {
document.getElementById(depoimentoId + "Modal").style.display = "none";
}

// Fecha o modal quando o usuário clicar fora dele
window.onclick = function(event) {
if (event.target.classList.contains('modal')) {
    event.target.style.display = "none";
}

}

function changeColor(color) {
    
    document.body.style.backgroundColor = color;
    document.body.style.color ="green !important";

        document.getElementById("iorigrafitti-text").innerText = "Iori Gamex";
        document.getElementById("nome1").innerText = "Bonus";
        document.getElementById("nome2").innerText = "Shesco";
        document.getElementById("nome3").innerText = "Rotk";
        document.getElementById("comentario1").innerText = "Nossa crew Gamex Graffiti é uma família de artistas urbanos apaixonados pela expressão artística nas ruas. Juntos, exploramos a cidade como nosso playground criativo, deixando nossa marca vibrante e colorida em cada parede que tocamos.";
        document.getElementById("comentario2").innerText = "A Gamex Graffiti é mais do que apenas uma crew de grafiteiros; somos agentes de mudança em nossas comunidades. Através de projetos colaborativos e intervenções artísticas, buscamos inspirar, empoderar e conectar pessoas através da arte urbana.";
        document.getElementById("comentario3").innerText = "Na Gamex Graffiti, cada membro traz sua própria voz e estilo único para o coletivo, enriquecendo nossa expressão coletiva e ampliando os limites da arte de rua. Somos uma fusão de culturas, perspectivas e talentos, unidos pelo amor pelo spray e pela paixão pelo grafite.";
        document.getElementById("classegamex").innerText= "Crew Gamex"
        document.getElementById("sobregamex").innerText= "Na Gamex, somos mais do que uma simples crew de grafiteiros - somos uma família. Em nosso mundo de arte urbana, todos nós nos fundimos em uma única unidade, onde a individualidade se dissolve em favor do coletivo. Unidos pelo amor à expressão criativa e pela paixão por colorir as ruas, cada um de nós contribui com seu talento único para uma causa maior.Nossa força reside na diluição do ego, deixando de lado o desejo individual em prol do bem comum. Aqui, cada membro é valorizado não apenas por suas habilidades artísticas, mas "
        document.getElementById("sobregamex2").innerText= "também por seu compromisso com o próximo. Somos solidários, apoiando-nos mutuamente em cada traço, cada spray, cada obra-prima que criamos juntos.Na Gamex, acreditamos que a verdadeira magia acontece quando nos unimos como um só. Somos uma sinfonia de cores, formas e ideias, tecendo a tapeçaria da nossa comunidade com amor, respeito e inclusão. Juntos, somos mais do que a soma de nossas partes - somos uma manifestação viva do poder da colaboração e da camaradagem. Porque na Gamex, todos somos um só."
        var elementos = document.getElementsByClassName("Sobre-iori");
        for (var i = 0; i < elementos.length; i++) {
            
            elementos[i].style.height = "70vh";
        }
        var imagem = document.getElementById("imagemgamex");
        var novoCaminho = "img/gamex.png";
        imagem.src = novoCaminho;
        var imagemgamex1 = document.getElementById("altera1");
        var novoCaminho = "gamex/gamex1.png";
        imagemgamex1.src = novoCaminho;
        var imagemgamex2 = document.getElementById("altera2");
        var novoCaminho = "gamex/gamex2.png";
        imagemgamex2.src = novoCaminho;
        var imagemgamex3 = document.getElementById("altera3");
        var novoCaminho = "gamex/gamex3.png";
        imagemgamex3.src = novoCaminho;
        var imagemgamex4 = document.getElementById("altera4");
        var novoCaminho = "gamex/gamex4.png";
        imagemgamex4.src = novoCaminho;
        var imagemgamex5 = document.getElementById("altera5");
        var novoCaminho = "gamex/gamex5.png";
        imagemgamex5.src = novoCaminho;
        var imagemgamex6 = document.getElementById("altera6");
        var novoCaminho = "gamex/gamex6.png";
        imagemgamex6.src = novoCaminho;
        var imagemgamex7 = document.getElementById("altera7");
        var novoCaminho = "gamex/gamex7.png";
        imagemgamex7.src = novoCaminho;
        var imagemgamex8 = document.getElementById("altera8");
        var novoCaminho = "gamex/gamex8.png";
        imagemgamex8.src = novoCaminho;
        var imagemgamex9 = document.getElementById("altera9");
        var novoCaminho = "gamex/gamex9.png";
        imagemgamex9.src = novoCaminho;
}

function ScrollDown(){
    
    sobrenos.addEventListener("click", () =>{
        window.scrollTo({
                top:1700,
                behavior:"smooth"
            })
        })
    }
ScrollDown();
