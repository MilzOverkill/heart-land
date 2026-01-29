import type { Metadata } from "next";
import FAQHeader from '@/components/faQheader';
import Faqs from '@/components/generalFaqs';
import HaveQ from '@/components/stillHaveQuestion';

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Heartland General Trading - product sourcing, distribution partnerships, delivery, and ordering information.",
};

export default function FAQ() {
  return (
    <>
    <FAQHeader />
    <Faqs />
    <HaveQ />   
    </ >
  );
}