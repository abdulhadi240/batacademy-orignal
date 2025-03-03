import Image from 'next/image'
import HeaderSection from '@/components/HeaderSection'
import HeroSection from '@/components/HeroSection'
import ContentSection from '@/components/ContentSection'
import CourseList from '@/components/CourseList'
import CourseTable from '@/components/CourseTable'


export default function Abudhabi() {
  return (
    <div className="min-h-screen ">
      <HeaderSection />
      <main className="container mx-auto px-4 py-8">
        <HeroSection />
        
        <ContentSection title="About Abu Dhabi">
          <p className="text-gray-700 leading-relaxed">
            Abu Dhabi is a city of creativity, heritage, history, and modernity. At the British Academy for Training and Development, we offer a variety of training courses in Abu Dhabi, fulfilling our clients' ambitions by allowing them to experience a unique blend of enjoyment, excitement, and professional development.
          </p>
        </ContentSection>


        <div className="mt-6 mx-16">
          <CourseTable />
        </div>
        
        <ContentSection title="Our Partnerships">
          <p className="text-gray-700 leading-relaxed">
            The British Academy takes pride in hosting leading institutions and companies, particularly from the Middle East. We have established strategic partnerships with major research institutions, including the Kuwait Public Investment Authority, the Kuwait Institute for Scientific Research, and many others.
          </p>
        </ContentSection>

        <ContentSection title="Training Courses in Abu Dhabi">
          <p className="text-gray-700 leading-relaxed mb-4">
            The British Academy for Training and Development in Abu Dhabi offers a wide range of courses covering various specializations needed by individuals, institutions, and companies globally. Some of our most important courses include:
          </p>
          <CourseList />
        </ContentSection>

        <ContentSection title="Our Training Staff">
          <p className="text-gray-700 leading-relaxed">
            The British Academy boasts a team of highly qualified trainers with extensive academic and practical experience. We believe in integrating cultures from both scientific and cultural perspectives, which is why our trainers come from various backgrounds and are fluent in multiple languages.
          </p>
        </ContentSection>

        <ContentSection title="Training Centers in Abu Dhabi">
          <p className="text-gray-700 leading-relaxed">
            We have conducted training courses in hundreds of high-end centers throughout Abu Dhabi. The academy has contracts with most hotels and cultural centers to host conferences, workshops, and training courses in these prestigious venues.
          </p>
        </ContentSection>

        <ContentSection title="Our Commitment">
          <p className="text-gray-700 leading-relaxed mb-6">
            At the British Academy for Training and Development, we provide our clients with a unique educational training experience through our courses in Abu Dhabi. We ensure that you will leave with a wonderful impression that guarantees your return to visit us many times.
          </p>
          <div className="flex justify-center">
            <Image
              src="https://batdacademy.com/uploads/1581968955728-90.jpg"
              alt="British Academy for Training and Development"
              width={1000}
              height={800}
              className="rounded-lg"
            />
          </div>
        </ContentSection>
      </main>
    </div>
  )
}

