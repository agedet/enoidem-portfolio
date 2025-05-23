import React from 'react'

const EXPERIENCE = [
    {
        company: 'University of Uyo',
        position: 'Deputy Vice Chancellor (Academic)',
        startDate: '2019',
        endDate: 'Present',
        description:
        'Overseeing the academic affairs of the university, including curriculum development, faculty recruitment, and student affairs. Collaborating with other university leaders to ensure the institutionaptos;s academic mission is met. Leading initiatives to improve the quality of education and research at the university.',
    },
    {
        company: 'University of Uyo',
        position: 'Vice Dean - Faculty of Education',
        startDate: '2015',
        endDate: '2018',
    },
    {
        company: 'University of Uyo',
        position: 'Head of Department - Vocational Education',
        startDate: '2008',
        endDate: '2016',
    },
    {
        company: 'University of Uyo',
        position: 'Head of Department - Business Education',
        startDate: '2003',
        endDate: '2009',
    },
]

function Experience() {
  return (
    <section id='experience' className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24' aria-label='Work experience'>
        <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-text px-4 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
            <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>Experience</h2>
        </div>

        <div>
            <ol className="group/list">
                {EXPERIENCE.map((job, index) => (
                    <li key={index} className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-text lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                            </div>
                            
                            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-800 group-hover:text-white sm:col-span-2" aria-label="2024 to Present">
                                {job.startDate} — {job.endDate}
                            </header>

                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-medium leading-snug text-text">
                                    <div>
                                        <a className="inline-flex items-baseline font-medium leading-tight text-text hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" aria-label={`{job.position} (opens in a new tab)`}>
                                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                            <span>
                                                {job.position},{' '} 
                                                <span className="inline-block">
                                                    {job.company}
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                                    </svg>
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </h3>

                                <p className="mt-2 text-sm leading-normal group-hover:text-white">
                                    {job.description}
                                </p>
                            </div>
                        </div>
                    </li> 
                ))}
            </ol>
            
            <div className="mt-12">
                <a className="inline-flex items-baseline font-medium leading-tight text-text hover:text-primary focus-visible:text-primary font-semibold text-slate-200 group/link text-base" href="/resume.pdf" target="_blank" rel="noreferrer noopener" aria-label="View Full Résumé (opens in a new tab)">
                    <span>
                        <span className="border-b border-transparent pb-px transition group-hover:border-primary motion-reduce:transition-none">
                            View Full{' '} 
                        </span> 
                        <span className="whitespace-nowrap">
                            <span className="border-b border-transparent pb-px transition group-hover:border-primary motion-reduce:transition-none">
                                Résumé
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" aria-hidden="true">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path>
                            </svg>
                        </span>
                    </span>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Experience