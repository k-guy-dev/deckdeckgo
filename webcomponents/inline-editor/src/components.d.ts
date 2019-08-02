/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface DeckgoInlineEditor {
    'attachTo': HTMLElement;
    'containers': string;
    'imgAnchor': string;
    'imgEditable': boolean;
    'imgPropertyCssFloat': string;
    'imgPropertyWidth': string;
    'mobile': boolean;
    'reset': (clearSelection: boolean, blurActiveElement?: boolean) => Promise<void>;
    'stickyDesktop': boolean;
    'stickyMobile': boolean;
  }
}

declare global {


  interface HTMLDeckgoInlineEditorElement extends Components.DeckgoInlineEditor, HTMLStencilElement {}
  var HTMLDeckgoInlineEditorElement: {
    prototype: HTMLDeckgoInlineEditorElement;
    new (): HTMLDeckgoInlineEditorElement;
  };
  interface HTMLElementTagNameMap {
    'deckgo-inline-editor': HTMLDeckgoInlineEditorElement;
  }
}

declare namespace LocalJSX {
  interface DeckgoInlineEditor extends JSXBase.HTMLAttributes<HTMLDeckgoInlineEditorElement> {
    'attachTo'?: HTMLElement;
    'containers'?: string;
    'imgAnchor'?: string;
    'imgEditable'?: boolean;
    'imgPropertyCssFloat'?: string;
    'imgPropertyWidth'?: string;
    'mobile'?: boolean;
    'onImgDidChange'?: (event: CustomEvent<HTMLElement>) => void;
    'onStickyToolbarActivated'?: (event: CustomEvent<boolean>) => void;
    'stickyDesktop'?: boolean;
    'stickyMobile'?: boolean;
  }

  interface IntrinsicElements {
    'deckgo-inline-editor': DeckgoInlineEditor;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


