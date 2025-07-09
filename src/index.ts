import { registerPlugin } from '@capacitor/core';
import type { CheckoutPlugin } from './definitions';
import { CheckoutWeb } from './web';

export * from './definitions';
export * from './web';

export const Checkout = registerPlugin<CheckoutPlugin>('Checkout', {
  web: () => Promise.resolve(new CheckoutWeb()),
});
