export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  colors: string[];
  sizes: number[];
};

export const products: Product[] = [
  {
    id: '1',
    name: 'Nike Air Max 270',
    description: "The Nike Air Max 270 delivers visible air under every step. Updated for modern comfort, it nods to the original 1991 Air Max 180 with its exaggerated tongue top and heritage tongue logo.",
    price: 150,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop',
    category: 'Running',
    colors: ['Red', 'Black', 'White'],
    sizes: [7, 8, 9, 10, 11],
  },
  {
    id: '2',
    name: 'Adidas Ultraboost 21',
    description: "Experience energy return like never before. The Ultraboost 21 features 6% more Boost capsules tailored for an explosive energy return.",
    price: 180,
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=2012&auto=format&fit=crop',
    category: 'Running',
    colors: ['Blue', 'Grey', 'Black'],
    sizes: [8, 9, 10, 11, 12],
  },
  {
    id: '3',
    name: 'Jordan 1 Retro High',
    description: "Familiar but always fresh, the Air Jordan 1 is remastered for today's sneakerhead culture. This Retro High OG version goes with existing premium leather and an Air-Sole unit.",
    price: 170,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop',
    category: 'Lifestyle',
    colors: ['Red', 'White', 'Black'],
    sizes: [7, 8, 9, 10, 11, 12],
  },
  {
    id: '4',
    name: 'Puma RS-X',
    description: "The RS-X is back. The future-retro silhouette of this sneaker returns with a progressive aesthetic and angular details, complete with nubuck and suede overlays.",
    price: 110,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1974&auto=format&fit=crop',
    category: 'Lifestyle',
    colors: ['Multi', 'White', 'Black'],
    sizes: [6, 7, 8, 9, 10],
  },
   {
    id: '5',
    name: 'New Balance 990v5',
    description: "The 990v5 restores the great performance and iconic style of the 990's 30-year legacy. It's the perfect blend of cushioning and stability.",
    price: 185,
    image: 'https://images.unsplash.com/photo-1559563458-52c69f83555f?q=80&w=2070&auto=format&fit=crop',
    category: 'Running',
    colors: ['Grey', 'Navy', 'Black'],
    sizes: [8, 9, 10, 11],
  }
];
