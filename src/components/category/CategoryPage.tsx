"use client"

import Header from '@/components/layout/Header';
import BreadcrumbNav from '@/components/navigation/BreadCrumbNav';
import ProductGrid from '@/components/product/ProductGrid';
import { Product } from '@/lib/types';

interface CategoryPageProps {
  category: string;
  subcategory?: string;
  products: Product[];
}

export default function CategoryPage({ category, subcategory, products }: CategoryPageProps) {
  return (
    <main className="min-h-screen text-black pb-10">
      <Header transparent={false} />
      <BreadcrumbNav category={category} subcategory={subcategory} />
      
      <ProductGrid products={products} />
    </main>
  );
}