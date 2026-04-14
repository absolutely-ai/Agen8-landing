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
 * STACKING LOGIC
 * ─────────────
 * We want each card to remain pinned (sticky) once it comes into view,
 * while subsequent cards slide in from below and stack on top.
 *
 * Each card lives in its own wrapper div. For card i (0-indexed):
 *   wrapperHeight = (N - i) × SCROLL_PER_CARD_VH
 *   marginTop     = (i > 0) ? (i - N) × SCROLL_PER_CARD_VH : 0
 *
 * This ensures ALL wrappers share the same bottom edge in the document
 * (= N × SCROLL_PER_CARD_VH from the section start), so every card
 * that has appeared stays within its wrapper — and thus stays sticky —
 * for the entire remainder of the section.
 *
 * Total scroll height of this section = N × SCROLL_PER_CARD_VH.
 */
const N = agents.length
const SCROLL_PER_CARD_VH = 90   // how many vh of scroll each card gets
const CARD_TOP_BASE = 190        // px from viewport top where first card pins (just below fixed navbar)
const CARD_STACK_OFFSET = 22     // px: each subsequent card pins slightly lower, creating the peek

const Stack = () => {
  return (
    <div className="relative mt-80">
      {/* ── Heading — normal flow, scrolls with page ── */}
      <div className="flex items-center justify-center pb-10">
        <span className="text-black font-bold font-[Outfit] text-[40px]">
          Build your AI team
        </span>
      </div>

      {/* ── Card wrappers ── */}
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
              className=" bg-white w-[65%] mx-auto rounded-[20px] shadow-2xl flex flex-row overflow-hidden"
              style={{
                position: 'sticky',
                top:      `${stickyTop}px`,
                zIndex:   10 + index,
                minHeight: '340px',
              }}
            >
              {/* LEFT CONTENT */}
              <div className="w-[55%] flex flex-col justify-center gap-y-4 px-12 py-10">
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
                <div className="absolute right-0 top-1/2 -translate-y-51 w-[420px] h-[420px]">
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
  )
}

export default Stack