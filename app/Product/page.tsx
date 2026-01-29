import type { Metadata } from "next";
import ProductsSection from '@/components/productSection';

export const metadata: Metadata = {
  title: "Our Products",
  description: "Explore authentic Sri Lankan products - premium rice, spices, noodles, jams, dry fish & more. Quality sourced for UAE distributors and retailers.",
};

export default function ProductPage() {
  return (
    <>
    <ProductsSection />    
    </ >
  );
}