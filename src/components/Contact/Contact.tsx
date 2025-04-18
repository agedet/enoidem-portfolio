'use client'

import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { useContactLogic } from './useContactLogic'

function Contact() {
  const {
    loading,
    error,
    formData,
    handleInputChange, 
    handleSelectChange,
    handleSubmit
  } = useContactLogic();

  return (
    <section id="writing" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Blog posts">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Contact</h2>
      </div>

      <div>
        <div className='mb-4'>
          <h3 className='text-[17px] leading-[22px] lg:text-[19px] font-400 lg:leading-[23px] w-[100%]'
          >
            Drop a message below, and let&lsquo;s start a conversation.
          </h3>
        </div>
        
        <form onSubmit={handleSubmit} className='grid gap-4'>
          {error && (
            <p className="text-red-500 text-center mb-2 font-medium">
              {error}
            </p>
          )}

          <div className='grid gap-2'>
            <Label htmlFor='position'>Position</Label>
            <Input 
              type='text' 
              id='position' 
              name='position'
              value={formData.position}
              onChange={(e) => handleInputChange("position", e.target.value)}
              placeholder='Enter your position at your organization'
            />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='fullName'>Full Name</Label>
            <Input 
              type='text' 
              id='fullName' 
              name='fullName'
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              placeholder='Enter your full name'
            />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='company'>Company/Organization</Label>
            <Input 
              type='text' 
              id='company' 
              name='company'
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              placeholder='Enter your company name' />
          </div>
          <div className='grid gap-2'>
            <Label>Email</Label>
            <Input 
              type='email' 
              id='email' 
              name='email'
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder='Enter your email' 
            />
          </div>

          <div className='w-full grid gap-2'>
            <Label>Reason for contact</Label>
            <Select onValueChange={handleSelectChange}>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value='conference'>Invite for conference</SelectItem>
                <SelectItem value='project'>Project oversight</SelectItem>
                <SelectItem value='other'>Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='message'>Message</Label>
            <Textarea 
              id='message' 
              name='message'
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder='We are pleased to invite you to speak at...'>

            </Textarea>
          </div>

          <div className='mt-2'>
            <Button
              type='submit'
              disabled={loading}
              className='disabled:bg-primary/15'
            
            >Send a message</Button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact