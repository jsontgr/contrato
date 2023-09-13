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


function printContract() {
  // Pega os valores dos inputs
  const prod = document.getElementById('prod').value;
  const vendedor = document.getElementById('razaosocial').value;
  const contrato = document.getElementById('contrato').value;
  const ccnpj = document.getElementById('ccnpj').value;
  const inscricaoEstadual = document.getElementById('inscricao-estadual').value;
  const cep = document.getElementById('cep').value;
  const logradouro = document.getElementById('logradouro').value;
  const bairro = document.getElementById('bairro').value;
  const mun = document.getElementById('municipio').value;
  const graos = document.querySelector('input[name="graos"]:checked').value
  
  const quantidadeProduto = document.getElementById('quantidade-produto').value;
  const valorsaco = document.getElementById('valor-saco').value;
  const valortotal = document.getElementById('valor-total').value;
  //const bcempresa = document.getElementById('bcempresa').value;
  //const bccnpj = document.getElementById('bccnpj').value;
  //const bcie = document.getElementById('bcie').value;
  //const bcendereco = document.getElementById('bcendereco').value;
  //const bcbairro = document.getElementById('bcbairro').value;
  //const bccep = document.getElementById('bccep').value;
  const bcnome = document.getElementById('bcnome').value;
  const bcbanco = document.getElementById('bcbanco').value;
  const bcag = document.getElementById('bcag').value;
  const bcconta = document.getElementById('bcconta').value;
  const bccpf = document.getElementById('bccpf').value;
  const tipoFrete = document.getElementById('tipo-frete').value;
  
  // const data = document.getElementById('data').value;
  const data = document.getElementById('data').value;
  const dataPorExtenso = formatDateToFullDate(data);

  // Cria o conteúdo do contrato
  const contractContent = `
      <p style="transform: translate(-10px, -50px);"><img src="https://uploaddeimagens.com.br/images/004/549/222/full/EMAPE.png?1689720598" width="300px" </p>
      <h3><strong><p style="transform: translate(300px, -150px);">EMAPE TERCEIRA GERAÇÃO AVICOLA LTDA</p></strong></h3>
      <h4><strong><p style="transform: translate(330px, -245px);">ROD. CE 187 - ZONA RURAL TIANGUÁ-CE</p></strong></h4>
      <h3><p style="transform: translate(150px, -250px);"><strong>CONTRATO DE COMPRA E VENDA DE ${prod} ${contrato}</strong></p></h3>
      
      <p style="transform: translate(0px, -350px);">
      Vendedor: <strong> ${vendedor}, </strong> CNPJ: ${ccnpj}, IE: ${inscricaoEstadual}, 
      endereço: ${logradouro}, bairro: ${bairro}, municipio: ${mun} CEP: ${cep}
      </p>

      <div id="fixed-data" style="transform: translate(0px, -470px);">
      <strong>COMPRADOR: EMAPE TERCEIRA GERAÇÃO AVICOLA LTDA</strong>
      CNPJ: 31.874.655/0002-01
      Inscrição Estadual: 062026291
      Endereço: RODOVIA CE 187 KM 4
      CEP: 62.320-970
      </div>

      <p style="transform: translate(0px, -580px);">
      <strong>CLÁUSULA 1ª: CONDIÇÕES GERAIS.</strong>
      </p>

      <p style="transform: translate(50px, -720px);">
      ${graos}</p>
      
      <p style="transform: translate(0px, -830px);">
      <strong>Local de Entrega:</strong> EMAPE TERCEIRA GERAÇÃO AVICOLA LTDA
      <strong>Vendedor:</strong> ${vendedor}
      <strong>Quantidade do Produto:</strong> ${quantidadeProduto}</p>

      <p style="transform: translate(0px, -950px);">
      <strong>CLÁUSULA 2ª: FORMA DE PAGAMENTO.</strong>
      </p>

      <p style="transform: translate(0px, -1100px);">
      PREÇO POR SACOS: ${valorsaco}
      VALOR TOTAL: ${valortotal}
      FRETE: ${tipoFrete}
      </p>

      <p style="transform: translate(0px, -1240px);">
      <strong>CLAÚSULA 3ª: CESSÃO DE DIREITO DE RECEBIMENTO</strong></p>
      
      <p style="transform: translate(0px, -1380px);">
      </p>

      <p style="transform: translate(0px, -1490px);">
      <strong>${vendedor},</strong> devidamente cadastrada no CNPJ/CPF sob o 
      nº: ${ccnpj} e IE nº: ${inscricaoEstadual} com sede na ${logradouro}, ${bairro},
      CEP: ${cep} vem através da presente <strong>DECLARAR</strong> que transferiu
      o direito de recebimento das mercadorias negociadas com a empresa <strong>
      EMAPE TERCEIRA GERAÇÃO AVICOLA LTDA</strong>, devidamente cadastrado no CNPJ
      sob o nº 31.874.655/0002-01 IE: 06.202.629-1, referente a venda de ${quantidadeProduto}
      CONTRATO Nº ${contrato} no valor de ${valorsaco} totalizando
      um montante de R$ ${valortotal}<strong> para ${bcnome}, que o pagamento deverá ser
      efetuado através do ${bcbanco}, agência ${bcag} conta corrente ${bcconta}
      CPF: ${bccpf}.</strong>

      <strong>CLASULA 1º DA CESSÃO DE CRÉDITO:</strong>

      <strong>${bcnome}</strong> PROPRIETÁRIO DOS <strong>${quantidadeProduto}</strong> DE MILHETO OBJETO DO
      PRESENTE CONTRATO COMPRA E VENDA <strong>${contrato}</strong>, PARTICIPA DESTE CONTRATO COMO
      INTERVENIENTE PRODUTOR E PROPRIETÁRIO, PARA GARANTIR A RECEPÇÃO DIRETA DO VALOR
      DA COMPRA EFETUADA AO INTERMEDIÁRIO <strong>${vendedor}</strong>.
      
      Declaramos ainda que as mercadorias são do próprio cliente.
      </p>

      <p style="transform: translate(0px, -1610px);">
      <strong>CLÁUSULA 4ª:</strong> OS COMPROVANTES DE DEPÓSITOS SERÃO SUFICIENTES PARA A COMPROVACÃO
      DE PAGAMENTOS DO PRESENTE CONTRATO.
      </p>

      <font color="gray"><p style="transform: translate(0px, -1760px);">
      __________________________________________________________________________________________________
      EMAPE TERCEIRA GERAÇÃO AVICOLA LTDA
      31.874.655/0002-01
      RODOVIA CE 187 KM 4
      TIANGUÁ - CE, CEP: 62.320-970<p/></font>



      <p style="transform: translate(0px, -1790px);">
      <strong>CLÁUSULA 5ª: GERAIS COMPLEMENTARES</strong> ESTE CONTRATO DE COMPRA E VENDA É AJUSTADA EM
      CARÁTER IRREVOGÁVEL E IRRETRATÁVEL E CONSIDERA-SE, DESDE JÁ, PERFEITAMENTE E ACABADA. 
      DECLARANDO O VENDEDOR NESTE ATO QUE O PRODUTO OBJETO DESTE CONTRATO ESTÁ LIVRE 
      E DESEMBARAÇADO DE QUAISQUER ÔNUS.

      AS PARTES ELEGEM O FORO DA COMARCA DE TIANGUÁ (CE) PARA DIRIMIR EVENTUAIS 
      CONTROVÉRSIAS DECORRENTE DESTE CONTRATO. POR ESTAREM ASSIM CIENTES, JUSTOS 
      E CONTRATOS, FIRMAM O PRESENTE INSTRUMENTO, EM DUAS VIAS DE IGUAL.
     
     

      __________________________________________________________________________________________________
      ${vendedor} - CNPJ: ${ccnpj}


      
      __________________________________________________________________________________________________
      PRODUTOR: ${bcnome} - CNPJ/CPF ${bccpf}



      __________________________________________________________________________________________________
      EMAPE TERCEIRA GERAÇÃO AVICOLA LTDA - EVELINE PESSOA DE ARAÚJO - CPF: 413.941.433-20

      TESTEMUNHAS:
      
      1ª________________________________________________________________________________________________

      2ª________________________________________________________________________________________________

      </p>
      

      <p style="transform: translate(600px, -1750px);">
      TIANGUÁ, ${dataPorExtenso}
      </p>

      <font color="gray"><p style="transform: translate(0px, -1550px);" font-size= "2px">
      __________________________________________________________________________________________________
      EMAPE TERCEIRA GERAÇÃO AVICOLA LTDA
      31.874.655/0002-01
      RODOVIA CE 187 KM 4
      TIANGUÁ - CE, CEP: 62.320-970<p/></font>
  `;

  // Cria uma nova janela com o conteúdo do contrato
  const newWindow = window.open('', '_blank');
  newWindow.document.write(`<pre style="font-family: Arial; font-size: 20px;"> ${contractContent}</pre>`);
  newWindow.document.close();

  // Imprime a janela
  newWindow.print();
}
