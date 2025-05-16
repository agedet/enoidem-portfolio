'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
// import Image from 'next/image';

const PUBLICATIONS_INTER_JOURNAL_ARTICLES = [
  {
    id: 1,
    slug: 'Multifaceted skills in Business Education and Increased Productivity among Business Educators in College of Education in Delta State',
    author: 'Umoeshiet. E. A. And Usoro, E. B.',
    year: '(2015)',
    articleTitle: 'Multifaceted skills in Business Education and Increased Productivity among Business Educators in College of Education in Delta State',
    journalTitle: 'Educational Research International.',
    volume: '4(3-4)',
    page: '',
    url: '',
    country: 'Pakistan',
    image: '',
  },
  {
    id: 2,
    slug: 'Evaluating Managerial Skills for Business Education in a Technological Age',
    author: 'Usoro, E. B., Okon, F. I., Usoro, d. D. And Akpan E. O.',
    year: '(2013)',
    articleTitle: 'Evaluating Managerial Skills for Business Education in a Technological Age',
    journalTitle: 'African research review.',
    volume: '7(1)',
    page: '252-260',
    url: '',
    country: 'Ethiopia',
    image: '',
  },
  {
    id: 3,
    slug: 'Strategies for Improving the Quality of Undergraduate Research Supervision among Business Educators in Tertiary Institutions in Cross River and Akwa Ibom States',
    author: 'Usoro, E. B., Undie, S. B. And Ushie, P. U.',
    year: '(2012)',
    articleTitle: 'Strategies for Improving the Quality of Undergraduate Research Supervision among Business Educators in Tertiary Institutions in Cross River and Akwa Ibom States',
    journalTitle: 'International Journal of Innovations in Educational methods.',
    volume: '4(3)',
    page: '149-157',
    url: '',
    country: 'Ghana',
    image: '',
  },
  {
    id: 4,
    slug: 'Problems and Strategies for Private Sector Development in Akwa Ibom State, Nigeria',
    author: 'Akpan, G. A., Usoro, E. B. And Akpan, A. E.',
    year: '(2011)',
    articleTitle: 'Problems and Strategies for Private Sector Development in Akwa Ibom State, Nigeria',
    journalTitle: 'Journal of Sustainable Development in Africa.',
    volume: '13(8)',
    page: '129-141. July.',
    url: '',
    country: 'USA',
    image: '/publications/journal/international/24.jpg',
  },
  {
    id: 5,
    slug: 'Economic Development Theories and National Development in Nigeria.',
    author: 'Akpan, G. A., Usoro, E. B. And Akpan, A. E.',
    year: '(2011)',
    articleTitle: 'Economic Development Theories and National Development in Nigeria.',
    journalTitle: 'African Journal of Contemporary Issues.',
    volume: 'II(i)',
    page: '201-211.',
    url: '',
    country: 'Cameroon',
    image: '/publications/journal/international/22.jpg',
  },
  {
    id: 6,
    slug: 'Attitude of Vocational Education Teachers in Akwa Ibom State Secondary Schools towards Instructional Supervision: a concern for Sustainable Development in the Third World.',
    author: 'Usoro, H. S, Usoro, E. B., Offiong, A. A., Ebong, P. S. And Udo, I. I.',
    year: '(2011)',
    articleTitle: 'Attitude of Vocational Education Teachers in Akwa Ibom State Secondary Schools towards Instructional Supervision: a concern for Sustainable Development in the Third World.',
    journalTitle: 'International Journal of Research in Education.',
    volume: '3(6)',
    page: '',
    url: '',
    country: 'Ghana',
    image: '/publications/journal/international/19.jpg',
  },
  {
    id: 7,
    slug: 'Impact of Recession in Akwa Ibom State 2009 - 2010 Budget: Vocational and Technical Education in Perspective.',
    author: 'Akpan, O. J., Usoro, H., Usoro, E. B. & Akpan, G. A.',
    year: '(2010)',
    articleTitle: 'Impact of Recession in Akwa Ibom State 2009 - 2010 Budget: Vocational and Technical Education in Perspective.',
    journalTitle: 'International Journal of Vocational Studies.',
    volume: '2(1)',
    page: '27-35',
    url: 'www.ccsdev.org',
    country: 'Ghana',
    image: '/publications/journal/international/23.jpg',
  },
  {
    id: 8,
    slug: 'Entrepreneurial Curriculum Guidance on Vocational choices of Senior Secondary School Students in Akwa Ibom State, Nigeria.',
    author: 'Udofia, N. A., Usoro, E. B., Afangideh, M. E. & Umoh, E. E.',
    year: '(2010)',
    articleTitle: 'Entrepreneurial Curriculum Guidance on Vocational choices of Senior Secondary School Students in Akwa Ibom State, Nigeria.',
    journalTitle: 'Proceedings Volume of 2nd Annual International Conference for Economics, Business, and Entrepreneurship in Africa - the Academy of Business and Public Policy, Illnois, USA.',
    volume: '1(1)',
    page: '200-207',
    url: '',
    country: '',
    image: '/publications/journal/international/35.jpg',
  },
  {
    id: 9,
    slug: 'Developing Human Resources in Tertiary Business Education for Youth Empowerment and National Development.',
    author: 'Usoro, E. B.',
    year: '(2010)',
    articleTitle: 'Developing Human Resources in Tertiary Business Education for Youth Empowerment and National Development.',
    journalTitle: 'Nigeria Review of Higher Education in Africa.',
    volume: '2(1)',
    page: '13-21 October',
    url: '',
    country: 'USA',
    image: '/publications/journal/international/10.jpg',
  },
  {
    id: 10,
    slug: 'Relevance of Vocational Education to Small Scale Enterpreneurship Development.',
    author: 'Akpan, G. A., Etim, V. E. P. & Usoro, E. B.',
    year: '(2009)',
    articleTitle: 'Relevance of Vocational Education to Small Scale Enterpreneurship Development.',
    journalTitle: 'African Journal for Contemporary Issues in Education.',
    volume: '4(1)',
    page: '52-57',
    url: 'www.ajeduionline.org',
    country: 'Ghana',
    image: '/publications/journal/international/11.jpg',
  },
  {
    id: 11,
    slug: 'Managing Education for Poverty Alleviation in South-South Nigeria.',
    author: 'Usoro, E. B., Bassey S. U. And Umobong, M. E.',
    year: '(2008)',
    articleTitle: 'Managing Education for Poverty Alleviation in South-South Nigeria.',
    journalTitle: 'African Educational Research Network and the African Symposium.',
    volume: '8(2)',
    page: '116-127',
    url: '',
    country: 'USA',
    image: '/publications/journal/international/28.jpg',
  },
  {
    id: 12,
    slug: 'Comparative Analysis of Administrative Competencies of Male and Female Secondary School Principals in Supervision.',
    author: 'Usoro, E. B. And Akpan, A. A.',
    year: '(2008)',
    articleTitle: 'Comparative Analysis of Administrative Competencies of Male and Female Secondary School Principals in Supervision.',
    journalTitle: 'African Research Review.',
    volume: '2(2)',
    page: '',
    url: '',
    country: 'Ethiopia',
    image: '/publications/journal/international/26.jpg',
  },
  {
    id: 13,
    slug: 'An Analytical Study of the Roles and problems associated with Information Utilization by policy decisions makers in Nigeria.',
    author: 'Usoro, E. B. And Nkanu, W. O.',
    year: '(2007)',
    articleTitle: 'An Analytical Study of the Roles and problems associated with Information Utilization by policy decisions makers in Nigeria.',
    journalTitle: 'South-South Journal of Culture and Development (SJCD).',
    volume: '9(1)',
    page: '51-68',
    url: '',
    country: '',
    image: '/publications/journal/international/6.jpg',
  },
];

