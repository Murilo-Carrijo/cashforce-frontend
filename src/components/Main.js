import React, { Component } from 'react';
import '../style/Main.css';

class Main extends Component {
  constructor() {
    super();

    this.editEmissionDate = this.editEmissionDate.bind(this);
    this.editOrderStatusBuyer = this.editOrderStatusBuyer.bind(this);
  }

  editEmissionDate(emissionDate) {
    const myArray = emissionDate.split("-");
    const myArray2 = myArray[2].split("T");
    if(!myArray2) {
      return `${myArray[2]}/${myArray[1]}/${myArray[0]}`;
    }
    return `${myArray2[0]}/${myArray[1]}/${myArray[0]}`;
  }

  editOrderStatusBuyer(orderStatusBuyer) {
    if (orderStatusBuyer === '0') return 'Pendente de confirmação';
    if (orderStatusBuyer === '1') return 'Pedido confirmado';
    if (orderStatusBuyer === '2') return 'Não reconhece o pedido';
    if (orderStatusBuyer === '3') return 'Mercadoria não recebida';
    if (orderStatusBuyer === '4') return 'Recebida com avaria';
    if (orderStatusBuyer === '5') return 'Devolvida';
    if (orderStatusBuyer === '6') return 'Recebida com devolução parcial';
    if (orderStatusBuyer === '7') return 'Recebida e confirmada';
    if (orderStatusBuyer === '8') return 'Pagamento Autorizado';
  }

  render() {
    const { dataApi } = this.props;
    return (
      <div className="main-container">
        <h2>Notas Fiscais</h2>
        <p>Visualize as notas fiscais que você tem.</p>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>NOTA FISCAL</th>
                <th>SACADO</th>
                <th>CEDENTE</th>
                <th>EMISSÃO</th>
                <th>VALOR</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
            { dataApi.map((d) => (
              <tr
                key={ d.id }
                className="nfs-container"
              >
                <td>{ d.nNf }</td>
                <td> { d.buyer.name } </td>
                <td> { d.providers.name } </td>
                <td> { this.editEmissionDate(d.emissionDate) } </td>
                <td className="value-status">{ Number(d.value)
                  .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }</td>
                <td className="value-status"> { this.editOrderStatusBuyer(d.orderStatusBuyer) } </td>
                <button className="button-assignor">Dados do cedente</button>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};



export default Main;