function Logar(){
            var Login = document.getElementById("Login").value;
            var Senha = document.getElementById("Senha").value;;
                    
           
            if (Login === "admin" && Senha === "Web123")
            {
               window.location.href = "Inicial/paginaInicial.html";
            }
            else{
                alert("Usuário e/ou Senha Inválidos!");
            }
        }