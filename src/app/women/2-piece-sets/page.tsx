import { getProductsByCategoryAndSubcategory } from '@/lib/api';
import { CATEGORIES, SUBCATEGORIES } from '@/lib/constants';
import CategoryPage from '@/components/category/CategoryPage';

export default async function WomenSetsPage() {
  const products = await getProductsByCategoryAndSubcategory(CATEGORIES.WOMEN, SUBCATEGORIES.WOMEN.SETS);
  
  return (
    <CategoryPage 
      category={CATEGORIES.WOMEN}
      subcategory={SUBCATEGORIES.WOMEN.SETS}
      products={products}
    />
  );
}