import { service } from "../service/index.js"
import { view } from "../view/index.js"
import { AtualizaComponent } from "./atualiza.js"

export const ListaClienteComponent = () => {
    view.getListaClientesHtml()

    service.getVeiculo().then((dados) => {
        dados.forEach((element) => {
            if(element.owner != null && element.label != null){
                criarNovaLinha(element.owner, element.model, element.label, element.type, element.observation, element.id)
            }   
        });     
    })      
   
    const table = document.getElementById('tbody')  
    table.addEventListener('click', (event) => {
        const button = event.path[0].innerText
        const id = event.path[0].id
        
        if(button =='Editar'){
            AtualizaComponent(id);
          }
          if(button =='Excluir'){
            deletar(id)
          }
        if(button =='Novo'){
            console.log(button)
        }
    })

}


const criarNovaLinha = (cliente, modelo, placa, tipo, observacoes, id) => {
    const table = document.getElementById('tbody')
    const NovaLinha = document.createElement('tr')
    const dadosHtml = `
    <td class="none">${cliente}</td>
    <td>${modelo}</td>
    <td>${placa}</td>
    <td class="none">${tipo}</td>
    <td class="none">${observacoes}</td>
    <td>
        <div class="lista-btn">
        <a id="${id}" class="btn-link editar" >Editar</a>
        <a id="${id}" class="btn-link" type="button">Excluir</a>   
        </div>
    </td>
    `
  NovaLinha.innerHTML = dadosHtml
  return table.appendChild(NovaLinha)    
}

const deletar = (id) => {
    service.deletaVeiculo(id).then(() => {
        ListaClienteComponent();
    })
}