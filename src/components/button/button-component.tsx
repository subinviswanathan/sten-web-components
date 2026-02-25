import { Component, Prop, h, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {
  @Prop() text!: string;
  @Prop() type: 'primary' | 'secondary' = 'primary';

  @Event() buttonClicked!: EventEmitter<void>;

  onButtonClicked() {
    this.buttonClicked.emit();
    console.log('Button clicked!');
  }

  render() {
    return (
      <button onClick={this.onButtonClicked.bind(this)} class={`button ${this.type}`}>
        {this.text}
      </button>
    );
  }
}
