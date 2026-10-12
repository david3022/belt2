export const PRODUCT_PRICE_MXN = 200;
export function productTotal(quantity: number) {
  if (!Number.isInteger(quantity) || quantity < 1) throw new Error('Cantidad inválida');
  return PRODUCT_PRICE_MXN * quantity;
}
export const money = (value: number) => new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 }).format(value);