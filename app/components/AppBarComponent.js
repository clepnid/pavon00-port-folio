import React, { Component } from 'react';
import { AppBar, Button, Separator } from 'react95';
import Clock from './Clock';
import './styles/fuentes.css';
import './styles/bar.css';

class AppBarComponent extends Component {
  render() {
    // Obtén la función pasada por parámetro
    const { themeChanger, funcionBoton } = this.props;

    return (
      <AppBar style={{ bottom: 0, top: 'unset' }}>
        <div className="app-bar-container">
        <Button style={{ margin: '3px', padding: '8 0px', fontFamily: 'MS Sans Serif' }} primary onClick={funcionBoton}>{themeChanger ? 'Parar Cambio Tema Automático' : 'Cambiar Tema'}</Button>
          <Separator orientation='vertical' className="app-bar-separator" />
          <div className="app-bar-email">pavondesarrollo@gmail.com</div>
          <Separator orientation='vertical' className="app-bar-separator" />
          <Clock style={{ fontWeight: 600, padding: '0 8px', fontFamily: 'MS Sans Serif', marginLeft: 'auto'}} />
        </div>
      </AppBar>
    );
  }
}

export default AppBarComponent;
