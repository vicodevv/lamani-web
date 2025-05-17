import { getProductsByCategoryAndSubcategory } from '@/lib/api';
import { CATEGORIES, SUBCATEGORIES } from '@/lib/constants';
import CategoryPage from '@/components/category/CategoryPage';

export default async function UnisexSetsPage() {
  const products = await getProductsByCategoryAndSubcategory(CATEGORIES.UNISEX, SUBCATEGORIES.UNISEX.SETS);
  
  return (
    <CategoryPage 
      category={CATEGORIES.UNISEX}
      subcategory={SUBCATEGORIES.UNISEX.SETS}
      products={products}
    />
  );
}