import Image from 'next/image'


export default function About() {
  return (
    <section id='about' className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label='About professor enoidem usoro'>
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-text px-4 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                About
            </h2>
        </div>
        <div>
            <div className='hidden mb-6 lg:flex justify-center items-center'>
                <Image 
                    src='/professor-enoidem-usoro.png'
                    alt='professor-enoidem-usoro'
                    width={500}
                    height={100}
                    className='w-[298px] h-[298px] rounded-full object-cover lg:w-[498px] lg:h-[498px] bg-[#9b7f69] border-4 p-[15px]'
                />
            </div>

            <p className="mb-4">
                Professor Enoidem Usoro is an erudite scholar who has left an unerasable imprint in Business Education across the globe. She began her career as a teaching assistant in Unicross. In the University she has handled several key responsibilities. At present she is the Deputy Vice Chancellor (Academic) of Univeristy of Uyo.
            </p>
            <p className="mb-4">
                Committees and Community Services within and outside University of Uyo have found her membership necessary due to her intelligible contributions and insights. Some of such committees includes Chairman, Committee on Affiliate Institutions with University of Uyo, Member, Committee On Quick Response to University of Uyo on Covid-19 and several others.
            </p>
            <p className="mb-4">
                She holds Membership in several Professional Bobies such as National Association of Women in Academics (NAWACS), Association for the Advancement of Vocational Education of Nigeria where she serves as the National Treasurer.
            </p>
            <p className="mb-4">
                Despite her busy schedule she has published several articles in National and International Journals, Book Chapters and Conference Papers. Many of which are open access on this knowledge base. In 2016, Professor Eno Usoro presented the 49th Inaugural Lecture of the University of Uyo on Business Education: Skills Acquisition and Development for Posterity.
            </p>
            <p className="mb-4">
                She is married and blessed with 5 beautiful children.
            </p>
        </div>
    </section>
  );
}