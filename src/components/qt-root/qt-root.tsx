import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'qt-root',
  styleUrl: 'qt-root.scss'
})
export class QtRoot {

  @State() note: string = atob(location.pathname.substring(1));

  handleChange (event) {
    this.note = event.target.value;
    history.pushState({ note: this.note }, this.note, `/${btoa(this.note)}`);
  }

  render () {
    return (
      <div class="qt-root">
        <textarea value={this.note} onInput={(event) => this.handleChange(event)}></textarea>
        <footer>
          <p>Quickthoughts</p>
        </footer>
      </div>
    )
  }

}