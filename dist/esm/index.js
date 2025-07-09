import { registerPlugin } from '@capacitor/core';
import { CheckoutWeb } from './web';
export * from './definitions';
export * from './web';
export const Checkout = registerPlugin('Checkout', {
    web: () => Promise.resolve(new CheckoutWeb()),
});
//# sourceMappingURL=index.js.map