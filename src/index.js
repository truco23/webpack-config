import 'bootstrap/dist/css/bootstrap.min.css';

class Teste {
    constructor(dep1, dep2) {}
}
console.log('tamo junto');
document.querySelector('.teste').addEventListener('click', function() {

    console.log('Botão clicado');
    import('./controllers/VagasController.js')
    console.log(`${ base_url }/teste`);
})

async function name() {

    await console.log('async await ok')
}
name();
console.log('teste');

