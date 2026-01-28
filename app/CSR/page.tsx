import CsrIntro from '@/components/cSRIntro';
import CsrShowcase from '@/components/csrShowcase';
import OurProjects from '@/components/ourProjects';
import WhatPeopleSays from '@/components/whatPeopleSays';
import Partners from '@/components/yourTrustedPartners';

export default function csr() {
  return (
    <>
    <CsrShowcase />
    <OurProjects />
    <CsrIntro />
    <WhatPeopleSays />
    <Partners />
    </ >
  );
}