import { getProductsByCategoryAndSubcategory } from '@/lib/api';
import { CATEGORIES, SUBCATEGORIES } from '@/lib/constants';
import CategoryPage from '@/components/category/CategoryPage';

export default async function UnisexTshirtsPage() {
  const products = await getProductsByCategoryAndSubcategory(CATEGORIES.UNISEX, SUBCATEGORIES.UNISEX.TSHIRTS);
  
  return (
    <CategoryPage 
      category={CATEGORIES.UNISEX}
      subcategory={SUBCATEGORIES.UNISEX.TSHIRTS}
      products={products}
    />
  );
}