// const PUBLICATIONS_LOCAL_JOURNAL_ARTICLES = [
//   {
//     id: 1,
//     slug: 'Towards the Consolidation of the Nigerian Culture',
//     author: 'Usoro, E. B., Umoh, J. O. And Modo, I. V. O.',
//     year: '(1995)',
//     articleTitle: 'Towards the Consolidation of the Nigerian Culture',
//     journalTitle: 'Ibom Journal of Social Issues.',
//     volume: '2(2)',
//     page: '144 - 158',
//     url: '',
//     country: '',
//     image: '/publications/journal/local/39.jpg',
//   },
//   {
//     id: 2,
//     slug: 'Identification and comparison of the major factors that influence the Occupational choice of Male and Female business studies teachers in Akwa Ibom State',
//     author: 'Usoro, E. B.',
//     year: '(1998)',
//     articleTitle: 'Identification and comparison of the major factors that influence the Occupational choice of Male and Female business studies teachers in Akwa Ibom State',
//     journalTitle: 'Nigerian Journal of Vocational Teacher Education (NJOVTE)',
//     volume: '1(1)',
//     page: '137 - 144',
//     url: '',
//     country: '',
//     image: '/publications/journal/local/21.jpg',
//   },
//   {
//     id: 3,
//     slug: 'Learning Facilities as Indices for Quality Education in Akwa Ibom State',
//     author: 'Usoro, E. B.',
//     year: '(1999)',
//     articleTitle: 'Learning Facilities as Indices for Quality Education in Akwa Ibom State',
//     journalTitle: 'Journal of education and training technology (jett)',
//     volume: '1',
//     page: '36 - 42',
//     url: '',
//     country: '',
//     image: '/publications/journal/local/17.jpg',
//   },
//   {
//     id: 4,
//     slug: 'Nutritional Problems among Rural and Urban Vocational Education Students in Akwa Ibom State',
//     author: 'Usoro, E. B.',
//     year: '(2000)',
//     articleTitle: 'Nutritional Problems among Rural and Urban Vocational Education Students in Akwa Ibom State',
//     journalTitle: 'University of Uyo Journal of Women Academics (UJOWACS)',
//     volume: '1(1)',
//     page: '49 - 55',
//     url: '',
//     country: '',
//     image: '/publications/journal/local/4.jpg',
//   },
//   {
//     id: 5,
//     slug: 'The need for Occupational Information in Nigerian Schools',
//     author: 'Usoro, E. B.',
//     year: '(1998)',
//     articleTitle: 'The need for Occupational Information in Nigerian Schools',
//     journalTitle: 'Nigerian Journal of Vocational Teacher Education (NJOVTE)',
//     volume: '1(1)',
//     page: '146 - 151',
//     url: '',
//     country: '',
//     image: '/publications/journal/local/33.jpg',
//   },
//   {
//     id: 6,
//     slug: 'Influence of Dwindling Economy on the performance of Community Banks in Akwa Ibom State',
//     author: 'Usoro, E. B.',
//     year: '(1999)',
//     articleTitle: 'Influence of Dwindling Economy on the performance of Community Banks in Akwa Ibom State',
//     journalTitle: 'International Journal of Educational Development (IJED)',
//     volume: '2(1)',
//     page: '70 - 77 September',
//     url: '',
//     country: '',
//     image: '/publications/journal/local/41.jpg',
//   },
//   {
//     id: 7,
//     slug: 'Women in Vocational Education: Attitudinal Approach to job choice',
//     author: 'Usoro, E. B.',
//     year: '(2000)',
//     articleTitle: 'Women in Vocational Education: Attitudinal Approach to job choice',
//     journalTitle: 'Journal of Women in Academics (JOWACS)',
//     volume: '1(1)',
//     page: '159 - 164',
//     url: '',
//     country: '',
//     image: '/publications/journal/local/38.jpg',
//   },
//   {
//     id: 8,
//     slug: 'Alienating Unemployment through skill Development in Business Bducation',
//     author: 'Usoro, E. B.',
//     year: '(2000)',
//     articleTitle: 'Alienating Unemployment through skill Development in Business Bducation',
//     journalTitle: 'International Journal of Educational Development (IJED)',
//     volume: '3 (1)',
//     page: '173 - 178',
//     url: '',
//     country: '',
//     image: '/publications/journal/local/27.jpg',
//   },
// ];

