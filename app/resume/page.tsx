import Image from "next/image";
import Accordian from "../components/accordian";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Resume | Satvik Virmani"
};

const Resume = () => {
  return (
    <section className="p-4 md:p-16 w-full">
      <a
        href="/assets/resume/resumev1.docx"
        className="w-full block p-8 text-start bg-gray-100 dark:bg-gray-800 rounded-2xl"
        download
      >
        Download PDF
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113.79 122.88" className="ml-4 inline w-6 h-6"><defs></defs><title>download-file</title><path className="dark:fill-gray-200 fill-gray-900" style={{fillRule: "evenodd"}} d="M65.59,67.32h38.82a9.41,9.41,0,0,1,9.38,9.38v36.79a9.41,9.41,0,0,1-9.38,9.39H65.59a9.41,9.41,0,0,1-9.38-9.39V76.7a9.41,9.41,0,0,1,9.38-9.38ZM60,11.56,79.73,30.07H60V11.56ZM20.89,70a2.14,2.14,0,0,0-2,2.23,2.1,2.1,0,0,0,2,2.22H45.67V70Zm0,16a2.14,2.14,0,0,0-2,2.23,2.1,2.1,0,0,0,2,2.23H45.67V85.91Zm0-47.89a2.14,2.14,0,0,0-2,2.23,2.11,2.11,0,0,0,2,2.23H43.81a2.14,2.14,0,0,0,2-2.23,2.11,2.11,0,0,0-2-2.23Zm0-16a2.14,2.14,0,0,0-2,2.23,2.1,2.1,0,0,0,2,2.23h12.6a2.14,2.14,0,0,0,2-2.23,2.11,2.11,0,0,0-2-2.23Zm0,31.93a2.14,2.14,0,0,0-2,2.23,2.12,2.12,0,0,0,2,2.23H59.65a2.14,2.14,0,0,0,2-2.23,2.1,2.1,0,0,0-2-2.23ZM90.72,32.72a3.28,3.28,0,0,0-2.39-3.17L59.23,1.21A3.27,3.27,0,0,0,56.69,0H5.91A5.91,5.91,0,0,0,0,5.91V107.12A5.91,5.91,0,0,0,5.91,113H45.76v-6.6H6.61V6.57H53.37V33.36a3.32,3.32,0,0,0,3.32,3.31H84.12V58.29h6.6V32.72Zm6.45,60.62a2.4,2.4,0,0,1,2.06,1c1.08,1.62-.4,3.22-1.42,4.35-2.91,3.19-9.49,9-10.92,10.66a2.37,2.37,0,0,1-3.72,0c-1.49-1.73-8.43-7.86-11.19-11-1-1.08-2.15-2.56-1.15-4a2.42,2.42,0,0,1,2.07-1h5.17V84.07A2.92,2.92,0,0,1,81,81.15H89.1A2.92,2.92,0,0,1,92,84.07v9.27Z"/></svg>
      </a>

      <div className="py-8 flex flex-col gap-8">
        <h1 className="text-center text-xl font-bold">Experience</h1>
        <Accordian
          disabled={false}
          post="Intern Analyst"
          date="June, 2025 - August, 2025"
          organisation="Wells Fargo"
        >
          <ul className="text-sm">
            <li>
              Implemented log monitoring and analysis using Splunk Enterprise and Grafana, resulting in a 30% reduction in mean time to
resolution (MTTR) for critical incidents.
            </li>
            <li>
              Diagnosed and traced high-impact anomalies and exceptions, by developing alerting pipelines with SPL and regex, leading to
faster detection of infrastructure issues and improved alert accuracy.
            </li>
          </ul>
        </Accordian>
        <Accordian
          disabled={false}
          post="Research Fellow"
          date="August, 2024 - May, 2025"
          organisation="MeitY, Government of India"
        >
          <ul className="text-sm">
            <li>
              Designed deep learning models for crop health assessment, achieving 94% accuracy in yield prediction using drone imagery.
            </li>
            <li>
              Applied advanced image preprocessing, feature extraction, and data cleaning techniques to enhance model performance and
              scalability.
            </li>
          </ul>
        </Accordian>
        <Accordian
          disabled={false}
          post="System Administrator Intern"
          date="June, 2024 - July, 2024"
          organisation="Birlasoft - CK Birla Group"
        >
          <ul className="text-sm">
            <li>
              Managed system administration tasks to streamline incident identification, tracking, and resolution, improving operational
              efficiency by 25%.
            </li>
            <li>
              Implemented structured change management protocols, reducing unplanned service disruptions and increasing system uptime.
            </li>
          </ul>
        </Accordian>
      </div>

      <div className="py-8 flex flex-col gap-8">
        <h1 className="text-center text-xl font-bold">Education</h1>
        <Accordian
          disabled={true}
          post="National Institute of Technology, Kurukshetra"
          date="November, 2022 - Present"
          organisation="B.Tech in Computer and Engineering with a CGPA of 9.08"
        >
          <></>
        </Accordian>
        <Accordian
          disabled={true}
          post="Indian Public School, Jagadhri"
          date="April, 2020 - March, 2022"
          organisation="Senior Secondary Education with a percentage of 94%"
        >
          <></>
        </Accordian>
      </div>

      <div className="py-8 flex flex-col gap-8">
        <h1 className="text-center text-xl font-bold">Skills</h1>
        <div>
          <h1 className="mb-2 font-medium">Programming Languages</h1>
          <div className="flex flex-row flex-wrap gap-4 align-middle items-center">
            <Image
              className="0"
              alt="python"
              src="/assets/icons/languages/python.svg"
              width={24}
              height={24}
            />
            <span className="w-px bg-black h-5"></span>
            <Image
              className="0"
              alt="cpp"
              src="/assets/icons/languages/cpp.svg"
              width={24}
              height={24}
            />
            <span className="w-px bg-black h-5"></span>
            <Image
              className="0"
              alt="c"
              src="/assets/icons/languages/c.svg"
              width={24}
              height={24}
            />
            <span className="w-px bg-black h-5"></span>
            <Image
              className="0"
              alt="js"
              src="/assets/icons/languages/js.svg"
              width={24}
              height={24}
            />
            <span className="w-px bg-black h-5"></span>
            <Image
              className="0"
              alt="java"
              src="/assets/icons/languages/java.svg"
              width={24}
              height={24}
            />
            <span className="w-px bg-black h-5"></span>
            <Image
              className="0"
              alt="ts"
              src="/assets/icons/languages/ts.svg"
              width={24}
              height={24}
            />
          </div>
        </div>
        <div>
          <h1 className="mb-2 font-medium">Machine Learning</h1>
          <div className="mb-2 flex flex-row flex-wrap gap-4 align-middle items-center text-sm">
            <span>Regressions</span>
            <span className="w-px bg-black h-5"></span>
            <span>Neural Networks</span>
            <span className="w-px bg-black h-5"></span>
            <span>Convulational Neural Networks</span>
          </div>
          <div className="flex flex-row flex-wrap gap-4 align-middle items-center">
            <Image
              className="0"
              alt="numpy"
              src="/assets/icons/ml/numpy.svg"
              width={24}
              height={24}
            />
            <span className="w-px bg-black h-5"></span>
            <Image
              className="0"
              alt="tensorflow"
              src="/assets/icons/ml/tensorflow.svg"
              width={24}
              height={24}
            />
            <span className="w-px bg-black h-5"></span>
            <Image
              className="0"
              alt="pytorch"
              src="/assets/icons/ml/pytorch.svg"
              width={24}
              height={24}
            />
            <span className="w-px bg-black h-5"></span>
            <Image
              className="0"
              alt="pandas"
              src="/assets/icons/ml/pandas.svg"
              width={24}
              height={24}
            />
            <span className="w-px bg-black h-5"></span>
            <Image
              className="0"
              alt="matplotlib"
              src="/assets/icons/ml/matplotlib.svg"
              width={24}
              height={24}
            />
            <span className="w-px bg-black h-5"></span>
            <Image
              className="0"
              alt="jupyter"
              src="/assets/icons/ml/jupyter.svg"
              width={28}
              height={28}
            />
            <span className="w-px bg-black h-5"></span>
            <Image
              className="0"
              alt="kaggle"
              src="/assets/icons/ml/kaggle.svg"
              width={32}
              height={32}
            />
          </div>
        </div>
        <div>
          <h1 className="mb-2 font-medium">Web Development</h1>
          <div className="flex flex-row flex-wrap gap-4 align-middle items-center">
            <Image
              className="0"
              alt="nextjs"
              src="/assets/icons/webd/nextjs.svg"
              width={24}
              height={24}
            />
            <span className="w-px bg-black h-5"></span>
            <Image
              className="0"
              alt="reactjs"
              src="/assets/icons/webd/reactjs.svg"
              width={24}
              height={24}
            />
            <span className="w-px bg-black h-5"></span>
            <Image
              className="0"
              alt="html"
              src="/assets/icons/webd/html.svg"
              width={24}
              height={24}
            />
            <span className="w-px bg-black h-5"></span>
            <Image
              className="0"
              alt="css"
              src="/assets/icons/webd/css.svg"
              width={24}
              height={24}
            />
            <span className="w-px bg-black h-5"></span>
            <Image
              className="0"
              alt="flask"
              src="/assets/icons/webd/flask.svg"
              width={48}
              height={48}
            />
            <span className="w-px bg-black h-5"></span>
            <Image
              className="0"
              alt="fastapi"
              src="/assets/icons/webd/fastapi.svg"
              width={24}
              height={24}
            />
            <span className="w-px bg-black h-5"></span>
            <Image
              className="0"
              alt="sass"
              src="/assets/icons/webd/sass.svg"
              width={24}
              height={24}
            />
            <span className="w-px bg-black h-5"></span>
            <Image
              className="0"
              alt="tailwind"
              src="/assets/icons/webd/tailwind.svg"
              width={24}
              height={24}
            />
          </div>
        </div>
        <div>
          <h1 className="mb-2 font-medium">Database Systems</h1>
          <div className="flex flex-row flex-wrap gap-4 align-middle items-center">
            <Image
              className="0"
              alt="postgresql"
              src="/assets/icons/db/postgresql.svg"
              width={24}
              height={24}
            />
            <span className="w-px bg-black h-5"></span>
            <Image
              className="0"
              alt="mysql"
              src="/assets/icons/db/mysql.svg"
              width={24}
              height={24}
            />
            <span className="w-px bg-black h-5"></span>
            <Image
              className="0"
              alt="mongodb"
              src="/assets/icons/db/mongodb.svg"
              width={32}
              height={32}
            />
          </div>
        </div>
        <div>
          <h1 className="mb-2 font-medium">Cloud Technologies</h1>
          <div className="flex flex-row flex-wrap gap-4 align-middle items-center">
            <Image
              className="0"
              alt="firebase"
              src="/assets/icons/cloud/firebase.svg"
              width={20}
              height={20}
            />
            <span className="w-px bg-black h-5"></span>
            <Image
              className="0"
              alt="firebase"
              src="/assets/icons/cloud/googlecloud.svg"
              width={20}
              height={20}
            />
            <span className="w-px bg-black h-5"></span>
            <Image
              className="0"
              alt="firebase"
              src="/assets/icons/cloud/splunk.svg"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div>
          <h1 className="mb-2 font-medium">Tools</h1>
          <div className="flex flex-row flex-wrap gap-4 align-middle items-center">
            <Image
              className="0"
              alt="firebase"
              src="/assets/icons/tools/git.svg"
              width={20}
              height={20}
            />
            <span className="w-px bg-black h-5"></span>
            <Image
              className="0"
              alt="firebase"
              src="/assets/icons/tools/linux.svg"
              width={20}
              height={20}
            />
            <span className="w-px bg-black h-5"></span>
            <Image
              className="0"
              alt="firebase"
              src="/assets/icons/tools/postman.svg"
              width={20}
              height={20}
            />
            <span className="w-px bg-black h-5"></span>
            <Image
              className="0"
              alt="firebase"
              src="/assets/icons/tools/grafana.svg"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div>
          <h1 className="mb-2 font-medium">Course Work</h1>
          <div className="mb-2 flex flex-row flex-wrap gap-4 align-middle items-center text-sm">
            <span>Operating Systems</span>
            <span className="w-px bg-black h-5"></span>
            <span>Data Structures</span>
            <span className="w-px bg-black h-5"></span>
            <span>Design & Analysis of Algorithms</span>
            <span className="w-px bg-black h-5"></span>
            <span>OOPs</span>
            <span className="w-px bg-black h-5"></span>
            <span>Databases</span>
            <span className="w-px bg-black h-5"></span>
            <span>Internet of Things</span>
            <span className="w-px bg-black h-5"></span>
            <span>Discrete Mathematics</span>
            <span className="w-px bg-black h-5"></span>
            <span>Computer Networks</span>
            <span className="w-px bg-black h-5"></span>
            <span>AI & Soft Computing</span>
          </div>
        </div>
        <div>
          <h1 className="mb-2 font-medium">Soft Skills</h1>
          <div className="mb-2 flex flex-row flex-wrap gap-4 align-middle items-center text-sm">
            <span>Leadership</span>
            <span className="w-px bg-black h-5"></span>
            <span>Project Management</span>
            <span className="w-px bg-black h-5"></span>
            <span>Problem-Solving</span>
            <span className="w-px bg-black h-5"></span>
            <span>Critical Thinking</span>
            <span className="w-px bg-black h-5"></span>
            <span>Time Management</span>
          </div>
        </div>
      </div>

      <div className="py-8 flex flex-col gap-8">
        <h1 className="text-center text-xl font-bold">Volunteering</h1>
        <Accordian
          disabled={false}
          post="Content Creator"
          date="October, 2023 - Present"
          organisation="Break.The.Ice"
        >
          <p className="text-sm">
            Contributing to a youth-led non-profit dedicated to tackling
            societal taboos and shaping a better world through effective
            communication and strategic social media engagement.
          </p>
        </Accordian>
        <Accordian
          disabled={true}
          post="Member of Media and Tech team, External Participation (EP) team"
          date="September, 2023 – August, 2024"
          organisation="Technobyte - Techno-Managerial Society of Computer Engineering"
        >
          <></>
        </Accordian>
        <Accordian
          disabled={true}
          post="Co-Head of Design Team and member of Hindi and sponsorship team"
          date="September, 2023 – August, 2024"
          organisation="Anamika - Cultural Society"
        >
          <></>
        </Accordian>
        <Accordian
          disabled={false}
          post="Community Volunteer"
          date="December, 2022 - January, 2024"
          organisation="National Service Scheme ( NSS )"
        >
          <p className="text-sm">
            Actively contributed to social services and community projects,
            developing leadership skills and collaborating with diverse teams.
          </p>
        </Accordian>
      </div>
    </section>
  );
};

export default Resume;
