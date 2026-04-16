import { ArrowRight } from "lucide-react"
import { useState } from "react"
import Waitlist from "../../components/Waitlist"
const socialLinks = [
  {
    icon: "https://c.animaapp.com/mk3i7h91OjH2GA/img/line-md-instagram.svg",
    alt: "Instagram",
    p:"https://www.instagram.com/agen8.io/",
  },
  {
    icon: "https://c.animaapp.com/mk3i7h91OjH2GA/img/prime-twitter.svg",
    alt: "Twitter",
    p:"#",
  },
  {
    icon: "https://c.animaapp.com/mk3i7h91OjH2GA/img/mdi-linkedin.svg",
    alt: "LinkedIn",
    p:"#",
  },
];
const Footer = () => {
    const [showWaitlist, setShowWaitlist] = useState(false)
    return (
        <div className="w-full relative overflow-hidden bg-linear-to-b from-[#FFF4EB] via-[#FFB793] to-[#FF6D2F] pt-20 md:pt-40 pb-10">
            <Waitlist isOpen={showWaitlist} onClose={() => setShowWaitlist(false)} />
           <div className="w-[92%] md:w-[80%] mx-auto flex flex-col items-center relative z-10 pb-40 md:pb-100 ">
                <div className="text-center flex flex-col tracking-tight px-2">
                    <span className="font-[Outfit] text-[32px] md:text-[64px] font-bold text-black leading-tight">
                        Stop managing <span className="font-['Libre_Baskerville'] italic text-[#FF6D2F] font-normal pr-1 md:pr-2">tasks</span>.
                    </span>
                    <span className="font-[Outfit] text-[32px] md:text-[64px] font-bold text-black leading-tight mt-[-5px] md:mt-[-10px]">
                        Start running <span className="font-['Libre_Baskerville'] italic text-[#FF6D2F] font-normal pr-1 md:pr-2">systems</span>.
                    </span>
                </div>
                
                <div className="mt-4 md:mt-8 px-4">
                    <span className="font-[Outfit] text-[14px] md:text-[18px] text-black text-center block">
                        Join 500+ operational leaders building the future of work on Agen8
                    </span>
                </div>

                <div className="flex flex-col md:flex-row gap-3 md:gap-x-6 mt-8 md:mt-12 w-full md:w-auto px-4 md:px-0">
                    <button className="bg-[#FF6D2F] text-white flex flex-row gap-x-2 items-center justify-center px-6 md:px-8 py-3.5 md:py-4 rounded-[12px] font-[Outfit] text-[16px] md:text-[18px] transition-transform hover:scale-105 shadow-xl cursor-default" onClick={()=>setShowWaitlist(true)}>
                        Build your first agent <ArrowRight size={18} strokeWidth={2.5} />
                    </button>
                    <a href="https://calendly.com/sangwavishvendra/agen8" target="_blank" rel="noopener noreferrer" className="border-2 border-[#FF6D2F] text-[#FF6D2F] bg-transparent flex flex-row gap-x-2 items-center justify-center px-6 md:px-8 py-3.5 md:py-4 rounded-[12px] font-[Outfit] text-[16px] md:text-[18px] transition-all hover:bg-[#FF6D2F]/10 cursor-pointer">
                        Talk to sales <ArrowRight size={18} color="#FF6D2F" strokeWidth={2.5}/>
                    </a>
                </div>

                <div className="w-full md:w-[90%] flex flex-col md:flex-row md:justify-between mt-16 md:mt-48 z-10 font-[Outfit] text-black text-[16px] relative bottom-10 items-center gap-4">
                    <div className="flex flex-row gap-x-6 items-end">
                        {socialLinks.map((link, index) => (
                            <a key={index} href={link.p} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:scale-110 transition-transform">
                                <img src={link.icon} alt={link.alt} className="w-7 h-7 md:w-8 md:h-8" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            {/* Fine vertical stripe overlay mapping background */}
            <div 
                className="absolute inset-0 pointer-events-none opacity-[0.15]" 
                style={{ 
                    backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, white 2px, white 4px)' 
                }}
            />
            
            

            {/* Giant watermark */}
            <div className="absolute bottom-[-30px] md:bottom-[-75px] left-0 right-0 w-full overflow-hidden flex justify-center pointer-events-none mix-blend-overlay z-0 select-none">
                <span className="font-['Libre_Baskerville'] italic text-[180px] md:text-[560px] leading-none text-white tracking-tighter" style={{ opacity: 0.15 }}>
                    agen8
                </span>
            </div>
        </div>
    )
}

export default Footer
