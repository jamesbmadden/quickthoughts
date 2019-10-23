import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'qt-root',
  styleUrl: 'qt-root.scss'
})
export class QtRoot {

  @State() note: string = atob(location.pathname.substring(15));

  handleChange (event) {
    this.note = event.target.value;
    history.pushState({ note: this.note }, this.note, `/quickthoughts/${btoa(this.note)}`);
  }

  render () {
    return (
      <div class="qt-root">
        <textarea value={this.note} onInput={(event) => this.handleChange(event)}></textarea>
        <footer>
          <span><i>Quickthoughts</i></span>
          <span>v1.0.0</span>
        </footer>
      </div>
    )
  }

}