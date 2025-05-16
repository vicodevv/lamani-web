import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductById } from '@/lib/api';
import ProductDetail from '@/components/product/ProductDetail';
import Header from '@/components/layout/Header';

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const product = await getProductById(id);
  
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

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  
  const product = await getProductById(id);
  
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