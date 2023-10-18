function formatDateToFullDate(dateString) {
    const months = [
      "janeiro", "fevereiro", "março", "abril", "maio", "junho",
      "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];
  
    const date = new Date(dateString);
    const day = date.getDate()+1;
    const month = months[date.getMonth()];
    const year = date.getFullYear();
  
    return `${day} de ${month} de ${year}`;
  }
  

function printContract3() {
    // Pega os valores dos inputs
    
    const quatidade = document.getElementById('quatidade').value;
    const vton = document.getElementById('vton').value;
    const vtotal = document.getElementById('vtotal').value;
    const placa = document.getElementById('placa').value;
    
    const saldo = document.getElementById('saldo').value;
    const mot = document.getElementById('mot').value;
    
    
   
    const bcnome = document.getElementById('bcnome').value;
    const bcbanco = document.getElementById('bcbanco').value;
    const bcag = document.getElementById('bcag').value;
    const bcconta = document.getElementById('bcconta').value;
    const bccpf = document.getElementById('bccpf').value;
    const contrato = document.getElementById('contrato').value;
    const pedido = document.getElementById('pedido').value;
    const ncontrato = document.getElementById('ncontrato').value;
    const produtor = document.getElementById('produtor').value;
    const pix = document.getElementById('pix').value;

    const vtotalNumber = parseFloat(vtotal);
    const adiantNumber = parseFloat(saldo);

    // Verifica se as conversões foram bem-sucedidas
    if (!isNaN(vtotalNumber) && !isNaN(adiantNumber)) {
        // Subtrai o valor de 'adiant' de 'vtotal'
        const saldoDevedor = vtotalNumber - adiantNumber;
    
    // const data = document.getElementById('data').value;
    const data = document.getElementById('data').value;
    const dataPorExtenso = formatDateToFullDate(data);

    // Cria o conteúdo do contrato
    const contractContent3 = `
        <p style="transform: translate(-10px, -50px);"><img src="https://uploaddeimagens.com.br/images/004/549/222/full/EMAPE.png?1689720598" width="300px" </p>
        <h3><strong><p style="transform: translate(300px, -150px);">EMAPE TERCEIRA GERAÇÃO AVICOLA LTDA</p></strong></h3>
        <h4><strong><p style="transform: translate(330px, -245px);">ROD. CE 187 - ZONA RURAL TIANGUÁ-CE</p></strong></h4>
        <h4><p style="transform: translate(0px, -170px);"><strong>ATT: TEREZA CRISTINA </strong></p></h3>
        <h3><p style="transform: translate(350px, -350px);"><strong>PAGAMENTO SALDO DE FRETE </strong></p></h3>
        
        <p style="transform: translate(0px, -400px);">
        ORIGEM: BALSAS-MA - DESTINO: EMAPE TIANGUÁ
        QUANTIDADE:  ${quatidade} KGS - VALOR POR TONELADA R$:${vton} = VALOR TOTAL DO FRETE R$:${vtotal}.
        </p>

        <p style="transform: translate(0px, -550px);">
        PLACA:${placa}.
        <strong>ADIANTAMENTO R$${saldoDevedor.toFixed(2)} - PGTO NO DESCARREGAMENTO DO SALDO R$: ${saldo}</strong>
        MOTORISTA:${mot}
        </p>

        <p style="transform: translate(350px, -700px);">
        <strong>DADOS BANCÁRIOS</strong>
        </p>

        <p style="transform: translate(0px, -850px);">
        NOME DO BENEFICIÁRIO: ${bcnome}
        BANCO: ${bcbanco}. PIX: ${pix}
        Nº DA AG: ${bcag}, Nº DA CONTA: ${bcconta}, CPF/CNPJ: ${bccpf}.
        CONTRATO: ${contrato} - PEDIDO: ${pedido} - CONTRATO DA ${ncontrato}.
        PRODUTOR ( ${produtor} )
       
        </p>

        

        <font color="gray"><p style="transform: translate(0px, -280px);">
        __________________________________________________________________________________________________
        EMAPE TERCEIRA GERAÇÃO AVICOLA LTDA
        31.874.655/0002-01
        RODOVIA CE 187 KM 4
        TIANGUÁ - CE, CEP: 62.320-970<p/></font>
       



        <p style="transform: translate(600px, -1250px);">
        TIANGUÁ, ${dataPorExtenso}
        </p>

        
    `;

    // Cria uma nova janela com o conteúdo do contrato
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`<pre style="font-family: Arial; font-size: 20px;"> ${contractContent3}</pre>`);
    newWindow.document.close();

    // Imprime a janela
    newWindow.print();
}else {
        alert('Certifique-se de que os valores de "vtotal" e "adiant" são numéricos.');
    }
}
