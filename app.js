let numeroSecreto=0;
let intentos=0;
let listaNumerosSecretos = [];
let numeroMaximo = 10;

function asignarElementoVariable(elemento,texto)
{
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento()
{
    let numeroDeUsuario = document.getElementById('valorUsuario').value;
    if (numeroDeUsuario==numeroSecreto)
        {
            asignarElementoVariable('p',`Acertastes el numero en ${intentos} ${intentos>1 ? 'vez':'veces'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }
    else
        {
            if(numeroDeUsuario>numeroSecreto)
                {
                    asignarElementoVariable('p','El numero secreto es menor');
                }
            else
                {
                    asignarElementoVariable('p','El numero secreto es mayor');
                }
        intentos++;
        limpiarCaja();

        }

    return;
}

function numeroAleatorio()
{
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSecretos);

    if(listaNumerosSecretos.length == numeroMaximo)
        {
            asignarElementoVariable('p','Se sortearon todos los numeros');
        }
    else
        {
            if(listaNumerosSecretos.includes(numeroGenerado))
                {
                    return numeroAleatorio();
                }
            else
                {
                    listaNumerosSecretos.push(numeroGenerado);
                    return numeroGenerado;
                }
        }
}

function limpiarCaja()
{
    document.getElementById('valorUsuario').value = '';
}

function condicionesIniciales()
{
    asignarElementoVariable('h1','Juego del numero secreto');
    asignarElementoVariable('p','Ingrese un numero del 1 al 10');

    numeroSecreto = numeroAleatorio();
    intentos = 1;
}

function reiniciarJuego()
{
    limpiarCaja();

    condicionesIniciales();

    document.querySelector('#reiniciar').setAttribute('disabled','true');
}



asignarElementoVariable('h1','Juego del numero secreto');
asignarElementoVariable('p','Ingrese un numero del 1 al 10');


