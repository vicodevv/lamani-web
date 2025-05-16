import { getProductsByCategoryAndSubcategory } from '@/lib/api';
import { CATEGORIES } from '@/lib/constants';
import CategoryPage from '@/components/category/CategoryPage';

export default async function MenPage() {
  const products = await getProductsByCategoryAndSubcategory(CATEGORIES.MEN);
  
  return (
    <CategoryPage 
      category={CATEGORIES.MEN}
      products={products}
    />
  );
}