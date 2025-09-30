import JobDetailPage from '@/components/UIComponent/Jobs/JobDetailPage';
import { JobData } from '@/utils/dummy/jobs/jobDetailData';


export default function  JobDetail() {
  return (
    <main>
    <JobDetailPage data={JobData}/>
    </main>
  );
}