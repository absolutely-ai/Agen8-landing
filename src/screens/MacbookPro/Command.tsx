import { useState } from "react"
import { X, Check } from "lucide-react"

const Command = () => {
  const [activeTab, setActiveTab] = useState('Startups')
  const tabs = ['Startups', 'Scaleups', 'Analysts', 'Operations']
  return (
    <div className="w-full mx-auto pb-20 md:pb-40">
        <div className="w-[92%] md:w-[80%] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-y-8 md:gap-x-10">
                {/* Left Text Content */}
                <div className="flex flex-col text-wrap md:w-[45%]">
                    <span className="text-black font-[Outfit] text-[28px] md:text-[48px] font-bold leading-tight">
                        Prompts are inputs.
                    </span>
                    <span className="text-[#FF6D2F] font-[Libre_Baskerville] text-[28px] md:text-[48px] font-bold italic leading-tight">
                        Systems drive outcomes.
                    </span>
                    <div className="md:w-[90%] mt-4 md:mt-6">
                        <span className="text-black font-[Outfit] text-[15px] md:text-[18px] leading-relaxed">
                            Stop typing the same paragraph ten times a day. Build a system that understands the context once and repeats the execution forever.
                        </span>
                    </div>
                </div>

                {/* Right Cards Section */}
                <div className="w-full md:w-[55%] flex flex-col md:flex-row gap-6 md:gap-x-8 md:justify-end">
                    
                    {/* Card 1: The prompt approach */}
                    <div className="flex flex-col w-full md:w-[300px]">
                        <div className="flex flex-row items-center justify-center mb-3 md:mb-4 md:mr-14">
                            <X color="#FF3B30" size={20} strokeWidth={3} />
                            <span className="text-[#FF3B30] font-[Outfit] font-medium text-[16px] md:text-[18px] ml-2">
                                The prompt approach
                            </span>
                        </div>
                        
                        <div className="shadow-2xl rounded-[16px] bg-white flex flex-col h-[220px] md:h-[280px]"> 
                            {/* Mac OS Window Header */}
                            <div className="bg-[#E0E0E0] rounded-t-[16px] flex flex-row px-4 py-3 md:py-4 gap-x-2">
                                <div className="w-3 h-3 md:w-4 md:h-4 bg-[#FF3B30] rounded-full"></div>
                                <div className="w-3 h-3 md:w-4 md:h-4 bg-[#8E8E93] rounded-full"></div>
                                <div className="w-3 h-3 md:w-4 md:h-4 bg-[#34C759] rounded-full"></div>
                            </div>
                            {/* Window Body */}
                            <div className="flex-1 p-4 md:p-6 flex items-start">
                                <span className="font-['DM_Mono'] text-[14px] md:text-[18px] italic text-[#8E8E93] leading-relaxed">
                                    "Please research the competitors for my new SaaS and write a 500 word summary of their pricing and features..."
                                </span>
                            </div>
                        </div>
                        
                        <div className="mt-4 md:mt-8 flex items-center justify-center">
                            <span className="font-['DM_Mono'] text-[14px] md:text-[18px] italic text-[#8E8E93]">
                                RESULT: ONE-OFF DRAFT
                            </span>
                        </div>
                    </div>

                    {/* Card 2: The agen8 system */}
                    <div className="flex flex-col w-full md:w-[300px]">
                        <div className="flex flex-row items-center justify-center mb-3 md:mb-4 md:mr-22">
                            <Check color="#34C759" size={20} strokeWidth={3} />
                            <span className="text-[#34C759] font-[Outfit] font-medium text-[16px] md:text-[18px] ml-2">
                                The agen8 system
                            </span>
                        </div>
                        
                        <div className="shadow-xl rounded-[16px] bg-white flex flex-col border border-gray-100 h-[220px] md:h-[280px]"> 
                            {/* Mac OS Window Header */}
                            <div className="bg-[#E0E0E0] rounded-t-[16px] flex flex-row px-4 py-3 md:py-4 gap-x-2">
                                <div className="w-3 h-3 md:w-4 md:h-4 bg-[#FF3B30] rounded-full"></div>
                                <div className="w-3 h-3 md:w-4 md:h-4 bg-[#8E8E93] rounded-full"></div>
                                <div className="w-3 h-3 md:w-4 md:h-4 bg-[#34C759] rounded-full"></div>
                            </div>
                            {/* Window Body */}
                            <div className="flex-1 p-4 md:p-6 flex flex-col gap-y-3 md:gap-y-4">
                                <span className="font-['DM_Mono'] text-[14px] md:text-[18px] italic text-[#FF6D2F]">
                                    The agen8 system
                                </span>
                                <ul className="font-['DM_Mono'] text-[14px] md:text-[18px] text-[#FF6D2F] flex flex-col gap-y-2 pl-4">
                                    <li>• SCAN_MARKET</li>
                                    <li>• EXTRACT_DATA</li>
                                    <li>• UPDATE_CRM</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="mt-4 md:mt-8 flex items-center justify-center">
                            <span className="font-['DM_Mono'] text-[14px] md:text-[18px] font-bold text-black tracking-wide">
                                RESULT: PERPETUAL ASSET
                            </span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        <div className="w-[92%] md:w-[80%] mx-auto mt-20 md:mt-70 mb-10 md:mb-30">
            <div className="flex flex-col">
                <h2 className="text-[28px] md:text-[48px] text-black font-[Outfit] font-bold mb-8 md:mb-14">
                    Who runs on <span className="font-['Libre_Baskerville'] italic text-[#FF6D2F]">agen8</span>.
                </h2>
                
                <div className="flex flex-col md:flex-row gap-6 md:gap-x-10">
                    {/* Left Sidebar */}
                    <div className="w-full md:w-[28%] flex flex-row md:flex-col gap-2 md:gap-y-4 overflow-x-auto pb-2 md:pb-0">
                        {tabs.map((tab) => (
                            <div 
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`flex flex-row items-center rounded-[12px] md:rounded-[16px] px-4 py-3 md:p-5 cursor-pointer transition-colors whitespace-nowrap ${
                                    activeTab === tab ? 'bg-[#FFEAE0] text-[#FF6D2F] relative shadow-sm' : 'text-black hover:bg-white/40'
                                }`}
                            >
                                {activeTab === tab && (
                                    <div className="absolute left-[0px] top-[20%] bottom-[20%] w-[3px] md:w-[4px] bg-[#FF6D2F] rounded-r-lg"></div>
                                )}
                                <span className="font-[Outfit] font-bold text-[16px] md:text-[22px] ml-3 md:ml-4">
                                    {tab}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Right Content Card */}
                    <div className="flex-1 bg-white rounded-[16px] md:rounded-[24px] shadow-2xl p-8 md:p-14 flex flex-col justify-center md:ml-10">
                        <span className="text-black font-[Outfit] text-[24px] md:text-[36px] font-bold">
                            Scaling without Headcount
                        </span>
                        <p className="text-[#6B6B6B] font-[Outfit] text-[15px] md:text-[18px] leading-relaxed mt-3 md:mt-4 md:w-[90%]">
                            For fast-growing startups, agen8 acts as your first five hires. Automate lead gen, market intelligence, and customer onboarding from day zero.
                        </p>

                        <div className="flex flex-col md:flex-row gap-4 md:gap-x-6 mt-8 md:mt-12 w-full">
                            {/* Inner Box 1 */}
                            <div className="flex-1 border-2 border-[#FFD5C2] shadow-[#FFD5C2] shadow-2xl bg-[#FFF9F6] rounded-[12px] md:rounded-[16px] p-5 md:p-6">
                                <h3 className="text-[#FF6D2F] font-[Outfit] font-semibold text-[18px] md:text-[22px]">
                                    Lead Scraping
                                </h3>
                                <p className="text-[#7C7C7C] font-[Outfit] text-[14px] md:text-[16px] mt-2 leading-tight md:w-[80%]">
                                    continuous pipeline automation
                                </p>
                            </div>
                            
                            {/* Inner Box 2 */}
                            <div className="flex-1 border-2 border-[#FFD5C2] shadow-[#FFD5C2] shadow-2xl bg-[#FFF9F6] rounded-[12px] md:rounded-[16px] p-5 md:p-6">
                                <h3 className="text-[#FF6D2F] font-[Outfit] font-semibold text-[18px] md:text-[22px]">
                                    Auto Personalization
                                </h3>
                                <p className="text-[#7C7C7C] font-[Outfit] text-[14px] md:text-[16px] mt-2 leading-tight md:w-[80%]">
                                    Outreach that feels human
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Command