// app/jobs/page.tsx
import JobsPage from '@/components/UIComponent/Jobs/jobsPage';
import { jobsPageData } from '@/utils/dummy/jobs/jobsPageData';

export default async function JobsRoute() {
  try {
    
    
    return <JobsPage data={jobsPageData} />;
  } catch (error) {
    console.error('Error loading jobs page:', error);
    return <JobsPage />; 
  }
}
