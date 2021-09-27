const botao = document.querySelector("#botao");
const imagem1 = document.querySelector("#borboletasAbertura")
const texto1 = document.querySelector("#introducao")
const texto2 = document.querySelector("#descritor")

botao.addEventListener("click", function (){
    texto1.innerText = "Larva"  
    imagem1.src = "faseLagarta.jpg"
        texto2.innerText = "A fase larval é o momento de nutrição e crecimento"
        imagem1.addEventListener("mouseover", function() {
            imagem1.src = "lagarta.jpg"    
        })
        imagem1.addEventListener("mouseout", function() {
            imagem1.src = "faseLagarta.jpg"
        })
            botao.addEventListener("click", function (){                       
                    texto1.innerText = "Casúlo"
                    imagem1.src = "faseCasulo.jpg"
                    texto2.innerText = "A fase Casúlo é um momento de reflexões e intensas mudanças"
                    imagem1.addEventListener("mouseover", function() {
                        imagem1.src = "crisalidas.jpg"    
                     })            
                    imagem1.addEventListener("mouseout", function() {
                        imagem1.src = "faseCasulo.jpg"
                    })
            
            botao.addEventListener("click", function (){
                texto1.innerText = "Borboleta"
                imagem1.src = "faseBorboleta.jpg"
                texto2.innerText = "A fase Borboleta é o momento de mostrar ao mundo tudo que aprendeu e como isso te transformou."
                imagem1.addEventListener("mouseover", function() {
                    imagem1.src = "borboleta.jpg"    
                })
                imagem1.addEventListener("mouseout", function() {
                    imagem1.src = "faseBorboleta.jpg"
                })
        })          
    
    })       

})
