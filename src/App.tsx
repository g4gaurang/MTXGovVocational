import {
  ArrowRight,
  Check,
  ChevronDown,
  CircleDot,
  FileCheck2,
  Layers3,
  LockKeyhole,
  Network,
  Sparkles,
} from 'lucide-react'
import { lazy, Suspense } from 'react'
import { Explorer } from './components/Explorer'
import { Header } from './components/Header'
import { HeroJourney } from './components/HeroJourney'
import {
  accessibilityItems,
  adoption,
  architecture,
  capabilities,
  challenges,
  differentiators,
  journey,
  marketClaim,
  metrics,
  roles,
  rsaPipeline,
  securityItems,
  serviceModels,
} from './data/content'

const Dashboard = lazy(() => import('./components/Dashboard').then((module) => ({ default: module.Dashboard })))

const SectionIntro = ({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) => (
  <div className="section-intro">
    <p className="eyebrow">{eyebrow}</p>
    <h2>{title}</h2>
    {copy && <p className="section-intro__copy">{copy}</p>}
  </div>
)

const CheckList = ({ items }: { items: string[] }) => (
  <ul className="check-list">
    {items.map((item) => <li key={item}><Check aria-hidden="true" size={18} />{item}</li>)}
  </ul>
)

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <main id="main-content">
        <section className="hero section--dark" id="overview">
          <div className="ambient-grid" aria-hidden="true" />
          <div className="container hero__grid">
            <div className="hero__content">
              <p className="eyebrow eyebrow--light">Vocational Rehabilitation Case Management</p>
              <h1>Modern VR case management. <span>Built around employment outcomes.</span></h1>
              <p className="hero__copy">Connect participants, counselors, providers, services, fiscal activity and federal reporting across the complete vocational rehabilitation lifecycle in one configurable platform.</p>
              <div className="button-row">
                <a className="button" href="#contact">Request a Demonstration <ArrowRight aria-hidden="true" size={18} /></a>
                <a className="button button--ghost" href="#journey">Explore the Participant Journey</a>
              </div>
              <ul className="proof-list" aria-label="Product proof points">
                <li><Check aria-hidden="true" size={16} />Purpose-built for state VR programs</li>
                <li><Check aria-hidden="true" size={16} />Production on Salesforce Government Cloud</li>
                <li><Check aria-hidden="true" size={16} />RSA-911 reporting integrated with case operations</li>
              </ul>
            </div>
            <HeroJourney />
          </div>
        </section>

        <section className="evidence" aria-labelledby="evidence-title">
          <div className="container">
            <div className="evidence__heading">
              <div>
                <p className="eyebrow">Production evidence</p>
                <h2 id="evidence-title">A VR product operating at statewide scale.</h2>
              </div>
              <details>
                <summary>How to read these figures <ChevronDown aria-hidden="true" size={18} /></summary>
                <p>Product utilization refers only to Colorado. The 30+ figure reflects broader delivery-team and specialist-partner experience, not MTX Gov Vocational deployments.</p>
              </details>
            </div>
            <div className="metrics-grid">
              {metrics.map((metric) => (
                <article key={`${metric.value}-${metric.label}`}>
                  <span>{metric.category}</span>
                  <strong>{metric.value}</strong>
                  <h3>{metric.label}</h3>
                  <p>{metric.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section product-overview">
          <div className="container">
            <div className="overview-grid">
              <div>
                <p className="eyebrow">MTX Gov Vocational</p>
                <h2>Modern vocational rehabilitation case management—built around participant employment outcomes.</h2>
              </div>
              <div className="overview-copy">
                <p>MTX Gov Vocational is a configurable Vocational Rehabilitation Case Management System designed for State Vocational Rehabilitation Agencies. It supports the participant journey from referral and application through eligibility, assessment, IPE development, service authorization, provider delivery, fiscal management, employment outcomes and case closure. It also supports Pre-ETS, participant and provider digital experiences, document management, communications, approvals, operational dashboards and federal reporting.</p>
                <p>Built on Salesforce Government Cloud, MTX Gov Vocational gives agencies a VR-specific product foundation rather than requiring them to design each capability from an empty platform. The product includes a reusable VR data model, preconfigured workflows, configurable policy rules, role structures, reporting components, portal patterns, integration patterns and RSA-911 capabilities. Agencies can configure these assets around their policies, organizational structures and operating models as federal requirements, state policy and program needs evolve.</p>
              </div>
            </div>
            <div className="buyer-questions" aria-label="Questions the product page addresses">
              <article><span>01</span><h3>Does it understand VR?</h3><p>See how the product supports the specialized lifecycle, fiscal operations and federal-reporting environment.</p></article>
              <article><span>02</span><h3>Will it improve daily work?</h3><p>Explore participant, counselor and provider experiences alongside operational and data-quality visibility.</p></article>
              <article><span>03</span><h3>Can the agency adapt it?</h3><p>Understand how a reusable foundation can be configured, implemented and operated with manageable risk.</p></article>
            </div>
          </div>
        </section>

        <section className="section section--warm" id="challenges">
          <div className="container">
            <SectionIntro
              eyebrow="The operating reality"
              title="Modern VR programs need more than a replacement case-management system."
              copy="State VR agencies must improve participant and workforce experiences while managing specialized policy, fiscal, data-quality and federal-reporting responsibilities. Legacy platforms often make those responsibilities harder to coordinate and adapt."
            />
            <Explorer items={challenges} label="VR program challenges" variant="cards" />
          </div>
        </section>

        <section className="section" id="journey">
          <div className="container">
            <SectionIntro
              eyebrow="Participant lifecycle"
              title="One connected journey from referral to employment outcome."
              copy="The product organizes people, decisions, services and information around the participant. Authorized agency personnel retain responsibility for eligibility, Order of Selection, service and closure decisions."
            />
            <Explorer items={journey} label="Participant journey stages" variant="steps" />
          </div>
        </section>

        <section className="section section--indigo" id="experiences">
          <div className="container">
            <SectionIntro
              eyebrow="Role-based experiences"
              title="Designed around every participant in the VR ecosystem."
              copy="Each role receives a focused view of the information and actions relevant to its work, within configured permissions."
            />
            <Explorer items={roles} label="Role-based product experiences" />
          </div>
        </section>

        <section className="section section--warm" id="capabilities">
          <div className="container">
            <SectionIntro
              eyebrow="Product capabilities"
              title="A complete VR product foundation, configured for each agency."
              copy="Reusable case, fiscal, engagement and reporting capabilities provide a product starting point while preserving room for state policy and operating-model configuration."
            />
            <Explorer items={capabilities} label="Product capability families" />
          </div>
        </section>

        <section className="section rsa-section" id="rsa911">
          <div className="container">
            <div className="rsa-heading">
              <SectionIntro
                eyebrow="RSA-911 and data quality"
                title="Treat RSA-911 readiness as an operational discipline—not a deadline event."
                copy="The reporting architecture connects the RSA-911 Case Service Report with the information created through case, service and fiscal operations."
              />
              <aside className="milestone-card">
                <FileCheck2 aria-hidden="true" />
                <p>Production milestone</p>
                <strong>Colorado generated and completed its first RSA-911 submission from the new platform on May 13, 2026, less than two weeks after production go-live.</strong>
                <span>This milestone does not predict or promise future compliance.</span>
              </aside>
            </div>
            <Explorer items={rsaPipeline} label="RSA-911 reporting pipeline" variant="steps" />
            <div className="feature-band">
              {['Current and prior reporting periods', 'Staging and transformation', 'Data validation', 'Versioned outputs', 'Authorized review', 'Historical corrections', 'Auditable changes', 'Reproducible reporting', 'Operational visibility into data-quality conditions'].map((item) => (
                <span key={item}><CircleDot aria-hidden="true" size={15} />{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--dashboard">
          <div className="container">
            <SectionIntro
              eyebrow="Operational intelligence"
              title="Turn case activity into operational visibility."
              copy="Focused views help counselors, program leaders, fiscal teams and reporting staff understand current conditions without crowding the screen."
            />
            <Suspense fallback={<div className="dashboard-loading" role="status">Loading illustrative dashboard…</div>}>
              <Dashboard />
            </Suspense>
          </div>
        </section>

        <section className="section accessibility-section">
          <div className="container split-grid">
            <div>
              <SectionIntro
                eyebrow="Inclusive experience"
                title="Accessibility is fundamental to vocational rehabilitation technology."
                copy="MTX applies Section 508 and WCAG 2.2 AA-oriented design, development and testing practices, with final conformance evaluated against the configured implementation."
              />
              <CheckList items={accessibilityItems} />
            </div>
            <div className="practice-wheel" aria-label="Accessibility practices across the delivery lifecycle">
              {['User research', 'Experience design', 'Development', 'Automated testing', 'Keyboard testing', 'Screen-reader testing', 'User acceptance testing', 'Release review'].map((practice, index) => (
                <div key={practice}><span>{String(index + 1).padStart(2, '0')}</span>{practice}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="section architecture-section section--dark" id="architecture">
          <div className="container">
            <SectionIntro
              eyebrow="Architecture and interoperability"
              title="A secure, configurable platform that fits the state ecosystem."
              copy="Salesforce Government Cloud provides the core platform. MTX Gov Vocational adds the VR product layer and integration patterns needed to work within a state technology environment."
            />
            <Explorer items={architecture} label="Architecture layers" variant="layers" />
            <div className="integration-methods">
              <span><Network aria-hidden="true" size={18} />APIs</span>
              <span>Secure file exchange</span>
              <span>Scheduled batch processing</span>
              <span>Event-driven status updates</span>
            </div>
          </div>
        </section>

        <section className="section security-section">
          <div className="container">
            <SectionIntro
              eyebrow="Security and administration"
              title="Controls aligned to public-sector operating responsibilities."
              copy="Security and operational controls are configured across the product, selected Salesforce cloud offering, licensed services and agency environment."
            />
            <div className="three-grid">
              {securityItems.map(({ icon: Icon, title, text }) => (
                <article key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>
              ))}
            </div>
            <p className="note"><LockKeyhole aria-hidden="true" size={17} />Any applicable FedRAMP authorization applies to the selected Salesforce cloud offering and licensed services—not to MTX itself.</p>
          </div>
        </section>

        <section className="section section--warm configuration-section">
          <div className="container">
            <SectionIntro
              eyebrow="Configurability and adoption"
              title="Start with a proven VR foundation. Configure what makes the state unique."
              copy="Configuration adapts the reusable product to the agency without rebuilding the product foundation."
            />
            <div className="comparison-grid">
              <article>
                <span className="comparison-grid__icon"><Layers3 aria-hidden="true" /></span>
                <p className="eyebrow">Reusable product foundation</p>
                <h3>Begin with a working VR model</h3>
                <CheckList items={['VR-oriented data model', 'Participant lifecycle', 'Workflow patterns', 'Role structures', 'Portal patterns', 'Reporting components', 'Integration patterns', 'Administrative configuration']} />
              </article>
              <article>
                <span className="comparison-grid__icon"><Sparkles aria-hidden="true" /></span>
                <p className="eyebrow">State-specific configuration</p>
                <h3>Reflect policy and operations</h3>
                <CheckList items={['State policies', 'Organizational structure', 'Approval thresholds', 'Service catalog', 'Forms and assessments', 'Notices and communications', 'Interfaces', 'Reporting and dashboards']} />
              </article>
            </div>
            <div className="adoption-block">
              <h3>Five phases from alignment to ongoing improvement</h3>
              <Explorer items={adoption} label="Adoption pathway" variant="steps" />
              <p>MTX may support discovery and design, configuration, data conversion, integration, testing, accessibility validation, RSA-911 preparation, training, change readiness, deployment, stabilization and managed services.</p>
            </div>
          </div>
        </section>

        <section className="section product-model">
          <div className="container">
            <SectionIntro
              eyebrow="Product and service model"
              title="A maintained product, supported through implementation and operations."
              copy="The subscription provides reusable VR capabilities. Services configure, launch and support the product within the agency environment."
            />
            <div className="three-grid">
              {serviceModels.map(({ icon: Icon, title, bullets }, index) => (
                <article key={title} className={index === 0 ? 'is-featured' : undefined}>
                  <Icon aria-hidden="true" /><span className="card-number">0{index + 1}</span><h3>{title}</h3><CheckList items={bullets} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--dark production-section" id="results">
          <div className="container">
            <SectionIntro
              eyebrow="Colorado production story"
              title="Production experience that informs the product."
              copy="Colorado is the only identified production deployment of MTX Gov Vocational. Its delivery and operation provide concrete product learning."
            />
            <div className="production-grid">
              <article className="case-panel">
                <p className="eyebrow eyebrow--light">Colorado Division of Vocational Rehabilitation</p>
                <h3>Statewide production since May 1, 2026</h3>
                <div className="case-stats">
                  <div><strong>~200</strong><span>concurrent users</span></div>
                  <div><strong>30</strong><span>offices statewide</span></div>
                  <div><strong>May 13</strong><span>first RSA-911 submission</span></div>
                </div>
                <CheckList items={['Secure participant and vendor portals', 'Configurable counselor workflows', 'Historical RSA-911 reporting and corrections', 'A subsequent first-quarter RSA-911 submission was also completed']} />
                <p className="market-claim">{marketClaim}</p>
              </article>
              <details className="lessons-panel" open>
                <summary>Lessons incorporated into the product <ChevronDown aria-hidden="true" /></summary>
                <CheckList items={['Begin VR knowledge transfer early.', 'Use modernization to improve workflows rather than recreate every legacy process.', 'Treat RSA-911 as connected to configuration, migration and operating data.', 'Begin accessibility, training and adoption work early.', 'Validate converted data through repeated, business-led review.', 'Coordinate case, fiscal and reporting design.']} />
              </details>
            </div>
            <aside className="broader-experience">
              <p className="eyebrow eyebrow--light">Broader VR experience supporting product maturity</p>
              <p>MTX’s delivery team and specialized VR partners bring experience from more than 30 VR case-management implementations. This broader experience contributes knowledge in VR policy, fiscal operations, data migration, RSA-911, quality management and organizational change. MTX also provides quality-oversight services supporting Washington State’s VR modernization. These experiences inform MTX Gov Vocational but are not presented as additional production deployments of the product.</p>
            </aside>
          </div>
        </section>

        <section className="section why-section">
          <div className="container">
            <SectionIntro
              eyebrow="Why MTX Gov Vocational"
              title="Built for the operating realities of vocational rehabilitation."
            />
            <div className="four-grid">
              {differentiators.map(({ icon: Icon, title, text }) => (
                <article key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="closing-cta" id="contact">
          <div className="container">
            <p className="eyebrow eyebrow--light">A connected path forward</p>
            <h2>Modernize vocational rehabilitation around the people and employment outcomes that matter.</h2>
            <p>See how MTX Gov Vocational can provide your agency with a configurable product foundation for participant services, counselor operations, fiscal management and federal reporting.</p>
            <div className="button-row">
              <a className="button button--light" href="#contact">Request a Demonstration <ArrowRight aria-hidden="true" size={18} /></a>
              <a className="button button--ghost" href="#contact">Schedule a VR Modernization Workshop</a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container footer-grid">
          <div className="brand brand--footer"><span className="brand__mark" aria-hidden="true">M</span><span><strong>MTX</strong><small>Gov Vocational</small></span></div>
          <p>Modern vocational rehabilitation case management—built around participant employment outcomes.</p>
          <p className="footer-disclaimer">Product capabilities and deployment configurations vary by agency requirements, licensed technologies and implementation scope. Dashboard values are illustrative. Client references and results should be used only with appropriate approval.</p>
        </div>
      </footer>
    </>
  )
}

export default App
