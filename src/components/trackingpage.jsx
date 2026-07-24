'use client'
import { useEffect, useRef, useState } from 'react'

const STEPS = [
  {
    id: 'website',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    label: 'VISIT',
    card: {
      title: 'Mobile Repair Services',
      rows: [
        { label: 'Available Services', value: '15+ Device Types' },
        { label: 'Service Hours', value: '9 AM - 9 PM Daily' },
      ],
      highlight: { label: 'AVERAGE REPAIR TIME', value: '30-60 Minutes' },
      badge: { text: 'Online Available', color: '#1a5c4e' },
    },
  },
  {
    id: 'explore',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    label: 'EXPLORE',
    card: {
      id: 'SRV-2048',
      amount: '₹5,000 - ₹25,000',
      due: 'Varies by Device',
      status: 'AVAILABLE',
      cta: 'Get Quote',
    },
  },
  {
    id: 'appointment',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    label: 'APPOINTMENT',
    card: {
      tiers: [
        { tier: 'Phone Repair', desc: 'Screen, Battery, Charging Port', qty: 'Same Day', total: ' ' },
        { tier: 'Tablet Repair', desc: 'Screen Replacement & Fixes', qty: '1-2 Days', total: ' ' },
        { tier: 'MacBook Repair', desc: 'Hardware & Software Issues', qty: '2-3 Days', total: ' ' },
      ],
    },
  },
  {
    id: 'relax',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9c0-1 1-2 2-2s2 1 2 2M4 11h4M8 13v5M16 9c0-1 1-2 2-2s2 1 2 2M14 11h4M18 13v5"/>
      </svg>
    ),
    label: 'RELAX',
    card: {
      label: 'Service Guarantee',
      date: 'Quality Assured',
      amount: '100% Satisfaction',
    },
  },
  {
    id: 'support',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: 'SUPPORT',
    card: {
      title: 'Customer Support',
      bars: [95, 98, 96, 99, 97, 98, 96],
      months: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
  },
]

const POINTS = [
  { icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ), title: 'Expert Certified Technicians', desc: 'All repairs handled by certified professionals with 5+ years of experience in mobile device repairs.' },
  { icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="14"/>
    </svg>
  ), title: 'Genuine Spare Parts Only', desc: 'We use 100% original parts for all repairs with a guarantee on every component used.' },
  { icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ), title: 'Fast Turnaround Time', desc: 'Most repairs completed in 30-60 minutes with same-day service available for common issues.' },
  { icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 11 12 14 22 4"/>
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
    </svg>
  ), title: 'Transparent Pricing', desc: 'No hidden charges. Get instant quotes before starting repairs with affordable pricing options.' },
  { icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  ), title: '12/7 Customer Support', desc: 'Round-the-clock assistance to answer your queries and provide technical support anytime.' },
  { icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  ), title: 'Warranty on All Repairs', desc: '6-month warranty on all repairs and replacements for your complete peace of mind.' },
]

const QuoteCard = () => (
  <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 10, padding: '14px 16px', width: '100%' }}>
    <div style={{ fontSize: 11, fontWeight: 700, color: '#0d0f1a', marginBottom: 10, fontFamily: 'Inter,sans-serif' }}>Mobile Repair Services</div>
    {[{ l: 'Available Services', v: '15+ Device Types' }, { l: 'Service Hours', v: '9 AM - 9 PM' }].map(r => (
      <div key={r.l} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
        <span style={{ fontSize: 10, color: '#9ca3af', fontFamily: 'Inter,sans-serif' }}>{r.l}</span>
        <span style={{ fontSize: 10, color: '#4b5563', fontFamily: 'Inter,sans-serif' }}>{r.v}</span>
      </div>
    ))}
    <div style={{ height: 1, background: '#f3f4f6', margin: '10px 0' }} />
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontSize: 9, color: '#9ca3af', fontFamily: 'Inter,sans-serif', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Repair Time</span>
      <span style={{ fontSize: 16, fontWeight: 800, color: '#0d0f1a', fontFamily: 'Inter,sans-serif', letterSpacing: '-0.03em' }}>30-60 Min</span>
    </div>
    <div style={{ marginTop: 10, display: 'inline-flex', alignItems: 'center', gap: 5, background: '#f0f9f5', border: '1px solid rgba(26,92,78,0.18)', borderRadius: 100, padding: '4px 10px' }}>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#1a5c4e" strokeWidth="2.2"><polyline points="22 2 11 13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
      <span style={{ fontSize: 10, fontWeight: 600, color: '#1a5c4e', fontFamily: 'Inter,sans-serif' }}>Online Booking</span>
    </div>
  </div>
)

