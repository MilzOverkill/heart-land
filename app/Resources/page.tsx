import BlogAndNews from '@/components/blogAndNews';
import SuccessStory from '@/components/successStory';
import LatestNews from '@/components/latestNews';
import BlogCards from '@/components/blogCards';
import CommunityPillar from '@/components/CommunityPillar';
import SchoolProfessionalities from '@/components/SchoolProfessionalities';

export default function Resources() {
  return (
    <>
    <BlogAndNews />
    <SuccessStory />
    {/* <LatestNews />
    <BlogCards /> */}
    <CommunityPillar/>
    <SchoolProfessionalities/>
    </ >

    
  );
}