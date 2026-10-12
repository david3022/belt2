import { describe, expect, it } from 'vitest';
import { averageRating, type Review } from '@/lib/reviews';

describe('averageRating', () => {
  it('returns 0 when there are no reviews', () => {
    expect(averageRating([])).toBe(0);
  });
  it('rounds the average to one decimal', () => {
    const list: Review[] = [{ name: 'A', rating: 5, text: '' }, { name: 'B', rating: 4, text: '' }, { name: 'C', rating: 5, text: '' }];
    expect(averageRating(list)).toBe(4.7);
  });
});
