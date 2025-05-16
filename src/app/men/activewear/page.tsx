import { getProductsByCategoryAndSubcategory } from '@/lib/api';
import { CATEGORIES, SUBCATEGORIES } from '@/lib/constants';
import CategoryPage from '@/components/category/CategoryPage';

export default async function MenActiveWearPage() {
  const products = await getProductsByCategoryAndSubcategory(CATEGORIES.MEN, SUBCATEGORIES.MEN.ACTIVEWEAR);
  
  return (
    <CategoryPage 
      category={CATEGORIES.MEN}
      subcategory={SUBCATEGORIES.MEN.ACTIVEWEAR}
      products={products}
    />
  );
}