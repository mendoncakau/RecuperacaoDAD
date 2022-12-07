//GERMINAGRAM


// Capturando o botão "plus" que adiciona um novo post

const botaoAdicionar = document.querySelector(".plus");
botaoAdicionar.addEventListener("click", novoPost)


//---------------------------------------------------------------------------------------

/* Evento que adiciona evento ao botão "plus", o qual faz com que seja 
possível uma nova publicação, somente caso o usuário tenha feito login */

const insere = document.querySelector("aside")
var logIn = document.querySelector(".login")
// logIn.textContent = "Log out"// ************************
function novoPost(){ 
  if(logIn.textContent == "Log out"){
    insere.style.display = "flex"
  
  }else{
    alert("Para publicar, faça login.\nSe ainda não possui uma conta, cadastre-se!")
  }
}


//---------------------------------------------------------------------------------------

//Adicionado evento que ao clicar "fora" do formulário de novo post, o mesmo é fechado

const fechaPost = document.querySelector(".post-modal")
fechaPost.addEventListener('mouseup', canc)

function canc(e){
  var contain = document.querySelector('.form-post')
  if (!contain.contains(e.target)) {
      fechaPost.style.display = 'none';
  }
}


//---------------------------------------------------------------------------------------

//Função de fechar formulário de log in e sign out

function fecharForm(){
  areaComentario = document.querySelector(".asideForm")
  areaComentario.style.display = "none"
 }
//---------------------------------------------------------------------------------------

// Gerando formulário para log in

logIn.addEventListener("click", entrar)

function entrar(){
  if(logIn.textContent == "Log in"){
   var divLog = document.createElement("aside");
   divLog.className = "asideForm"
   divLog.innerHTML = 
   `
     <form id = "entraConta", class = "forms">
       <div style= "display: flex; margin-left: 170px">
       <h1>Log in</h1>
       <button type="button" class= "fechaComent" style="margin-left: 90px; width: 70px">X</button>
       </div>
       <br>
       <br>
       <label for="fNomeAcess"><h3>Nome de usuário </h3></label>
       <input type="text", name="fNomeAcess", id="fNomeAcess", size="44">
       <br> 
       <label for="fSenhaAcess"><h3>Senha</h3></label>
       <input type="password", name="fSenhaAcess", id="fSenhaAcess", size="44"> 
       <br>
       <br>
       <button type="button", name="fsubmit", class="buttonEnt" style = "width:20%; background-color: blue"><strong>Continuar</strong></button>
     </form>
   `

   divLog.style.position = "fixed"
   divLog.style.display = "flex"
   divLog.style.justifyContent = "space-evenly"
   divLog.style.alignItems = "flex-start"
   divLog.style.padding = "100px 0"
   divLog.style.left = "0%"
   divLog.style.top = "0%"
   divLog.style.width = "100%"
   divLog.style.height = "100%"
   divLog.style.overflow = "auto"
   divLog.style.backgroundColor = "rgba(0, 0, 0, 0.4)"
   divLog.style.zIndex = "3"

   document.querySelector("body").appendChild(divLog);

   const fechaFormLog = document.querySelector(".fechaComent")
   fechaFormLog.addEventListener("click", fecharForm)
   
  }else{
     let confirmacao = confirm("Deseja sair?")
     if(confirmacao == true){
       logIn.textContent = "Log in"
      }
    }
  
   var botaoLogIn = document.querySelector('.buttonEnt')
   botaoLogIn.addEventListener('click', () => {
     divLog.style.display = "none";
     logIn.textContent = "Log out"
    })
}


//---------------------------------------------------------------------------------------

// Gerando formulário para sign up

const signup = document.querySelector(".signup")
signup.addEventListener("click", cadastrar)

