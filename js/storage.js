function adicionar()
{
    nome = nome.value
    user = user.value
    password = password.value
    localStorage.setItem("nome", nome)
    localStorage.setItem("usuario", user)
    localStorage.setItem("password",password)

}

function ler()
{
    var obj = localStorage.getItem(nome.value);
    if(obj != null)
        alert(obj)
    else
        alert("O item procurado não existe.")
}

function limpar()
{
	localStorage.clear()
	alert("Limpo");
}