const PAGE_SIZE = 5; // 1 article per page for demo (you can set to 5 etc)

export default function ArticlesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  // const [loading, setLoading] = useState(true);

  const totalPages = Math.ceil(PUBLICATIONS_INTER_JOURNAL_ARTICLES.length / PAGE_SIZE);

  // useEffect(() => {
    // setLoading(true);
    // const timeout = setTimeout(() => setLoading(false), 500); // simulate loading
    // return () => clearTimeout(timeout);
  // }, [currentPage]);

  const paginatedArticles = PUBLICATIONS_INTER_JOURNAL_ARTICLES.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  return (
    <main className=''>
      <div className='bg-text'>
        <div className='pt-8 mx-auto max-w-screen-xl px-6 md:px-12'>
          <div>
            <Breadcrumb>
            
            </Breadcrumb>
            <Link href="/" className="text-white hover:underline">
              ← Back to Home
            </Link>
          </div>

          <div className='py-8'>
            <h1 className="text-3xl text-white font-bold mb-8 text-start hover:text-white">Publications</h1>
          </div>
        </div>
      </div>

      <div className='flex flex-col mx-auto max-w-screen-xl pt-[20px] pb-[80px] px-6 md:px-12  md:flex-row gap-14'>
        <section className='flex-[4]'>
          <div className="space-y-8 py-8">
            <div>
              <Tabs defaultValue='journal'>
                <TabsList className='mb-6 flex gap-1 xl:mx-0 xl:gap-6'>
                  <TabsTrigger value="journal" className="font-semibold text-xs">
                   Journal Articles
                  </TabsTrigger>
                  <TabsTrigger value="book" className="font-semibold text-xs">
                    Book Chapters
                  </TabsTrigger>
                  <TabsTrigger value="conference" className="font-semibold text-xs">
                    Conference Papers
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="journal" className="pt-4 space-y-4">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="international">
                      <AccordionTrigger>International Articles</AccordionTrigger>
                      <AccordionContent>
                        {paginatedArticles.map((article) => (
                          <motion.div
                            key={article.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                          >
                            <div className="py-2">
                              <p className="mt-2 text-sm text-black leading-normal">
                                <span>{article.author} {' '} 
                                  <span className="inline-block">
                                    {article.year}. 
                                  </span>
                                </span> {' '}
                                <Link href={`/archive/${article.slug}`}>
                                  <span className='italic'>
                                    {article.articleTitle}.
                                  </span> {' '}
                                </Link>
                                <span> 
                                  {article.journalTitle} 
                                </span> {' '} 
                                <span> 
                                  {article.volume} 
                                </span> {' '} 
                                <span> 
                                  {article.page} 
                                </span> {' '} 
                                <span>{article.url}</span> {' '}
                                <span>
                                  {article.country}.
                                </span>
                              </p>

                              <Link href={`/archive/${article.slug}`}>
                                <span className="text-primary hover:underline inline-block mt-4">View →</span>
                              </Link>
                            </div>
                          </motion.div>
                        ))}
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="local">
                      <AccordionTrigger>Local Articles</AccordionTrigger>
                      
                      <AccordionContent>
                        {paginatedArticles.map((article) => (
                          <motion.div
                            key={article.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                          >
                            <div className="py-2">
                              <p className="mt-2 text-sm text-black leading-normal">
                                <span>{article.author} {' '} 
                                  <span className="inline-block">
                                    {article.year}. 
                                  </span>
                                </span> {' '}
                                <Link href={`/archive/${article.slug}`}>
                                  <span className='italic'>
                                    {article.articleTitle}.
                                  </span> {' '}
                                </Link>
                                <span> 
                                  {article.journalTitle} 
                                </span> {' '} 
                                <span> 
                                  {article.volume} 
                                </span> {' '} 
                                <span> 
                                  {article.page} 
                                </span> {' '} 
                                <span>{article.url}</span> {' '}
                                <span>
                                  {article.country}.
                                </span>
                              </p>

                              <Link href={`/archive/${article.slug}`}>
                                <span className="text-primary hover:underline inline-block mt-4">View →</span>
                              </Link>
                            </div>
                          </motion.div>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>

                <TabsContent value="book" className="pt-4">
                  <p className="text-gray-600">No books available yet.</p>
                </TabsContent>

                <TabsContent value="conference" className="pt-4">
                  <p className="text-gray-600">No conference papers available yet.</p>
                </TabsContent>
               
              </Tabs>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12 space-x-2">
            {currentPage > 1 && (
              <button
                onClick={() => setCurrentPage((p) => p - 1)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Prev
              </button>
            )}
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === i + 1 ? 'bg-primary text-white' : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {i + 1}
              </button>
            ))}
            {currentPage < totalPages && (
              <button
                onClick={() => setCurrentPage((p) => p + 1)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Next
              </button>
            )}
          </div>
        </section>
        
        <section className='flex-[3] border-l border-slate-200 pl-8'>
          <div className="py-8">
            <div>
              <h1 className="text-xl text-text font-semibold mb-8 text-start hover:text-text">Conference Papers</h1>
            </div>

            <div>
              <h1 className="text-xl text-text font-semibold mb-8 text-start hover:text-text">Books</h1>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
