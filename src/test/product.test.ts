import { expect, it } from 'vitest';
import { PRODUCT_PRICE_MXN, productTotal } from '../lib/product';
it('el cinturón cuesta 200 pesos mexicanos', () => expect(PRODUCT_PRICE_MXN).toBe(200));
it('dos cinturones cuestan 400 pesos', () => expect(productTotal(2)).toBe(400));