const InvoiceCard = () => (
  <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 10, padding: '14px 16px', width: '100%' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
      <div>
        <div style={{ fontSize: 9, color: '#9ca3af', fontFamily: 'Inter,sans-serif', marginBottom: 3 }}>Service Quote</div>
        <div style={{ fontSize: 18, fontWeight: 800, color: '#0d0f1a', fontFamily: 'Inter,sans-serif', letterSpacing: '-0.03em' }}>₹ +</div>
      </div>
      <div style={{ background: '#f0f9f5', border: '1px solid rgba(26,92,78,0.2)', borderRadius: 5, padding: '3px 8px' }}>
        <span style={{ fontSize: 9, fontWeight: 700, color: '#1a5c4e', fontFamily: 'Inter,sans-serif', letterSpacing: '0.05em' }}>QUOTE</span>
      </div>
    </div>
    <div style={{ fontSize: 10, color: '#9ca3af', fontFamily: 'Inter,sans-serif', marginBottom: 12 }}>Valid For: 7 Days</div>
    <div style={{ background: '#1a5c4e', borderRadius: 6, padding: '8px', textAlign: 'center' }}>
      <span style={{ fontSize: 11, fontWeight: 700, color: '#fff', fontFamily: 'Inter,sans-serif' }}>Get Quote</span>
    </div>
  </div>
)

const UsageCard = () => (
  <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 10, padding: '14px 16px', width: '100%' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: '0 8px', marginBottom: 8, borderBottom: '1px solid #f3f4f6', paddingBottom: 6 }}>
      <span style={{ fontSize: 9, fontWeight: 700, color: '#9ca3af', fontFamily: 'Inter,sans-serif', letterSpacing: '0.06em' }}>SERVICE</span>
      <span style={{ fontSize: 9, fontWeight: 700, color: '#9ca3af', fontFamily: 'Inter,sans-serif', letterSpacing: '0.06em' }}>TIME</span>
      <span style={{ fontSize: 9, fontWeight: 700, color: '#9ca3af', fontFamily: 'Inter,sans-serif', letterSpacing: '0.06em' }}>PRICE</span>
    </div>
    {[
      { desc: 'Phone Screen Repair', qty: 'Same Day', total: '', color: '#0d0f1a' },
      { desc: 'Battery Replacement', qty: 'Same Day', total: ' ', color: '#0d0f1a' },
      { desc: 'MacBook Repair', qty: '2-3 Days', total: ' ', color: '#0d0f1a' },
    ].map((r, i) => (
      <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: '0 8px', marginBottom: 5 }}>
        <span style={{ fontSize: 9, color: r.color, fontFamily: 'Inter,sans-serif', lineHeight: 1.4 }}>{r.desc}</span>
        <span style={{ fontSize: 9, color: r.color, fontFamily: 'Inter,sans-serif' }}>{r.qty}</span>
        <span style={{ fontSize: 9, fontWeight: 600, color: r.color, fontFamily: 'Inter,sans-serif' }}>{r.total}</span>
      </div>
    ))}
    <div style={{ marginTop: 8, height: 32, display: 'flex', alignItems: 'flex-end', gap: 2 }}>
      {[4,6,5,8,9,12,10,15,18].map((h, i) => (
        <div key={i} style={{ flex: 1, height: `${h * 1.6}px`, background: i >= 7 ? '#1a5c4e' : '#d1fae5', borderRadius: '2px 2px 0 0' }} />
      ))}
    </div>
  </div>
)

const CollectionsCard = () => (
  <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 10, padding: '14px 16px', width: '100%' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a5c4e" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      <span style={{ fontSize: 11, fontWeight: 600, color: '#0d0f1a', fontFamily: 'Inter,sans-serif' }}>Service Guarantee</span>
    </div>
    <div style={{ fontSize: 10, color: '#9ca3af', fontFamily: 'Inter,sans-serif', marginBottom: 8 }}>Quality Assurance</div>
    <div style={{ height: 4, background: '#f3f4f6', borderRadius: 2, marginBottom: 12, overflow: 'hidden' }}>
      <div style={{ width: '100%', height: '100%', background: '#1a5c4e', borderRadius: 2 }} />
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
      <span style={{ fontSize: 9, color: '#9ca3af', fontFamily: 'Inter,sans-serif' }}>Coverage</span>
      <span style={{ fontSize: 16, fontWeight: 800, color: '#0d0f1a', fontFamily: 'Inter,sans-serif', letterSpacing: '-0.03em' }}>6 Months</span>
    </div>
  </div>
)

const RevenueCard = () => {
  const bars = [85, 90, 88, 92, 95, 93, 98]
  const max = Math.max(...bars)
  return (
    <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 10, padding: '14px 16px', width: '100%' }}>
      <div style={{ fontSize: 10, fontWeight: 600, color: '#4b5563', fontFamily: 'Inter,sans-serif', marginBottom: 12 }}>Customer Satisfaction (%)</div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 52 }}>
        {bars.map((h, i) => (
          <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, height: '100%', justifyContent: 'flex-end' }}>
            <div style={{ width: '100%', height: `${(h / max) * 48}px`, background: i === bars.length - 1 ? '#1a5c4e' : i >= bars.length - 3 ? '#6ee7d0' : '#d1fae5', borderRadius: '2px 2px 0 0' }} />
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
        {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(m => (
          <span key={m} style={{ fontSize: 8, color: '#d1d5db', fontFamily: 'Inter,sans-serif' }}>{m}</span>
        ))}
      </div>
    </div>
  )
}

const CARD_COMPONENTS = {
  website: QuoteCard,
  explore: InvoiceCard,
  appointment: UsageCard,
  relax: CollectionsCard,
  support: RevenueCard,
}

