import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductById } from '@/lib/api';
import ProductDetail from '@/components/product/ProductDetail';
import Header from '@/components/layout/Header';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await getProductById(params.id);
  
  if (!product) {
    return {
      title: 'Product Not Found | LAMANI',
    };
  }
  
  return {
    title: `${product.name} | LAMANI`,
    description: product.description || `LAMANI ${product.collection}`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductById(params.id);
  
  if (!product) {
    notFound();
  }
  
  if (!product.images || product.images.length === 0) {
    product.images = [product.imageUrl];
  }
  
  return (
    <>
      <Header transparent={false} />
      <ProductDetail product={product} />
    </>
  );
}