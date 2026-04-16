import { ArrowRight } from 'lucide-react'
import stack_img from '../../assets/stack_lap_img.png'

const agents = [
  {
    title: 'Sales Agent',
    description: 'Finds, qualifies, and nurtures leads automatically.',
    bullets: [
      'Builds targeted lead lists daily',
      'Personalizes outreach at scale',
      'Follows up until conversion',
    ],
  },
  {
    title: 'Marketing Agent',
    description: 'Turns ideas into consistent, high-performing content.',
    bullets: [
      'Researches trends & competitors',
      'Generates content across platforms',
      'Schedules & optimizes posts',
    ],
  },
  {
    title: 'Support Agent',
    description: 'Resolves customer queries instantly, 24/7.',
    bullets: [
      'Answers FAQs with context',
      'Handles tickets across channels',
      'Escalates when needed',
    ],
  },
  {
    title: 'Custom Agent',
    description: 'Build agents for your exact workflow — no limits.',
    bullets: [
      'Combine multiple agents into systems',
      'Automate repetitive business processes',
      'Adapt to your tools and data',
    ],
  },
]

/**
 * STACKING LOGIC (desktop only)
 * On mobile, cards render normally in a vertical list.
 */
const N = agents.length
const SCROLL_PER_CARD_VH = 90
const CARD_TOP_BASE = 190
const CARD_STACK_OFFSET = 22

const Stack = () => {
  return (
    <div className="relative mt-20 md:mt-80">
      {/* ── Heading — normal flow, scrolls with page ── */}
      <div className="flex items-center justify-center pb-6 md:pb-10 px-4">
        <span className="text-black font-bold font-[Outfit] text-[28px] md:text-[40px] text-center">
          Build your AI team
        </span>
      </div>

      {/* ── Mobile: simple vertical list ── */}
      <div className="flex flex-col gap-6 px-4 md:hidden">
        {agents.map((agent) => (
          <div
            key={agent.title}
            className="bg-white rounded-[16px] shadow-xl flex flex-col overflow-hidden"
          >
            {/* Image section */}
            <div
              className="w-full h-[180px] relative overflow-hidden"
              style={{
                background:
                  'linear-gradient(180deg, #FFE8D2 0%, #FF5500 50%, #FFE8D2 100%)',
              }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[200px] h-[200px]">
                <img
                  src={stack_img}
                  alt="agent preview"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-y-3 p-6">
              <h3
                className="text-[#FF6D2F] text-[24px] font-bold italic leading-tight"
                style={{ fontFamily: "'Libre Baskerville', serif" }}
              >
                {agent.title}
              </h3>

              <p
                className="text-black text-[16px] leading-relaxed"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {agent.description}
              </p>

              <ul
                className="flex flex-col gap-y-1 text-[14px] text-black"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {agent.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-x-2">
                    <span className="mt-[3px] text-black">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <button
                className="mt-2 self-start flex items-center gap-x-2 bg-[#FF6D2F] text-white px-5 py-2.5 rounded-full cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '15px',
                  fontWeight: 500,
                }}
              >
                Start Building
                <ArrowRight size={18} color="white" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ── Desktop: sticky stacking cards ── */}
      <div className="hidden md:block">
        {agents.map((agent, index) => {
          const wrapperHeightVH = (N - index) * SCROLL_PER_CARD_VH
          const marginTopVH     = index > 0 ? (index - N) * SCROLL_PER_CARD_VH : 0
          const stickyTop       = CARD_TOP_BASE + index * CARD_STACK_OFFSET

          return (
            <div
              key={agent.title}
              style={{
                height:    `${wrapperHeightVH}vh`,
                marginTop: index > 0 ? `${marginTopVH}vh` : 0,
              }}
            >
              {/* ── Sticky card ── */}
              <div
                className=" bg-white w-[70%] mx-auto rounded-[20px] shadow-2xl flex flex-row overflow-hidden"
                style={{
                  position: 'sticky',
                  top:      `${stickyTop}px`,
                  zIndex:   10 + index,
                  minHeight: '340px',
                }}
              >
                {/* LEFT CONTENT */}
                <div className="w-[55%] flex flex-col justify-center gap-y-4 px-12 py-12">
                  <h3
                    className="text-[#FF6D2F] text-[38px] font-bold italic leading-tight"
                    style={{ fontFamily: "'Libre Baskerville', serif" }}
                  >
                    {agent.title}
                  </h3>

                  <p
                    className="text-black text-[24px] leading-relaxed"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {agent.description}
                  </p>

                  <ul
                    className="flex flex-col gap-y-1 ml-4 text-[19px] text-black"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {agent.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-x-2">
                        <span className="mt-[5px] text-black">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className="mt-4 self-start flex items-center gap-x-2 bg-[#FF6D2F] text-white px-6 py-3 rounded-full cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize:   '18px',
                      fontWeight: 500,
                    }}
                  >
                    Start Building
                    <ArrowRight size={20} color="white" />
                  </button>
                </div>

                {/* RIGHT IMAGE */}
                <div
                  className="w-[45%] rounded-r-[20px] relative overflow-hidden"
                  style={{
                    background:
                      'linear-gradient(180deg, #FFE8D2 0%, #FF5500 50%, #FFE8D2 100%)',
                  }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-49.5 w-[420px] h-[420px]">
                    <img
                      src={stack_img}
                      alt="agent preview"
                      className="w-full h-full "
                    />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Stack