function cadastrar(){
  var divSign = document.createElement("aside");
  divSign.className = "asideForm";
  divSign.innerHTML = 
  `
  <form id = "entraConta", class = "forms">
  <div style= "display: flex; margin-left: 170px">
  <h1>Sign up</h1>
  <button type="button" class= "fechaComent" style="margin-left: 90px; width: 70px">X</button>
  </div>
  <br>
  <br>
  <label for="fCadAcess"><h3> Número de celular ou e-mail </h3></label>
  <input type="text", name="fCadAcess", id="fCadAcess", size="44">
  <br> 
  <label for="fNomeAcess"><h3>Nome completo</h3></label>
  <input type="text", name="fNomeAcess", id="fNomeAcess", size="44"> 
  <br> 
  <label for="fUsuAcess"><h3>Nome de usuário</h3></label>
  <input type="text", name="fUsuAcess", id="fUsuAcess", size="44">
  <br> 
  <label for="fSenhaAcess"><h3>Senha</h3></label>
  <input type="password", name="fSenhaAcess", id="fSenhaAcess", size="44">
  <br>
  <br>
  <button type="button", name="fsubmit", class="buttonEnt" style = "width:20%"><strong>Entrar</strong></button>
</form>
  `

  divSign.style.position = "fixed"
  divSign.style.display = "flex"
  divSign.style.justifyContent = "space-evenly"
  divSign.style.alignItems = "flex-start"
  divSign.style.padding = "100px 0"
  divSign.style.left = "0%"
  divSign.style.top = "0%"
  divSign.style.width = "100%"
  divSign.style.height = "100%"
  divSign.style.overflow = "auto"
  divSign.style.backgroundColor = "rgba(0, 0, 0, 0.4)"
  divSign.style.zIndex = "3"

  document.querySelector("body").appendChild(divSign);

  const fechaFormSign = document.querySelector(".fechaComent")
   fechaFormSign.addEventListener("click", fecharForm)

  var btnSign = document.querySelector('.buttonEnt')
  console.log(btnSign);

  btnSign.addEventListener('click', () => {
    divSign.style.display = "none";
    alert("Cadastro feito com sucesso!\n Faça seu login!")
  })
}


//---------------------------------------------------------------------------------------

// Transformando imagem
const imgPost = document.querySelector("#campo-foto")
imgPost.addEventListener("change", carregaImagem)
let urlImagemPost
function carregaImagem(e){
  urlImagemPost = e.target.files[0].name;
  const imgGera = document.createElement("img");
  imgGera.setAttribute("src", `${urlImagemPost}`);
  imgGera.classList.add("imagem-form");
  const containerImagem = document.querySelector(".container-imagem")
  imgPost.style.display = "none";
  containerImagem.appendChild(imgGera)
}

// //---------------------------------------------------------------------------------------
// Publicando post

var btnFormPost = document.querySelector(".postar")

