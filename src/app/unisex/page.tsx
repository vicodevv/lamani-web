import { getProductsByCategoryAndSubcategory } from '@/lib/api';
import { CATEGORIES } from '@/lib/constants';
import CategoryPage from '@/components/category/CategoryPage';

export default async function UnisexPage() {
  const products = await getProductsByCategoryAndSubcategory(CATEGORIES.UNISEX);
  
  return (
    <CategoryPage 
      category={CATEGORIES.UNISEX}
      products={products}
    />
  );
}