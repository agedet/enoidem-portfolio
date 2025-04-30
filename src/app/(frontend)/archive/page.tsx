'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import Image from 'next/image';

const PUBLICATIONS_JOURNAL_ARTICLES = [
  {
    id: 1,
    slug: 'towards-transformation-of-higher-education-in-nigeria-a-practical-reality',
    author: 'Usoro, E. B.',
    year: '(2016)',
    articleTitle: 'Towards Transformation of Higher Education in Nigeria: a Practical Reality',
    journalTitle: 'Multidisciplinary Journal of Academic Excellence.',
    volume: '15(1)',
    page: '',
    url: '',
    country: '',
    // image: '/publications/journal/14.jpg',
  },
  {
    id: 2,
    slug: 'relevance-of-vocational-education-to-small-scale-entrepreneurship-development',
    author: 'Akpan, G. A., Etim, V. E. P. & Usoro, E. B.',
    year: '(2009)',
    articleTitle: 'Relevance of Vocational Education to Small Scale Entrepreneurship Development',
    journalTitle: 'African Journal for Contemporary Issues in Education',
    volume: '4(1)',
    page: '52 - 57',
    url: 'www.ajeduionline.org',
    country: '(Ghana)',
    image: '/publications/journal/journal.jpg',
  },
];

const PAGE_SIZE = 5; // 1 article per page for demo (you can set to 5 etc)

export default function ArticlesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  // const [loading, setLoading] = useState(true);

  const totalPages = Math.ceil(PUBLICATIONS_JOURNAL_ARTICLES.length / PAGE_SIZE);

  // useEffect(() => {
    // setLoading(true);
    // const timeout = setTimeout(() => setLoading(false), 500); // simulate loading
    // return () => clearTimeout(timeout);
  // }, [currentPage]);

  const paginatedArticles = PUBLICATIONS_JOURNAL_ARTICLES.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  return (
    <main className=''>
      <div className='bg-background'>
        <div className='pt-8 mx-auto max-w-screen-xl px-6 md:px-12'>
          <div>
            <Breadcrumb>
            
            </Breadcrumb>
            <Link href="/" className="text-slate-200 hover:underline">
              ← Back to Home
            </Link>
          </div>

          <div className='py-8'>
            <h1 className="text-4xl text-slate-200 font-bold mb-8 text-start hover:text-slate-200">Publications</h1>
          </div>
        </div>
      </div>

      <div className='flex flex-col mx-auto max-w-screen-xl px-6 md:px-12  md:flex-row gap-14'>
        <section className='flex-[4]'>
          <div className="space-y-8 py-8">
            <div>
              <Tabs>
                <TabsList>
                  <TabsTrigger value="journal" className="text-white font-semibold">
                    Journal Articles
                  </TabsTrigger>
                  <TabsTrigger value="conference" className="text-white font-semibold">
                    Conference Papers
                  </TabsTrigger>
                  <TabsTrigger value="book" className="text-white font-semibold">
                    Books
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="journal" className="pt-4 space-y-4">
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
                </TabsContent>
                <TabsContent value="conference" className="pt-4">
                  <p className="text-gray-600">No conference papers available yet.</p>
                </TabsContent>
                <TabsContent value="book" className="pt-4">
                  <p className="text-gray-600">No books available yet.</p>
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
        
        <section className='flex-[3]'>
          <div className="py-8">
            <div>
              <h1 className="text-4xl text-slate-200 font-bold mb-8 text-start hover:text-slate-200">Conference Papers</h1>
            </div>

            <div>
              <h1 className="text-4xl text-slate-200 font-bold mb-8 text-start hover:text-slate-200">Books</h1>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
