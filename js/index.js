
function validaBusca(){
    if(document.querySelector('#q').value == ''){
        alert("O campo de busca está vazio!");
        return false;
    }
}

document.querySelector('#form-busca').onsubmit = validaBusca;