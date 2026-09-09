import { useId, useState, type KeyboardEvent } from 'react'
import { Check, ChevronRight } from 'lucide-react'
import type { ExplorerItem } from '../types/content'

type ExplorerProps = {
  items: ExplorerItem[]
  label: string
  variant?: 'tabs' | 'cards' | 'steps' | 'layers'
}

export function Explorer({ items, label, variant = 'tabs' }: ExplorerProps) {
  const [selected, setSelected] = useState(0)
  const baseId = useId()
  const item = items[selected]

  const moveSelection = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next: number
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % items.length
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + items.length) % items.length
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = items.length - 1
    else return
    event.preventDefault()
    setSelected(next)
    document.getElementById(`${baseId}-tab-${next}`)?.focus()
  }

  return (
    <div className={`explorer explorer--${variant}`}>
      <div className="explorer__controls" role="tablist" aria-label={label}>
        {items.map((entry, index) => {
          const Icon = entry.icon
          return (
            <button
              className="explorer__button"
              id={`${baseId}-tab-${index}`}
              key={entry.id}
              type="button"
              role="tab"
              aria-selected={selected === index}
              aria-controls={`${baseId}-panel-${index}`}
              tabIndex={selected === index ? 0 : -1}
              onClick={() => setSelected(index)}
              onKeyDown={(event) => moveSelection(event, index)}
            >
              {variant === 'steps' && <span className="explorer__number">{index + 1}</span>}
              {Icon && <Icon aria-hidden="true" size={20} />}
              <span>{entry.title}</span>
              {variant === 'cards' && <ChevronRight className="explorer__arrow" aria-hidden="true" size={18} />}
            </button>
          )
        })}
      </div>
      <div
        className="explorer__panel"
        id={`${baseId}-panel-${selected}`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${selected}`}
        tabIndex={0}
      >
        <div>
          {item.eyebrow && <p className="eyebrow">{item.eyebrow}</p>}
          <h3>{item.title}</h3>
          {item.summary && <p className="explorer__summary">{item.summary}</p>}
        </div>
        {item.fields && (
          <div className="explorer__fields">
            {item.fields.map((field) => (
              <div key={field.label}>
                <h4>{field.label}</h4>
                <p>{field.text}</p>
              </div>
            ))}
          </div>
        )}
        {item.bullets && (
          <ul className="check-list">
            {item.bullets.map((bullet) => (
              <li key={bullet}><Check aria-hidden="true" size={18} />{bullet}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
