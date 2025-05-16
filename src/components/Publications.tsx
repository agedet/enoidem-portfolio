import Image from 'next/image'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import Link from 'next/link'

const PUBLICATIONS_JOURNAL_ARTICLES = [
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
        author: 'Usoro, e. B.',
        year: "(2016)",
        articleTitle: 'Towards Transformation of Higher Education in Nigeria: a Practical Reality',
        journalTitle: 'Multidisciplinary Journal of Academic Excellence.',
        volume: '15(1)',
        page: '',
        url: '',
        country: '',
        image: '/publications/journal/international/14.jpg',
    },
    {
        author: 'Akpan, G. A., Etim, V. E. P. & Usoro, E. B.',
        year: "(2009)",
        articleTitle: 'Relevance of Vocational Education to Small Scale Enterpreneurship Development',
        journalTitle: 'African Journal for Contemporary Issues in Education',
        volume: '4(1)',
        page: '52 - 57',
        url: 'www.ajeduionline.org',
        country: '(Ghana)',
        image: '/publications/journal/international/journal.jpg',
    },
    
    
]

const PUBLICATIONS_BOOK_CHAPTERS = [
    {
        author: 'Usoro, E. B., Bassey, S. U. & Bassey, U. U.',
        year: "",
        articleTitle: 'Functions of the University',
        bookTitle: 'In Management of Higher Education in Africa(eds)',
        volume: '',
        page: '19-40',
        url: '',
        publisher: 'Abaam Publishing Co. Uyo',
        country: '',
        image: '/publications/books/book.jpg',
    },
    {
        author: 'Akpan, G. A., Usoro, H. S. And Usoro, E. B. (2010)',
        articleTitle: 'Theoretical bases for Supervisory practices in Vocational Education',
        bookTitle: 'Readings in Vocational Administration and Supervision.',
        volume: '',
        page: '212 - 231',
        url: '',
        publisher: '',
        country: '',
        image: '/publications/books/book16.jpg',
    },
]

const PUBLICATIONS_CONFERENCE_PAPERS = [
    {
        author: 'Usoro, E. B.',
        year: "",
        paperTitle: 'Business Education: Skills Acquisition and Development for Posterity',
        conferenceTitle: '49th Inaugural Lecture of the University of Uyo',
        volume: '',
        page: '',
        url: '',
        publisher: '',
        country: '',
        image: '/publications/conference/49th-inaugral-lecture.jpg',
    },
]


