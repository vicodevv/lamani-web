import { getProductsByCategoryAndSubcategory } from '@/lib/api';
import { CATEGORIES, SUBCATEGORIES } from '@/lib/constants';
import CategoryPage from '@/components/category/CategoryPage';

export default async function WomenActiveWearPage() {
  const products = await getProductsByCategoryAndSubcategory(CATEGORIES.WOMEN, SUBCATEGORIES.WOMEN.ACTIVEWEAR);
  
  return (
    <CategoryPage 
      category={CATEGORIES.WOMEN}
      subcategory={SUBCATEGORIES.WOMEN.ACTIVEWEAR}
      products={products}
    />
  );
}