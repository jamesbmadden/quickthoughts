/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface QtRoot {}
}

declare global {


  interface HTMLQtRootElement extends Components.QtRoot, HTMLStencilElement {}
  var HTMLQtRootElement: {
    prototype: HTMLQtRootElement;
    new (): HTMLQtRootElement;
  };
  interface HTMLElementTagNameMap {
    'qt-root': HTMLQtRootElement;
  }
}

declare namespace LocalJSX {
  interface QtRoot {}

  interface IntrinsicElements {
    'qt-root': QtRoot;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'qt-root': LocalJSX.QtRoot & JSXBase.HTMLAttributes<HTMLQtRootElement>;
    }
  }
}

