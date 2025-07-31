"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from 'next/link'

const images = [
  "/professor-enoidem-usoro-akwaibom-youth-skills-week.jpg",
  "/professor-enoidem-usoro-akwaibom-state-government.jpg",
]

export function AutoSliderBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden rounded-lg">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src || "/professor-enoidem-usoro-akwaibom-youth-skills-week.jpg"}
            alt={`Banner ${index + 1}`}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      ))}

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-text text-center mb-4">
          <Link href='/'>Enoidem Usoro</Link>
        </h1>

        <p className="text-xl font-semibold text-text/80 text-center mb-4">
          Professor of Business Education
        </p>

        <p className="text-center font-semibold lg:max-w-xs text-text/80 leading-normal">
          Deputy Vice Chancellor (Academics) of University of Uyo
        </p>
      </div>
    </div>
  )
}
