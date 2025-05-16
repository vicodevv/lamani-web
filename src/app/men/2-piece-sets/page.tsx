import { getProductsByCategoryAndSubcategory } from '@/lib/api';
import { CATEGORIES, SUBCATEGORIES } from '@/lib/constants';
import CategoryPage from '@/components/category/CategoryPage';

export default async function MenSetsPage() {
  const products = await getProductsByCategoryAndSubcategory(CATEGORIES.MEN, SUBCATEGORIES.MEN.SETS);
  
  return (
    <CategoryPage 
      category={CATEGORIES.MEN}
      subcategory={SUBCATEGORIES.MEN.SETS}
      products={products}
    />
  );
}