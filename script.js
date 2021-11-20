const VALORVF = document.getElementById('VALORVF');


function pace () {
    const nome = document.getElementById('nome').value;
    const VALORP = document.getElementById('VALORP').value;
    const VALORN = document.getElementById('VALORN').value;
    const VALORI = parseFloat(document.getElementById('VALORI').value/100);
    const resultado = document.getElementById('resultado');
    if (nome == '' && VALORP == '' && VALORN == '') { 
       resultado.textContent = "Preencha todos os campos corretamente!"
    }
    else
    { 
        const VALORICerto = (VALORI * 100)
        const VFCALCULOFIXED = (VALORP*((((1+ VALORI)**VALORN) - 1) / VALORI)).toFixed(2);
        resultado.textContent = ` Olá ${nome}! o valor total obtido, depois de ${VALORN} meses, com uma taxa de ${VALORICerto}% pode chegar a R$ ${VFCALCULOFIXED}`;
        
    }
}
VALORVF.addEventListener('click', pace);
       
        
        

        
        