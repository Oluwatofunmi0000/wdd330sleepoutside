import assert from 'assert';
import { describe, it, beforeEach } from 'node:test';
import ProductData from '../src/js/ProductData.mjs';

const sampleData = [
  { Id: 1, Name: 'Tent A', NameWithoutBrand: 'Tent A', FinalPrice: 99.99, Images: { PrimarySmall: '/images/tents/tenta.jpg' } },
  { Id: 2, Name: 'Tent B', NameWithoutBrand: 'Tent B', FinalPrice: 149.99, Images: { PrimarySmall: '/images/tents/tentb.jpg' } },
];

describe('ProductData (node test runner)', () => {
  beforeEach(() => {
    globalThis.fetch = async () => ({
      ok: true,
      json: async () => sampleData,
    });
  });

  it('getData returns array of products', async () => {
    const pd = new ProductData('tents');
    const data = await pd.getData();
    assert(Array.isArray(data));
    assert.strictEqual(data.length, 2);
    assert.strictEqual(data[0].Name, 'Tent A');
  });

  it('findProductById returns correct product', async () => {
    const pd = new ProductData('tents');
    const product = await pd.findProductById(2);
    assert.ok(product);
    assert.strictEqual(product.Id, 2);
    assert.strictEqual(product.NameWithoutBrand, 'Tent B');
  });
});