const MagicalProcess = () => {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(2)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  const ActiveCard = CARD_COMPONENTS[STEPS[activeStep].id]

  return (
    <section ref={sectionRef} style={{ background: '#ffffff', borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb', padding: '80px 0', fontFamily: 'Inter,sans-serif', overflow: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        .bls-reveal { opacity:0; transform:translateY(24px); transition:opacity 0.6s cubic-bezier(.22,1,.36,1),transform 0.6s cubic-bezier(.22,1,.36,1); }
        .bls-reveal.bls-in { opacity:1; transform:translateY(0); }
        .bls-step-btn { cursor:pointer; background:none; border:none; padding:0; font-family:Inter,sans-serif; }
        .bls-step-btn:hover .bls-step-icon { background:rgba(26,92,78,0.12) !important; }
        .bls-point-card { transition:box-shadow 0.18s, border-color 0.18s, transform 0.18s; }
        .bls-point-card:hover { box-shadow:0 6px 24px rgba(26,92,78,0.08); border-color:rgba(26,92,78,0.2) !important; transform:translateY(-2px); }
        @media(max-width:768px){
          .bls-header-grid { grid-template-columns:1fr !important; }
          .bls-lifecycle-panel { padding:24px 16px !important; }
          .bls-steps-row { gap:8px !important; }
          .bls-step-label { display:none !important; }
          .bls-card-area { padding:16px !important; max-width:100% !important; }
          .bls-points-grid { grid-template-columns:1fr !important; }
        }
      `}</style>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>

        <div className={`bls-header-grid bls-reveal ${visible ? 'bls-in' : ''}`}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px 60px', alignItems: 'start', marginBottom: 48 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 14 }}>
              <span style={{ width: 14, height: 2, background: '#1a5c4e', borderRadius: 2, display: 'inline-block' }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1a5c4e' }}>Service Journey</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.6rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1, color: '#0d0f1a', margin: 0 }}>
              Fast, reliable mobile<br />device repairs made easy
            </h2>
          </div>
          <div style={{ paddingTop: 4 }}>
            <p style={{ fontSize: '0.9rem', color: '#6b7280', lineHeight: 1.72, margin: 0 }}>
              Get your device repaired in 4 simple steps with certified technicians, genuine parts, and guaranteed quality. From booking to completion, we make it hassle-free and affordable.
            </p>
          </div>
        </div>

        <div className={`bls-reveal ${visible ? 'bls-in' : ''}`}
          style={{ transitionDelay: '0.1s', background: '#0d2b24', borderRadius: 18, padding: '32px 28px', marginBottom: 40 }}>

          <div className="bls-steps-row" style={{ display: 'flex', alignItems: 'flex-start', gap: 0, marginBottom: 28, position: 'relative' }}>
            <div style={{ position: 'absolute', top: 21, left: '10%', right: '10%', height: 2, background: 'rgba(78,205,196,0.3)', zIndex: 0 }} />
            {STEPS.map((step, i) => (
              <button key={step.id} className="bls-step-btn" onClick={() => setActiveStep(i)}
                style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, position: 'relative', zIndex: 1 }}>
                <div className="bls-step-icon" style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: activeStep === i ? '#4ecdc4' : 'rgba(78,205,196,0.1)',
                  border: `2px solid ${activeStep === i ? '#4ecdc4' : 'rgba(78,205,196,0.3)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: activeStep === i ? '#0d2b24' : '#4ecdc4',
                  transition: 'all 0.2s',
                }}>
                  {step.icon}
                </div>
                <span className="bls-step-label" style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', color: activeStep === i ? '#4ecdc4' : 'rgba(78,205,196,0.5)', transition: 'color 0.2s' }}>
                  {step.label}
                </span>
              </button>
            ))}
          </div>

          <div className="bls-card-area" style={{ display: 'flex', justifyContent: 'center', padding: '0 20px' }}>
            <div style={{ width: '100%', maxWidth: 340 }}>
              <ActiveCard />
            </div>
          </div>
        </div>

        <div className={`bls-points-grid bls-reveal ${visible ? 'bls-in' : ''}`}
          style={{ transitionDelay: '0.2s', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
          {POINTS.map((p, i) => (
            <div key={i} className="bls-point-card" style={{
              background: '#fff', border: '1px solid #e5e7eb', borderRadius: 14,
              padding: '20px 18px', display: 'flex', flexDirection: 'column', gap: 8,
              opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.5s ${0.22 + i * 0.06}s cubic-bezier(.22,1,.36,1), transform 0.5s ${0.22 + i * 0.06}s cubic-bezier(.22,1,.36,1), box-shadow 0.18s, border-color 0.18s`,
            }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: '#f0f9f5', border: '1px solid rgba(26,92,78,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1a5c4e', flexShrink: 0 }}>
                {p.icon}
              </div>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0d0f1a', letterSpacing: '-0.015em', lineHeight: 1.3 }}>{p.title}</div>
              <div style={{ fontSize: '0.76rem', color: '#6b7280', lineHeight: 1.62 }}>{p.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default MagicalProcess;