import Image from 'next/image'
import React from 'react'

const EDUCATION = [
    {
        degree: 'Ph. D. Business Education',
        school:
        'University of Uyo, Uyo (2006)',
        icon: '/icons8-graduation-hat-100.png',
    },
    {
        degree: 'M. Ed. Business education',
        school:
        'University of Nigeria, Nsukka (1990)',
        icon: '/icons8-graduation-cap-100.png',
    },
    {
        degree: 'B. Sc. Business education',
        school:
        "Rivers State University of Science and Technology, Port Harcourt (1986)",
        icon: '/icons8-graduation-scroll-100.png',
    },
    {
        degree: 'NCE Business Education',
        school: "The Polytechnic, Calabar (1981)",
        icon: '/icons8-college-100.png',
    },
]

function Education() {
  return (
    <section id="education" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected education">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                Academic Background and Qualifications
            </h2>
        </div>
        <div>
            <p className="mb-4">
                Below are the institutions attended by Professor Eno Usoro, qualifications obtained and the year.
            </p>
            <ul className="group/list">
                {EDUCATION.map((education, index) => (
                    <li key={index} className="mb-12">
                        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

                            <Image 
                                alt={education.degree}  
                                width={64}
                                height={64} 
                                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                                src={education.icon} 
                            />
                            
                            <div className="z-10 sm:order-2 sm:col-span-6">
                                <h3>
                                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-primary focus-visible:text-primary group/link text-base"  aria-label={`{education.degree} (opens in a new tab)`}>
                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                        <span>{education.degree}{' '}</span>
                                    </a>
                                </h3>
                                <p className="mt-2 text-sm leading-normal">
                                    {education.school}
                                </p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

           
        </div>
    </section>
  )
}

export default Education