import React, { useState } from 'react'
import { ArrowRight, X } from 'lucide-react'
import toast from 'react-hot-toast'
import { supabase } from '../lib/supabase'

interface WaitlistProps {
  isOpen: boolean
  onClose: () => void
}

const Waitlist: React.FC<WaitlistProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')

    try {
      const { error } = await supabase
        .from('agen8_wait')
        .insert([{ email }])

      if (error) throw error

      setStatus('idle')
      setEmail('')
      onClose()

      // Show toast after modal closes
      toast.success("You're on the waitlist!", {
        duration: 3500,
      })
    } catch (err: any) {
      console.error('Error adding to waitlist:', err)
      setStatus('idle')
      
      if (err.code === '23505') {
        toast.error("You are already waitlisted!", {
          duration: 3500,
          icon: '✨'
        })
      } else {
        toast.error(err.message || 'Something went wrong. Try again.', {
          duration: 3500,
        })
      }
    }
  }

  if (!isOpen) return null

  return (
    <div
      className='fixed inset-0 w-full h-full z-[200] flex items-center justify-center'
      style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', backgroundColor: 'rgba(0,0,0,0.3)' }}
      onClick={onClose}
    >
      <div
        className='bg-white rounded-[24px] shadow-2xl w-[90%] max-w-[480px] p-10 relative'
        style={{ animation: 'waitlist-pop 0.3s ease-out' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className='absolute top-5 right-5 text-[#A2A2A2] hover:text-black transition-colors duration-200 cursor-pointer'
        >
          <X size={22} />
        </button>

        {/* Heading */}
        <h2 className='font-[Libre_Baskerville] text-[28px] font-bold text-black leading-tight'>
          Join the <span className="font-['Libre_Baskerville'] italic text-[#FF6D2F] font-normal">agen8</span> waitlist
        </h2>
        <p className='font-[Outfit] text-[16px] text-[#6B6B6B] mt-2 leading-relaxed'>
          Be the first to know when we launch. Get early access and exclusive updates.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className='mt-8 flex flex-col gap-4'>
          <input
            type='email'
            placeholder='Enter your email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === 'loading'}
            className='w-full px-5 py-3.5 rounded-[14px] border border-[#E0E0E0] font-[Outfit] text-[15px] outline-none transition-all duration-200 focus:border-[#FF6D2F] focus:shadow-[0_0_0_3px_rgba(255,109,47,0.1)] disabled:opacity-60 disabled:cursor-not-allowed'
          />
          <button
            type='submit'
            disabled={status === 'loading'}
            className='w-full flex items-center justify-center gap-2 bg-[#FF6D2F] text-white font-[Outfit] text-[16px] font-medium py-3.5 rounded-[14px] cursor-pointer transition-all duration-200 hover:bg-[#e55e24] hover:shadow-lg active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed'
          >
            {status === 'loading' ? (
              <span className='flex items-center gap-2'>
                <svg className='animate-spin h-5 w-5 text-white' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                  <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                  <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                </svg>
                Joining...
              </span>
            ) : (
              <>
                <span>Join Waitlist</span>
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>
      </div>

      {/* Keyframes style */}
      <style>{`
        @keyframes waitlist-pop {
          0% { opacity: 0; transform: scale(0.92) translateY(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  )
}

export default Waitlist