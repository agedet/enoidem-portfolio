import Image from 'next/image'
import React from 'react'

const PUBLICATIONS_JOURNAL_ARTICLES = [
    {
        author: 'Usoro, e. B.',
        year: 2016,
        articleTitle: 'Towards Transformation of Higher Education in Nigeria: a Practical Reality',
        journalTitle: 'Multidisciplinary Journal of Academic Excellence.',
        volume: '15(1)',
        page: '',
        url: '',
        country: '',
        image: '/publications/journal/14.jpg',
    },
    {
        author: 'Akpan, G. A., Etim, V. E. P. & Usoro, E. B.',
        year: 2009,
        articleTitle: 'Relevance of Vocational Education to Small Scale Enterpreneurship Development',
        journalTitle: 'African Journal for Contemporary Issues in Education',
        volume: '4(1)',
        page: '52 - 57',
        url: 'www.ajeduionline.org',
        country: 'Ghana',
        image: '/publications/journal/journal.jpg',
    },
    
    
]

// const PUBLICATIONS_BOOK_CHAPTERS = [
//     {
//         author: 'Usoro, E. B., Bassey, S. U. & Bassey, U. U.',
//         articleTitle: 'Functions of the University',
//         journalTitle: 'In Management of Higher Education in Africa(eds)',
//         page: '19-40',
//         publisher: 'Abaam Publishing Co. Uyo',
//         image: '/publications/book.jpg',
//     },
// ]


function Publications() {
  return (
    <section id="writing" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Blog posts">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Publications</h2>
        </div>
        <div>
            <ul className="group/list">
                {PUBLICATIONS_JOURNAL_ARTICLES.map((publication, index) => (
                    <li key={index} className="mb-12">
                        <div className="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                            
                            <Image 
                                src={publication.image}
                                alt={publication.articleTitle}  
                                width={300} 
                                height={200} 
                                className="transparent aspect-vide object-cover z-10 col-span-2 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2"  
                            />

                            <div className="z-10 col-span-6">
                                <h3 className="-mt-1">
                                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-primary focus-visible:text-primary  group/link text-base"  aria-label="(opens in a new tab)">
                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                        <span>{publication.author} {' '} 
                                            <span className="inline-block">({publication.year})
                                                <svg 
                                                    xmlns="http://www.w3.org/2000/svg" 
                                                    viewBox="0 0 20 20" 
                                                    fill="currentColor" 
                                                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" 
                                                    aria-hidden="true"
                                                >
                                                    <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                                                </svg>
                                            </span>
                                        </span>
                                    </a>
                                </h3>

                                <p className="mt-2 text-sm leading-normal">
                                    <span className='italic '>
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
                                        ({publication.country}).
                                    </span>
                                </p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="mt-12">
                <a className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group" aria-label="View Full Project Archive" href="/archive">
                    <span>
                        <span className="border-b border-transparent pb-px transition group-hover:border-primary motion-reduce:transition-none">
                            View Full Publications{' '} 
                        </span>
                        <span className="whitespace-nowrap">
                            <span className="border-b border-transparent pb-px transition group-hover:border-primary motion-reduce:transition-none">
                                Archive
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" aria-hidden="true">
                                <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"></path>
                            </svg>
                        </span>
                    </span>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Publications