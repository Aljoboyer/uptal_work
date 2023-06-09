import { Row ,Col} from "react-bootstrap";
import Navbartwo from "../../components/Navbars/Navbartwo";
import MainFooter from '../../components/Footers/MainFooter'
import { createClient } from 'contentful'
import { useRouter } from 'next/router';
import QuestionCard from '../../components/QuestionCard';
import ResumeCard from "../../components/ResumeCard";


export async function getStaticProps() {

    const client = createClient({
      space: process.env.NEXT_PUBLIC_CONTENTFUL_KEY,
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
    })
  
    const res = await client.getEntries({ content_type: "resumeGuide" })
  
    return {
      props: {
        jobs: res.items,
      },
      revalidate: 1
    }
  }

export default function ResumeGuide({jobs}) {
  const router = useRouter()

  const GoBackHandler = () => {
      router.push('/sitemap')
  }
  return (
<div style={{width: "100%"}}>
 
 <Navbartwo/>
     <div className="sitemap_hire_section">  
          <Row className="container mx-auto">
              <p onClick={GoBackHandler} className="go_back_btn">Go Back</p>
         <p className="sitemap_hire_title">Resume guides for remote software developer jobs</p>
          <p className="sitemap_based_text">Based on skill</p>
          <div className="technology_div mt-4">
             {jobs.map(data => {
                return <ResumeCard key={data.sys.id} data={data} />
            })}
         </div>
         
          </Row>
     </div>
 <MainFooter/>

</div>
  );
}
