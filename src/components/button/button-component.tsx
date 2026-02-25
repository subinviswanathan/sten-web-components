import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {
  @Prop() text!: string;
  @Prop() type: 'primary' | 'secondary' = 'primary';

  render() {
    return <button class={`button ${this.type}`}>{this.text}</button>;
  }
}
