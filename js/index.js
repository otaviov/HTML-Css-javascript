
document.querySelector('#form-busca').onsubmit = function(){
    if(document.querySelector('#q').value == ''){
        document.querySelector('#form-busca').style.background = 'red';
        return false;
       
    }
}

var myElement = document.querySelector('#form-busca');

myElement.onfocus = function() {
    console.log('onfocus event occurred.');
};