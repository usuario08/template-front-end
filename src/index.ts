import MainController from './shared/Controller'; './shared/Controller/index'
import './shared/UI/Main/erp-inicio.component'
class MyElement {
  /**
   * Body element
   * @type {HTMLElement}
   */
  mainContainer: HTMLElement = document.getElementById('MainContainer') as HTMLElement;

  /**
   * Crea componete Main element
   * @type {HTMLElement}
   */
  erpMainComponent: HTMLElement = window.document.createElement('erp-main-container') as HTMLElement;

  /**
   * @type {MainController}
   */
  Controller: MainController = new MainController;

  constructor() {
    this._initialize()
  }

  private _initialize() {
    try {
      this.Controller.Inicio()
      console.info('Inicializando sistema ...')
      this.mainContainer.appendChild(this.erpMainComponent)
    } catch (error) {
      console.error(error);
    }
  }

}
new MyElement();