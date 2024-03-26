const input = document.querySelector('input');

const clear = document.querySelector('.clear-key').addEventListener('click', function(){
    input.value = '';
})

function tambah_nomer(values){
    input.value += values;
}
function hasil(){
    if(input.value.length > 2){
        let result = eval(input.value);
        input.value = result;
    }else{
        alert('Selesaikan input terlebih dahuluuu >_<');
    }
}
function HapusAwal(){
    switch(input.value){
        case 'true':
        input.value = '';
        break;
        case 'false':
        input.value = '';
        break;
        case 'Infinity':
        input.value = '';
        break;
        default:
        let Update = input.value.slice(0, -1);
        input.value = Update;
    }
}