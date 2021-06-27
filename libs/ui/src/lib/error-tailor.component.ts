import { Component } from '@angular/core';
import { DefaultControlErrorComponent } from '@ngneat/error-tailor';
// Custom error component that will replace the standard DefaultControlErrorComponent.
@Component({
  template: ` <p class=" text-sm text-red-600">{{ errorText }}</p> `,
})
export class UIFormsErrorComponent extends DefaultControlErrorComponent {}

export function anchorErrorComponent(
  hostElement: Element,
  errorElement: Element
) {
  if (hostElement.parentElement !== null) {
    const parent = hostElement.parentElement;
    parent.insertAdjacentElement('afterend', errorElement);
    return () => {
      const errorNode = parent.querySelector('custom-error');
      if (errorNode) {
        errorNode.remove();
      }
    };
  } else {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {};
  }
}
