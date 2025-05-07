import React from 'react'

function page() {
  return (
    <div>page</div>
  )
}

export default page


// 'use client'

// import { notFound } from 'next/navigation';
// import { Breadcrumb } from "@/components/ui/breadcrumb";
// import { Button } from "@/components/ui/button";
// // import Image from "next/image";
// import Link from "next/link";

// // import { useParams } from "next/navigation"

// const PUBLICATIONS_JOURNAL_ARTICLES = [
//     {
//       id: 1,
//       slug: 'towards-transformation-of-higher-education-in-nigeria-a-practical-reality',
//       author: 'Usoro, E. B.',
//       year: '(2016)',
//       articleTitle: 'Towards Transformation of Higher Education in Nigeria: a Practical Reality',
//       journalTitle: 'Multidisciplinary Journal of Academic Excellence.',
//       volume: '15(1)',
//       page: '',
//       url: '',
//       country: '',
//       // image: '/publications/journal/14.jpg',
//       pdfUrl: '',
//     },
//     {
//       id: 2,
//       slug: 'relevance-of-vocational-education-to-small-scale-entrepreneurship-development',
//       author: 'Akpan, G. A., Etim, V. E. P. & Usoro, E. B.',
//       year: '(2009)',
//       articleTitle: 'Relevance of Vocational Education to Small Scale Entrepreneurship Development',
//       journalTitle: 'African Journal for Contemporary Issues in Education',
//       volume: '4(1)',
//       page: '52 - 57',
//       url: 'www.ajeduionline.org',
//       country: '(Ghana)',
//       image: '/publications/journal/journal.jpg',
//       pdfUrl: '',
//     },
// ];

// export default function ArticleDetailsPage ({params}: {params: { slug: string }}) {
    
//     const article = PUBLICATIONS_JOURNAL_ARTICLES.find((article) => article.slug === params.slug);

//     if (!article) return notFound();

//     return (
//         <main>
//             <div className='bg-background'>
//                 <div className='pt-8 mx-auto max-w-screen-xl px-6 md:px-12'>
//                     <div>
//                         <Breadcrumb>
                        
//                         </Breadcrumb>
//                         <Link href="/archive" className="text-slate-200 hover:underline">
//                             ← Back to Archive
//                         </Link>
//                     </div>

//                     <div className='py-8'>
//                         <h1 className="text-4xl text-slate-200 font-bold mb-8 text-start hover:text-slate-200">Publications</h1>
//                     </div>
//                 </div>
//             </div>

//             <div className="flex flex-col mx-auto max-w-screen-xl px-6 md:px-12  md:flex-row gap-14">
//                 <section className="flex-[4]">
//                     <div className="space-y-8 py-8">
//                         <h1 className="text-2xl font-bold mb-4">{article.articleTitle}</h1>

//                         <div className="mb-6 text-gray-700">
//                             <p><strong>Author:</strong> {article.author}</p>
//                             <p><strong>Year:</strong> {article.year}</p>
//                             <p><strong>Journal:</strong> {article.journalTitle}</p>
//                             <p><strong>Volume:</strong> {article.volume}</p>
//                             <p><strong>Pages:</strong> {article.page || 'N/A'}</p>
//                             <p><strong>Country:</strong> {article.country || 'N/A'}</p>
//                             {article.url && (
//                             <p>
//                                 <strong>URL:</strong>{' '}
//                                 <a href={`https://${article.url}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//                                 {article.url}
//                                 </a>
//                             </p>
//                             )}

//                             <Button variant="outline" className="bg-primary text-white mt-4">
//                                 <Link href={article.pdfUrl} target="_blank" rel="noopener noreferrer">
//                                     View PDF
//                                 </Link>
//                             </Button>
//                         </div>
//                     </div>
//                 </section>

//                 <section className='flex-[3]'>
//                     <div className="py-8">
//                         <div>
//                             <h1 className="text-4xl text-slate-200 font-bold mb-8 text-start hover:text-slate-200">Conference Papers</h1>
//                         </div>

//                         <div>
//                             <h1 className="text-4xl text-slate-200 font-bold mb-8 text-start hover:text-slate-200">Books</h1>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         </main>
//     )
// }