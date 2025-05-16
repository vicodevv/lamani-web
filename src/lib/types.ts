export interface Product {
    id: string;
    name: string;
    price: number;
    currency: string;
    imageUrl: string;
    collection?: string;
    description?: string;
    details?: string[];
    sizes?: string[];
    colors?: string[];
    category: string;
    subcategory: string;
    inStock: boolean;
    featured?: boolean;
    newArrival?: boolean;
    images?: string[];
  }
  
  export interface Category {
    id: string;
    name: string;
    slug: string;
    subcategories: Subcategory[];
  }
  
  export interface Subcategory {
    id: string;
    name: string;
    slug: string;
    parentCategory: string;
  }
  
  export interface CartItem extends Product {
    quantity: number;
    size?: string;
    color?: string;
  }
  
  export interface User {
    id: string;
    name: string;
    email: string;
    shippingAddresses?: ShippingAddress[];
  }
  
  export interface ShippingAddress {
    id: string;
    name: string;
    address1: string;
    address2?: string;
    city: string;
    state?: string;
    postalCode: string;
    country: string;
    isDefault: boolean;
  }
  
  export interface Order {
    id: string;
    userId: string;
    items: CartItem[];
    subtotal: number;
    tax: number;
    shipping: number;
    total: number;
    status: OrderStatus;
    createdAt: string;
    updatedAt: string;
    shippingAddress: ShippingAddress;
  }
  
  export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';