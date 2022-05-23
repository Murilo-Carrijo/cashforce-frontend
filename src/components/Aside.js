import React, { Component } from 'react';
import '../style/Aside.css';

class Aside extends Component {
  render() {
    return (
      <div className="aside-container">
        <img src="https://cashforce.com.br/wp-content/themes/cashforce/assets/images/logo-cashforce.svg" alt="" class="lazyloaded" data-ll-status="loaded"></img>
        <p className="aside-text">Notas fiscais</p>
      </div>
    );
  }
};

export default Aside;