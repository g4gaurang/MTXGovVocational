import { BriefcaseBusiness, Check, Compass, HeartHandshake, Route, Wrench } from 'lucide-react'

const stages = [
  { title: 'Engage', icon: HeartHandshake },
  { title: 'Plan', icon: Compass },
  { title: 'Deliver Services', icon: Wrench },
  { title: 'Achieve Employment', icon: BriefcaseBusiness },
  { title: 'Sustain Outcomes', icon: Check },
]

export function HeroJourney() {
  return (
    <div className="hero-journey" role="img" aria-label="A connected path from participant engagement through sustained employment outcomes">
      <div className="hero-journey__heading">
        <span>Connected participant journey</span>
        <Route aria-hidden="true" size={20} />
      </div>
      <ol>
        {stages.map(({ title, icon: Icon }, index) => (
          <li key={title}>
            <span className="hero-journey__icon"><Icon aria-hidden="true" size={20} /></span>
            <span><small>0{index + 1}</small>{title}</span>
          </li>
        ))}
      </ol>
      <div className="hero-journey__outcome">
        <span className="pulse-dot" aria-hidden="true" />
        <p><strong>Employment outcome</strong><span>Supported by connected people, services and information</span></p>
      </div>
    </div>
  )
}
