import { ArrowRight } from "lucide-react"
const socialLinks = [
  {
    icon: "https://c.animaapp.com/mk3i7h91OjH2GA/img/line-md-instagram.svg",
    alt: "Instagram",
  },
  {
    icon: "https://c.animaapp.com/mk3i7h91OjH2GA/img/prime-twitter.svg",
    alt: "Twitter",
  },
  {
    icon: "https://c.animaapp.com/mk3i7h91OjH2GA/img/mdi-linkedin.svg",
    alt: "LinkedIn",
  },
];
const Footer = () => {
    return (
        <div className="w-full relative overflow-hidden bg-linear-to-b from-[#FFF4EB] via-[#FFB793] to-[#FF6D2F] pt-40 pb-10">
           <div className="w-[80%] mx-auto flex flex-col items-center relative z-10 pb-100 ">
                <div className="text-center flex flex-col tracking-tight">
                    <span className="font-[Outfit] text-[64px] font-bold text-black leading-tight">
                        Stop managing <span className="font-['Libre_Baskerville'] italic text-[#FF6D2F] font-normal pr-2">tasks</span>.
                    </span>
                    <span className="font-[Outfit] text-[64px] font-bold text-black leading-tight mt-[-10px]">
                        Start running <span className="font-['Libre_Baskerville'] italic text-[#FF6D2F] font-normal pr-2">systems</span>.
                    </span>
                </div>
                
                <div className="mt-8">
                    <span className="font-[Outfit] text-[18px] text-black">
                        Join 500+ operational leaders building the future of work on Agen8
                    </span>
                </div>

                <div className="flex flex-row gap-x-6 mt-12">
                    <button className="bg-[#FF6D2F] text-white flex flex-row gap-x-2 items-center px-8 py-4 rounded-[12px] font-[Outfit] text-[18px] transition-transform hover:scale-105 shadow-xl cursor-default">
                        Build your first agent <ArrowRight size={20} strokeWidth={2.5} />
                    </button>
                    <a href="https://calendly.com/sangwavishvendra/agen8" target="_blank" rel="noopener noreferrer" className="border-2 border-[#FF6D2F] text-[#FF6D2F] bg-transparent flex flex-row gap-x-2 items-center px-8 py-4 rounded-[12px] font-[Outfit] text-[18px] transition-all hover:bg-[#FF6D2F]/10 cursor-pointer">
                        Talk to sales <ArrowRight size={20} color="#FF6D2F" strokeWidth={2.5}/>
                    </a>
                </div>

                <div className="w-[90%] flex flex-row justify-between mt-48 z-10 font-[Outfit] text-black text-[16px] relative bottom-10">
                    <div className="flex flex-row gap-x-6 items-end">
                        {socialLinks.map((link, index) => (
                            <a key={index} href="#" className="cursor-pointer hover:scale-110 transition-transform">
                                <img src={link.icon} alt={link.alt} className="w-8 h-8" />
                            </a>
                        ))}
                    </div>
                    {/* <div className="flex flex-col gap-y-4 text-right">
                        <span className="cursor-pointer hover:underline hover:text-[#FF6D2F] font-medium">Contact</span>
                        <span className="cursor-pointer hover:underline hover:text-[#FF6D2F] font-medium">Contact</span>
                        <span className="cursor-pointer hover:underline hover:text-[#FF6D2F] font-medium">Contact</span>
                        <span className="cursor-pointer hover:underline hover:text-[#FF6D2F] font-medium">Contact</span>
                    </div> */}
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
            <div className="absolute bottom-[-60px] left-0 right-0 w-full overflow-hidden flex justify-center pointer-events-none mix-blend-overlay z-0 select-none">
                <span className="font-['Libre_Baskerville'] italic text-[560px] leading-none text-white tracking-tighter" style={{ opacity: 0.15 }}>
                    agen8
                </span>
            </div>
        </div>
    )
}

export default Footer
