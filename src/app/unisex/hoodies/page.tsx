import { getProductsByCategoryAndSubcategory } from '@/lib/api';
import { CATEGORIES, SUBCATEGORIES } from '@/lib/constants';
import CategoryPage from '@/components/category/CategoryPage';

export default async function UnisexHoodiesPage() {
  const products = await getProductsByCategoryAndSubcategory(CATEGORIES.UNISEX, SUBCATEGORIES.UNISEX.HOODIES);
  
  return (
    <CategoryPage 
      category={CATEGORIES.UNISEX}
      subcategory={SUBCATEGORIES.UNISEX.HOODIES}
      products={products}
    />
  );
}