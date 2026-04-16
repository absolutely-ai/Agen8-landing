import { ChevronDown } from "lucide-react"
import { useState } from "react"
import ThreeDot from "../../components/ThreeDot"
import Waitlist from "../../components/Waitlist"
const Flow = () => {
    const [showWaitlist, setShowWaitlist] = useState(false)
  return (
    <div className="w-full">
        <Waitlist isOpen={showWaitlist} onClose={() => setShowWaitlist(false)} />
        <div className="relative w-full">
            {/* Background lines - hidden on mobile */}
            <div className="absolute top-120 left-120 -z-10 hidden lg:block">
                <svg width="643" height="1277" viewBox="0 0 643 1277" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line opacity="0.14" x1="639.5" y1="2.5" x2="639.5" y2="279.5" stroke="#FF6D2F" strokeWidth="5" strokeLinecap="round"/>
    <line opacity="0.14" x1="2.5" y1="-2.5" x2="279.5" y2="-2.5" transform="matrix(0 -1 -1 0 638 1277)" stroke="#FF6D2F" strokeWidth="5" strokeLinecap="round"/>
    <line opacity="0.14" x1="2.5" y1="279.5" x2="2.5" y2="523.5" stroke="#FF6D2F" strokeWidth="5" strokeLinecap="round"/>
    <line opacity="0.14" x1="2.5" y1="-2.5" x2="246.5" y2="-2.5" transform="matrix(0 -1 -1 0 1 1000)" stroke="#FF6D2F" strokeWidth="5" strokeLinecap="round"/>
    <line x1="639.5" y1="279.5" x2="2.5" y2="279.5" stroke="#FFE1D1" strokeWidth="5" strokeLinecap="round"/>
    <line x1="2.5" y1="-2.5" x2="639.5" y2="-2.5" transform="matrix(-1 -8.60619e-10 -8.60619e-10 1 643 1000)" stroke="#FFE1D1" strokeWidth="5" strokeLinecap="round"/>
    </svg>

            </div>

            <div className="w-full flex justify-center flex-col items-center px-4">
                <span className='text-black font-bold font-[Outfit] text-[28px] md:text-[40px] text-center'>
                    From idea to execution
                </span>
                <span className="font-[Outfit] text-black text-[15px] md:text-[20px] mt-4 md:mt-6 text-center max-w-[700px] px-2">
                    Stop building workflows. Start deploying autonomous intelligence that adapts to your environment.
                </span>
            </div>

            {/* Step 1 */}
            <div className="mt-16 md:mt-30 w-[92%] md:w-[80%] mx-auto flex flex-col md:flex-row h-auto gap-6 md:gap-0">
                <div className="md:w-auto">
                    <div className="flex flex-row items-center gap-x-4 md:gap-x-8">
                        <div>
                            <svg width="50" height="3" viewBox="0 0 50 3" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.1821 -0.000222206V2.49978H0.000266314V-0.000222206H10.1821ZM20.1008 -0.000222206V2.49978H9.91902V-0.000222206H20.1008ZM30.0196 -0.000222206V2.49978H19.8378V-0.000222206H30.0196ZM39.9383 -0.000222206V2.49978H29.7565V-0.000222206H39.9383ZM49.8571 -0.000222206V2.49978H39.6753V-0.000222206H49.8571Z" fill="#FFBB9C"/>
                            </svg>

                        </div>
                        <span className="text-[#FFBB9C] font-[Libre_Baskerville] italic text-[24px] md:text-[32px]">
                            Step 1
                        </span>
                    </div>
                    <div className="text-wrap mt-6 md:mt-10">
                        <span className="text-black font-[Outfit] text-[28px] md:text-[48px] font-semibold">
                            Tell us what you want to automate
                        </span>
                    </div>
                    <div className="text-wrap mt-4 md:mt-10">
                        <span className="text-black font-[Outfit] text-[15px] md:text-[20px]">
                            Describe your objective in natural language. Our intent engine decodes complex requirements into actionable machine logic.
                        </span>
                    </div>
                </div>
                
                <div className="bg-[#FBFBFB] shadow-2xl rounded-[16px] md:rounded-[20px] w-full md:ml-10">
                    <ThreeDot/>
                    <div className="w-full flex flex-row-reverse">
                        <div className="flex flex-row items-center justify-between bg-white rounded-b-full rounded-t-full shadow-2xl  py-2 w-fit gap-x-3 md:gap-x-5 mr-4 md:mr-7">
                            <div className="w-[12px] h-[12px] md:w-[15px] md:h-[15px] bg-[#FF6D2F] rounded-full ml-3 md:ml-4"/>
                            <div className="flex flex-row items-center mr-3 md:mr-4">
                                <select className="appearance-none bg-transparent text-[#FF6D2F] text-[13px] md:text-[16px] font-normal outline-none cursor-pointer">
                                    <option>Research Agent v2.4</option>
                                    <option>Sales Agent v1.2</option>
                                    <option>Support Agent v3.0</option>
                                </select>
                                <ChevronDown color="#ff6d2f" size={18}/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-full flex flex-row-reverse ">
                        <div className='bg-white w-[90%] md:w-[85%] py-4 md:py-5 rounded-[16px] md:rounded-[24px] mr-4 md:mr-7 mt-6 md:mt-10 shadow-2xl flex flex-row items-center justify-center'>
                            <textarea className='w-full outline-none border-none px-4 md:px-5 font-[sans-serif] resize-none bg-transparent leading-snug mt-2 text-[13px] md:text-base' rows={3} placeholder='Build a UGC creator that generates content, delivers final assets, and auto-uploads videos to YouTube daily at 5 PM IST.'></textarea>
                            <button className='px-4 md:px-6 cursor-pointer transition-all duration-300 hover:scale-105 bg-none' onClick={() => setShowWaitlist(true)}>
                                <div className='bg-[#FF6D2F] rounded-full w-[36px] h-[36px] md:w-[45px] md:h-[45px] flex justify-center items-center'>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.9419 1.99468L10.9712 12.9654M21.9419 1.99468L14.9605 21.9415L10.9712 12.9654M21.9419 1.99468L1.99512 8.97607L10.9712 12.9654" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                


            </div>

            {/* Step 2 */}
            <div className="mt-20 md:mt-90 w-[92%] md:w-[80%] mx-auto flex flex-col-reverse md:flex-row h-auto gap-6 md:gap-0">
                <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-x-20">
                    <div className="flex flex-col">
                        <div className="flex flex-row items-center gap-x-4 md:gap-x-8">
                            <div>
                                <svg width="50" height="3" viewBox="0 0 50 3" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.1821 -0.000222206V2.49978H0.000266314V-0.000222206H10.1821ZM20.1008 -0.000222206V2.49978H9.91902V-0.000222206H20.1008ZM30.0196 -0.000222206V2.49978H19.8378V-0.000222206H30.0196ZM39.9383 -0.000222206V2.49978H29.7565V-0.000222206H39.9383ZM49.8571 -0.000222206V2.49978H39.6753V-0.000222206H49.8571Z" fill="#FFBB9C"/>
                                </svg>

                            </div>
                            <span className="text-[#FFBB9C] font-[Libre_Baskerville] italic text-[24px] md:text-[32px]">
                                Step 2
                            </span>
                        </div>
                        <div className="text-wrap mt-6 md:mt-10">
                            <span className="text-black font-[Outfit] text-[28px] md:text-[48px] font-semibold">
                                We turn it into a working system
                            </span>
                        </div>
                        <div className="text-wrap mt-4 md:mt-10 md:w-[77%]">
                            <span className="text-black font-[Outfit] text-[15px] md:text-[20px]">
                                Agen8 architecturally links your data sources, communication channels, and internal tools through high-precision neural pathways. No manual mapping required.
                            </span>
                        </div>
                    </div>
                    
                    <div className="bg-[#FBFBFB] shadow-2xl rounded-[16px] md:rounded-[20px] w-full flex justify-center items-center py-10 md:py-0">
                        <div>
                            <svg width="280" height="200" viewBox="0 0 423 282" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[423px] md:h-[282px]">
    <circle cx="214" cy="132" r="50" fill="#D9D9D9"/>
    <ellipse cx="390.5" cy="31.5" rx="32.5" ry="31.5" fill="#D9D9D9"/>
    <ellipse cx="42" cy="244.5" rx="42" ry="37.5" fill="#D9D9D9"/>
    <ellipse cx="54" cy="62.5" rx="30" ry="28.5" fill="#D9D9D9"/>
    <line x1="247.78" y1="103.551" x2="390.78" y2="33.5509" stroke="black"/>
    <line x1="174.831" y1="110.47" x2="60.8308" y2="69.4705" stroke="black"/>
    <line x1="185.259" y1="157.428" x2="61.2588" y2="232.428" stroke="black"/>
    </svg>

                        </div>  
                    </div>
                </div>
                
                
            </div>

            {/* Step 3 */}
            <div className="mt-20 md:mt-90 w-[92%] md:w-[80%] mx-auto flex flex-col md:flex-row h-auto gap-6 md:gap-0">
                <div>
                    <div className="flex flex-row items-center gap-x-4 md:gap-x-8">
                        <div>
                            <svg width="50" height="3" viewBox="0 0 50 3" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.1821 -0.000222206V2.49978H0.000266314V-0.000222206H10.1821ZM20.1008 -0.000222206V2.49978H9.91902V-0.000222206H20.1008ZM30.0196 -0.000222206V2.49978H19.8378V-0.000222206H30.0196ZM39.9383 -0.000222206V2.49978H29.7565V-0.000222206H39.9383ZM49.8571 -0.000222206V2.49978H39.6753V-0.000222206H49.8571Z" fill="#FFBB9C"/>
                            </svg>

                        </div>
                        <span className="text-[#FFBB9C] font-[Libre_Baskerville] italic text-[24px] md:text-[32px]">
                            Step 3
                        </span>
                    </div>
                    <div className="text-wrap mt-6 md:mt-10 md:w-[70%]">
                        <span className="text-black font-[Outfit] text-[28px] md:text-[48px] font-semibold ">
                            Your agent goes to work
                        </span>
                    </div>
                    <div className="text-wrap mt-4 md:mt-10 md:w-[70%]">
                        <span className="text-black font-[Outfit] text-[15px] md:text-[20px]">
                            Watch as the system autonomously executes tasks, synthesizes data, and triggers complex multi-step actions across your entire stack.
                        </span>
                    </div>
                </div>
                
                <div className="bg-[#FBFBFB] shadow-2xl rounded-[16px] md:rounded-[20px] w-full md:ml-10 min-h-[120px]">
                    <ThreeDot/>                    
                </div>
                
                

            </div>

        
        </div>
    </div>
  )
}

export default Flow