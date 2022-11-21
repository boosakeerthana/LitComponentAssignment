import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
  static styles = css`
    p{
      align: center;
    }
  `;
  @property({type: Number}) increment_count = 0;
    @property({type: Number}) decrement_count = 0;
    @property({type: Number}) temp = 0;

  protected render() {
    return html`
      <p><button @click="${this._increment}">+</button></p>
      <p> ${this.increment_count}</p>
        <p><button @click="${this._decrement}">-</button></p>
      <p>${this.decrement_count}</p>
    `;
  }
  public _increment(e: Event) {
   this.increment_count++;
  }
  private _decrement(e: Event) {
    this.decrement_count--;
   
  }
}
