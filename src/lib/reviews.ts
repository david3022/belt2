// Reseñas de compradoras REALES.
// Cuando recibas una opinión verdadera (WhatsApp, Mercado Libre, correo, etc.),
// agrégala aquí con permiso de la persona. La sección de reseñas, el promedio
// de estrellas y el total se calculan solos a partir de esta lista.
//
// Ejemplo de formato (no lo publiques si no es una reseña real):
// { name: 'Nombre o inicial', city: 'Ciudad', rating: 5, text: 'Lo que te escribió.', date: '2026-10-20' },

export type Review = {
  name: string;
  city?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  date?: string;
};

export const reviews: Review[] = [];

export function averageRating(list: Review[]) {
  if (list.length === 0) return 0;
  const sum = list.reduce((total, review) => total + review.rating, 0);
  return Math.round((sum / list.length) * 10) / 10;
}
