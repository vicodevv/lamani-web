import { getProductsByCategoryAndSubcategory } from '@/lib/api';
import { CATEGORIES } from '@/lib/constants';
import CategoryPage from '@/components/category/CategoryPage';

export default async function WomenPage() {
  const products = await getProductsByCategoryAndSubcategory(CATEGORIES.WOMEN);
  
  return (
    <CategoryPage 
      category={CATEGORIES.WOMEN}
      products={products}
    />
  );
}