function Publications() {
  return (
    <section id="publications" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Publications professor enoidem usoro">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-text px-4 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Publications</h2>
        </div>

        <div className='mt-6'>
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
           
                <TabsContent value='journal' className='w-full'>
                    <ul className="group/list">
                        {PUBLICATIONS_JOURNAL_ARTICLES.map((publication, index) => (
                            <li key={index} className="mb-12">
                                <div className="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-text lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                    
                                    <Image 
                                        src={publication.image}
                                        alt={publication.articleTitle}  
                                        width={300} 
                                        height={200} 
                                        className="transparent object-cover z-10 col-span-2 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2"  
                                    />

                                    <div className="z-10 col-span-6">
                                        <h3 className="-mt-1">
                                            <a className="inline-flex items-baseline font-medium leading-tight text-text hover:text-primary focus-visible:text-primary  group/link text-base"  aria-label="(opens in a new tab)">
                                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                <span>{publication.author} {' '} 
                                                    <span className="inline-block">{publication.year}
                                                        <svg 
                                                            xmlns="http://www.w3.org/2000/svg" 
                                                            viewBox="0 0 20 20" 
                                                            fill="currentColor" 
                                                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" 
                                                            aria-hidden="true"
                                                        >
                                                            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                                        </svg>
                                                    </span>
                                                </span>
                                            </a>
                                        </h3>

                                        <p className="mt-2 text-sm leading-normal text-text hover:text-[#ffffff] focus-visible:text-[#ffffff] group-hover:text-white group/link">
                                            <span className='italic'>
                                                {publication.articleTitle}.
                                            </span> {' '}
                                            <span> 
                                                {publication.journalTitle} 
                                            </span> {' '} 
                                            <span> 
                                                {publication.volume} 
                                            </span> {' '} 
                                            <span> 
                                                {publication.page} 
                                            </span> {' '} 
                                            <span>{publication.url}</span> {' '}
                                            <span>
                                                {publication.country}.
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-12">
                        <Link href="/archive" aria-label="View Full Project Archive" legacyBehavior>
                            <a className="inline-flex items-baseline font-medium leading-tight text-text hover:text-primary focus-visible:text-primary font-semibold text-slate-200 group/link text-base">
                                <span>
                                    <span className="border-b border-transparent pb-px transition group-hover:border-primary motion-reduce:transition-none">
                                        View Full{' '} 
                                    </span>
                                    <span className="whitespace-nowrap">
                                        <span className="border-b border-transparent pb-px transition group-hover:border-primary motion-reduce:transition-none">
                                            Publications
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" aria-hidden="true">
                                            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                </span>
                            </a>
                        </Link>
                    </div>
                </TabsContent>

                <TabsContent value='book' className='w-full'>
                    <ul className="group/list">
                        {PUBLICATIONS_BOOK_CHAPTERS.map((book, index) => (
                            <li key={index} className="mb-12">
                                <div className="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-text lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                    
                                    <Image 
                                        src={book.image}
                                        alt={book.articleTitle}  
                                        width={300} 
                                        height={200} 
                                        className="transparent object-cover z-10 col-span-2 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2"  
                                    />

                                    <div className="z-10 col-span-6">
                                        <h3 className="-mt-1">
                                            <a className="inline-flex items-baseline font-medium leading-tight text-text hover:text-primary focus-visible:text-primary  group/link text-base"  aria-label="(opens in a new tab)">
                                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                <span>{book.author} {' '} 
                                                    <span className="inline-block">{book.year}
                                                        <svg 
                                                            xmlns="http://www.w3.org/2000/svg" 
                                                            viewBox="0 0 20 20" 
                                                            fill="currentColor" 
                                                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" 
                                                            aria-hidden="true"
                                                        >
                                                            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                                        </svg>
                                                    </span>
                                                </span>
                                            </a>
                                        </h3>

                                        <p className="mt-2 text-sm leading-normal group-hover:text-white">
                                            <span className='italic '>
                                                {book.articleTitle}.
                                            </span> {' '}
                                            <span> 
                                                {book.bookTitle} 
                                            </span> {' '} 
                                            <span> 
                                                {book.volume} 
                                            </span> {' '} 
                                            <span> 
                                                {book.page} 
                                            </span> {' '} 
                                            <span>{book.url}</span> {' '}
                                            <span>
                                                {book.country}.
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-12">
                        <Link href="/archive" aria-label="View Full Project Archive" legacyBehavior>
                        <a className="inline-flex items-baseline font-medium leading-tight text-text hover:text-primary focus-visible:text-primary font-semibold text-slate-200 group/link text-base">
                            <span>
                                <span className="border-b border-transparent pb-px transition group-hover:border-primary motion-reduce:transition-none">
                                    View Full{' '} 
                                </span>
                                <span className="whitespace-nowrap">
                                    <span className="border-b border-transparent pb-px transition group-hover:border-primary motion-reduce:transition-none">
                                        Publications
                                    </span>

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" aria-hidden="true">
                                        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path>
                                    </svg>
                                </span>
                            </span>
                        </a>
                        </Link>
                    </div>
                </TabsContent>

                <TabsContent value='conference' className='w-full'>
                    <ul className="group/list">
                        {PUBLICATIONS_CONFERENCE_PAPERS.map((conference, index) => (
                            <li key={index} className="mb-12">
                                <div className="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-text lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                    
                                    <Image 
                                        src={conference.image}
                                        alt={conference.paperTitle}  
                                        width={300} 
                                        height={200} 
                                        className="transparent object-cover z-10 col-span-2 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2"  
                                    />

                                    <div className="z-10 col-span-6">
                                        <h3 className="-mt-1">
                                            <a className="inline-flex items-baseline font-medium leading-tight text-text hover:text-primary focus-visible:text-primary  group/link text-base"  aria-label="(opens in a new tab)">
                                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                <span>{conference.author} {' '} 
                                                    <span className="inline-block">{conference.year}
                                                        <svg 
                                                            xmlns="http://www.w3.org/2000/svg" 
                                                            viewBox="0 0 20 20" 
                                                            fill="currentColor" 
                                                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" 
                                                            aria-hidden="true"
                                                        >
                                                            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                                        </svg>
                                                    </span>
                                                </span>
                                            </a>
                                        </h3>

                                        <p className="mt-2 text-sm leading-normal group-hover:text-white">
                                            <span className='italic '>
                                                {conference.paperTitle}.
                                            </span> {' '}
                                            <span> 
                                                {conference.conferenceTitle} 
                                            </span> {' '} 
                                            <span> 
                                                {conference.volume} 
                                            </span> {' '} 
                                            <span> 
                                                {conference.page} 
                                            </span> {' '} 
                                            <span>{conference.url}</span> {' '}
                                            <span>
                                                {conference.country}.
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-12">
                        <Link aria-label="View Full Project Archive" href="/archive" legacyBehavior>
                        <a className="inline-flex items-baseline font-medium leading-tight text-text hover:text-primary focus-visible:text-primary font-semibold text-slate-200 group/link text-base" >
                            <span>
                                <span className="border-b border-transparent pb-px transition group-hover:border-primary motion-reduce:transition-none">
                                    View Full{' '} 
                                </span>
                                <span className="whitespace-nowrap">
                                    <span className="border-b border-transparent pb-px transition group-hover:border-primary motion-reduce:transition-none">
                                        Publications
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" aria-hidden="true">
                                        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path>
                                    </svg>
                                </span>
                            </span>
                        </a>
                        </Link>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    </section>
  )
}

export default Publications