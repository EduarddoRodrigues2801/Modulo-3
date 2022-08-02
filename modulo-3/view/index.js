
const getCadastroHtml = () => { 
    const main = document.getElementById('root')
    const dadosHtml = `
                <form id="formulario">
                <h1>Novo Cliente</h1>
                <label>Nome do Cliente</label>
                <input id="name" type="text" placeholder="Digite o seu nome">
                <br/><br/>
                <label>Modelo</label>
                <input id="modelo" type="text" placeholder="Digite o modelo do veiculo">
                <br/><br/>
                <label>Tipo</label>
                <select id="tipo" type="text" placeholder="Digite o tipo do veiculo">
                    <option value="1">Carro</option>
                    <option value="0">Moto</option>
                </select></select>
                <br/><br/>    
                <label>Placa</label>
                <input id="placa" type="text" placeholder="Digite a placa do veiculo">
                <br/><br/>
                <label>Observações</label>
                <input id="observacoes" type="text" placeholder="Digite a observação:">
                <br/><br/>
                <div>
                    <button id="cancelar" type="button">Cancelar</button>
                    <button id="salvar" type="submit">Salvar</button>
                </div>    
            </form>`

main.innerHTML = dadosHtml
}

const getListaClientesHtml = () => {
    const main = document.getElementById('root')
    const dadosHtml = `
    <section>
        <h1>Lista de Clientes</h1>
        <table id="tbody">
        <tr>
            <th>Cliente</th>
            <th>Modelo</th>
            <th>Placa</th>
            <th>Tipo</th>
            <th>Observações</th>
            <th><a>Novo</a></th>
        </tr>
        </table>
    </section> `

    main.innerHTML = dadosHtml
}

const getAtualizaHtml = () => { 
    const main = document.getElementById('root')
    const dadosHtml = `
                <form id="formulario">
                <h1>Editar Cliente</h1>
                <label>Nome do Cliente</label>
                <input id="name" type="text" placeholder="Digite o seu nome">
                <br/><br/>
                <label>Modelo</label>
                <input id="modelo" type="text" placeholder="Digite o modelo do veiculo">
                <br/><br/>
                <label>Tipo</label>
                <select id="tipo" type="text" placeholder="Digite o tipo do veiculo">
                    <option value="1">Carro</option>
                    <option value="0">Moto</option>
                </select></select>
                <br/><br/>    
                <label>Placa</label>
                <input id="placa" type="text" placeholder="Digite a placa do veiculo">
                <br/><br/>
                <label>Observações</label>
                <input id="observacoes" type="text" placeholder="Digite a observação:">
                <br/><br/>
                <div>
                    <button id="cancelar" type="button">Cancelar</button>
                    <button id="salvar" type="submit">Atualizar</button>
                </div>    
            </form>`

    main.innerHTML = dadosHtml
}

const getCheckinHtml = () => {
    const main = document.getElementById('root')
    const dadosHtml = `
        <section>
            <h2>Lista de Clientes no Estacionamento</h2>
            <br />
            <table id="tbody" class="tabela">
            <tr>
                <th>Modelo</th>
                <th>Placa</th>
                <th>Opção</th>
            </tr>    
            </table>
            
            <div>
            <label>Placa</label>
            <select class="input" id="select"></select>
            <a type="button" id="adicionar-novo">Adicionar Novo</a>
            <br />
            <div class="btn">
                <button id="checkin" class="btn-link">Checkin</button>
            </div>    
            </div>
        </section> 
        `
    
    main.innerHTML = dadosHtml  
}

const getCheckoutHtml = () => {
    const main = document.getElementById('root')
    const dadosHtml = `
        <section class="container">
            <h2>Dados do cliente</h2>
            <table class="tabela">
            <tr>
                <th>Cliente</th>
                <th>Modelo</th>
                <th>Placa</th>
            </tr>  
            <tr id="tbody"></tr>  
            </table>
            <div>
            <label>Total de Horas</label>
            <input
                 id="totalHora"
                 class="input" 
                 type="text" 
                 placeholder="Total de Horas"
                 disabled
            />      
            </div>
            <br />
            <div>
            <label>Valor a pagar</label>
            <input
                 id="valorPagar"
                 class="input" 
                 type="text" 
                 placeholder="Valor a pagar"
                 disabled
            />      
            </div>
            <br />
            <div class="btn">
            <button class="btn-link" id="finalizar">Finalizar</button>
            </div>
        </section> 
        `
}

const getFaturamentoHtml = () => {
    const main = document.getElementById('root')
    const dadosHtml = `
        <section class="container">
            <h1>Lista de faturamento</h1>
            <table class="tabela">
            <thead>
            <tr>
                <th>Qtd Veiculos</th>
                <th>Total</th>
                <th>Dia</th>
            </tr>
            </thead>
            <tbody id="tbody" ></tbody>  
            </table>
            <div class="grafico">
            <div id="piechart_3d"></div>
            </div>
        </section> 
     `
     main.innerHTML = dadosHtml
}

export const view = {
    getListaClientesHtml,
    getCadastroHtml,
    getAtualizaHtml,
    getCheckinHtml,
    getCheckoutHtml,
    getFaturamentoHtml
    
}