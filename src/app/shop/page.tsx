// src/app/shop/page.tsx
import { getAllProducts } from '@/lib/api';
import CategoryPage from '@/components/category/CategoryPage';

export default async function ShopPage() {
  const products = await getAllProducts();
  
  return (
    <CategoryPage 
      category="SHOP ALL"
      products={products}
    />
  );
}