import { useId, useState, type KeyboardEvent } from 'react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { dashboards } from '../data/content'

export function Dashboard() {
  const [selected, setSelected] = useState(0)
  const baseId = useId()
  const view = dashboards[selected]

  const handleKey = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return
    event.preventDefault()
    const next = event.key === 'Home'
      ? 0
      : event.key === 'End'
        ? dashboards.length - 1
        : event.key === 'ArrowRight'
          ? (index + 1) % dashboards.length
          : (index - 1 + dashboards.length) % dashboards.length
    setSelected(next)
    document.getElementById(`${baseId}-dashboard-${next}`)?.focus()
  }

  return (
    <div className="dashboard-shell">
      <div className="dashboard-topline">
        <div><span className="status-dot" aria-hidden="true" />Illustrative product view</div>
        <span>Fictional data</span>
      </div>
      <div className="dashboard-tabs" role="tablist" aria-label="Dashboard views">
        {dashboards.map((dashboard, index) => (
          <button
            id={`${baseId}-dashboard-${index}`}
            key={dashboard.id}
            role="tab"
            type="button"
            aria-selected={index === selected}
            aria-controls={`${baseId}-dashboard-panel`}
            tabIndex={index === selected ? 0 : -1}
            onClick={() => setSelected(index)}
            onKeyDown={(event) => handleKey(event, index)}
          >
            {dashboard.title}
          </button>
        ))}
      </div>
      <div
        id={`${baseId}-dashboard-panel`}
        className="dashboard-panel"
        role="tabpanel"
        aria-labelledby={`${baseId}-dashboard-${selected}`}
      >
        <div className="dashboard-intro">
          <p className="eyebrow">{view.title}</p>
          <p>{view.summary}</p>
        </div>
        <div className="dashboard-metrics">
          {view.metrics.map((metric) => (
            <div key={metric.label}>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
              <small>{metric.context}</small>
            </div>
          ))}
        </div>
        <div className="chart-wrap">
          <div className="chart-title">
            <h3>{view.title} snapshot</h3>
            <span>Illustrative</span>
          </div>
          <div
            className="chart-visual"
            role="img"
            aria-label={`${view.title} illustrative bar chart. A text data table follows for screen-reader users.`}
          >
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={view.chart} margin={{ top: 8, right: 8, left: -20, bottom: 8 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#d9e1e7" />
                <XAxis dataKey="label" tick={{ fontSize: 11, fill: '#465b69' }} interval={0} />
                <YAxis tick={{ fontSize: 11, fill: '#465b69' }} />
                <Tooltip cursor={{ fill: '#e9f7f5' }} />
                <Bar dataKey="value" fill="#0b8078" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <table className="sr-only">
            <caption>{view.title} chart data, provided as fictional illustrative values</caption>
            <thead><tr><th>Category</th><th>Value</th></tr></thead>
            <tbody>{view.chart.map((row) => <tr key={row.label}><td>{row.label}</td><td>{row.value}</td></tr>)}</tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