btnFormPost.addEventListener('click', (e) => 
  {
    
    let confirmaPost = confirm("Desja concluir a publicação?")
    if(confirmaPost == true){
     e.preventDefault()
     dataAgora = new Date().toLocaleTimeString()
     var postInsere = document.createElement('div')
     var texto = document.querySelector(".comentario-form")
     postInsere.className = "post-info"
     postInsere.innerHTML = 
      `
       <div class="usuario-info">
         <div class="avatar"></div>
           <div class="nome-hora">
             <p class="nome">Joana da Silva Peixoto</p>
             <p class="hora">${dataAgora}</p>
           </div>
         </div>
         <textarea class="comentario" style="resize: none; border: none; height: 175px; overflow-y: 70%; overflow: auto">
           ${texto.value}
         </textarea>
       </div>
       <img class="post-imagem"; style = " max-height: 700px" src="${urlImagemPost}" alt="" />
       <div class="post-interacoes">
         <div class="container-like">
           <img class="like-btn" src="like.svg" alt="like" />
           <p class="descricao-like">Curtir</p>
         </div>
         <div class="container-coment">
           <img class="coment-btn" src="comentario.svg" alt="like" />
           <p class="descricao-comentario">Comentários</p>
         </div>
       </div>
      `

     postInsere.style.backgroundColor = "white";
     postInsere.style.height = "fit-content";
     postInsere.style.borderRadius = "5px";
     postInsere.style.boxShadow = "0px 0px 5px black"

     document.querySelector(".secao-posts").appendChild(postInsere);




     //---------------------------------------------------------------------------------------

     //Função de curtir que é atribuída a todos os posts gerados
     const curtida = postInsere.querySelector(".container-like")
     curtida.addEventListener("click", curtir)

     function curtir(){
       const likeDescricao = postInsere.querySelector(".descricao-like")
       const simbLike = postInsere.querySelector(".like-btn")
       if(likeDescricao.textContent == "Curtir"){
         likeDescricao.textContent = "Descurtir"
         likeDescricao.style.color = "blue"
         simbLike.setAttribute("src", "like-solid.svg")
       }else{
         likeDescricao.textContent = "Curtir"
         likeDescricao.style.color = "#888"
         simbLike.setAttribute("src", "like.svg")
        }
      }

      // Comentar

      const comentario = postInsere.querySelector(".container-coment")
      comentario.addEventListener("click", comentar)

      function comentar(){
       const comentDescricao = postInsere.querySelector(".descricao-comentario")
       const simbComent = postInsere.querySelector(".coment-btn")
       comentDescricao.style.color = "blue"
       simbComent.setAttribute("src", "comentarios.png")
       const abaComent = document.createElement("aside")
       abaComent.className = "asideComentario";
       abaComent.innerHTML = 
       `
         <form class = "comente" style="width:50%">
           <div style= "display: flex; margin-left: 130px">
             <h1>Comentários</h1>
             <button type = "button "class= "fechaComent" style="margin-left: 90px; width: 70px">X</button>
           </div>
           <div class = "comentarios">
             <div class = "comentariosFeitos" style = "overflow: auto; height: 50vh; border: solid 1px #888; border-radius: 7px">
               <div class="post-info">
                 <div class="usuario-info">
                   <div class="avatar"></div>
                      <div class="nome-hora">
                       <p class="nome">Joana da Silva Peixoto</p>
                       <p class="hora">${dataAgora}</p>
                     </div>
                   </div>
                   <p class="comentario">
                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
          veritatis ratione sit eveniet magni, velit omnis quo quis
          temporibus eaque architecto quos ex aliquam iure, adipisci
          praesentium quidem, quia voluptate.
        </p>
      </div>
      <div class="post-info">
      <div class="usuario-info">
        <div class="avatar"></div>
        <div class="nome-hora">
          <p class="nome">Joana da Silva Peixoto</p>
          <p class="hora">${dataAgora}</p>
        </div>
      </div>
      <p class="comentario">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
        veritatis ratione sit eveniet magni, velit omnis quo quis
        temporibus eaque architecto quos ex aliquam iure, adipisci
        praesentium quidem, quia voluptate.
      </p>
      </div>
      <div class="post-info">
     <div class="usuario-info">
      <div class="avatar"></div>
      <div class="nome-hora">
        <p class="nome">Joana da Silva Peixoto</p>
        <p class="hora">${dataAgora}</p>
      </div>
      </div>
     <p class="comentario">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
      veritatis ratione sit eveniet magni, velit omnis quo quis
      temporibus eaque architecto quos ex aliquam iure, adipisci
      praesentium quidem, quia voluptate.
     </p>
     </div>
     <div class="post-info">
     <div class="usuario-info">
     <div class="avatar"></div>
     <div class="nome-hora">
      <p class="nome">Joana da Silva Peixoto</p>
      <p class="hora">${dataAgora}</p>
     </div>
     </div>
     <p class="comentario">
     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
     veritatis ratione sit eveniet magni, velit omnis quo quis
     temporibus eaque architecto quos ex aliquam iure, adipisci
     praesentium quidem, quia voluptate.
     </p>
     </div>
         </div>
       <br>
       <br>
       <div style="display:flex">
         <textarea placeholder= " Comente aqui" style="resize: none; width: 100%" id = "comenteAqui"></textarea>
          <button type="button"; id = "btnEnvioComentario"; style="margin-left: 3px; width: 15%">
          <img style="width:28px; padding-top:8px; transform: rotate(45deg);" src="envio.png" alt="enviaComent"/>
          </button>
       </div>
      </form>
   `
   abaComent.style.position = "fixed"
   abaComent.style.display = "flex"
   abaComent.style.justifyContent = "space-evenly"
   abaComent.style.alignItems = "flex-start"
   abaComent.style.padding = "100px 0"
   abaComent.style.left = "0%"
   abaComent.style.top = "0%"
   abaComent.style.width = "100%"
   abaComent.style.height = "100%"
   abaComent.style.overflow = "auto"
   abaComent.style.backgroundColor = "rgba(0, 0, 0, 0.4)"
   abaComent.style.zIndex = "3"

   document.querySelector("body").appendChild(abaComent);

    const fechaComent = document.querySelector(".fechaComent")
    fechaComent.addEventListener("click", fecharComentario)

    function fecharComentario(){
      const areaComentario = document.querySelector(".asideComentario")
      areaComentario.style.display = "none"
      comentDescricao.style.color = "#888"
      simbComent.setAttribute("src", "comentario.svg")
    }


    //Adiciona comentário
    const btnEnvioComentario = document.querySelector("#btnEnvioComentario")
    btnEnvioComentario.addEventListener("click", enviarComentario)

    function enviarComentario(){
      const pegaComentario = document.querySelector("#comenteAqui")
      const novoComentario = document.createElement("div")
      novoComentario.className = "post-info"
      novoComentario.innerHTML =
      `
       <div class="usuario-info">
       <div class="avatar"></div>
         <div class="nome-hora">
           <p class="nome">Joana da Silva Peixoto</p>
           <p class="hora">${dataAgora}</p>
         </div>
       </div>
         <p class="comentario">
           ${pegaComentario.value}
         </p>
      `
      document.querySelector(".comentariosFeitos").appendChild(novoComentario);
      pegaComentario.value = ""
    }   


}

    } 
  }
  
)

btnFormPost.addEventListener('click', cancelaPostar)
function cancelaPostar(){
  var contain = document.querySelector('.post-modal');
  contain.style.display = 'none';
}


// --------------------------------

