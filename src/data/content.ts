import {
  BadgeDollarSign,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  ClipboardCheck,
  FileCheck2,
  FileText,
  Fingerprint,
  GraduationCap,
  HandCoins,
  HeartHandshake,
  Landmark,
  Layers3,
  Network,
  Route,
  ShieldCheck,
  SlidersHorizontal,
  Users,
} from 'lucide-react'
import type { DashboardView, ExplorerItem, Metric } from '../types/content'

export const marketClaim =
  'First VR case-management system placed into production on the Salesforce low-code platform, according to MTX project records.'

export const navigation = [
  ['overview', 'Overview'],
  ['challenges', 'Challenges'],
  ['journey', 'Participant Journey'],
  ['capabilities', 'Capabilities'],
  ['rsa911', 'RSA-911'],
  ['experiences', 'Experiences'],
  ['architecture', 'Architecture'],
  ['results', 'Results'],
] as const

export const metrics: Metric[] = [
  {
    value: '1',
    label: 'state operating the product in production',
    detail: 'Colorado Division of Vocational Rehabilitation',
    category: 'Production Footprint',
  },
  {
    value: '30',
    label: 'offices statewide',
    detail: 'Colorado production scale',
    category: 'Statewide Scale',
  },
  {
    value: '~200',
    label: 'concurrent users',
    detail: 'Approximately 200 concurrent users in production',
    category: 'Statewide Scale',
  },
  {
    value: 'May 1, 2026',
    label: 'production go-live',
    detail: 'Colorado Division of Vocational Rehabilitation',
    category: 'Production Milestone',
  },
  {
    value: 'May 13, 2026',
    label: 'first RSA-911 submission from the new system',
    detail: 'A subsequent first-quarter submission was also completed',
    category: 'Federal Reporting Milestone',
  },
  {
    value: '30+',
    label: 'VR implementations represented',
    detail: 'Experience across the broader delivery team and specialized partners—not product deployments',
    category: 'Broader Team Experience',
  },
]

export const challenges: ExplorerItem[] = [
  {
    id: 'legacy',
    title: 'Rigid legacy platforms',
    icon: Layers3,
    fields: [
      {
        label: 'The challenge',
        text: 'Aging platforms are expensive to change and may encourage agencies to recreate outdated processes.',
      },
      {
        label: 'The MTX response',
        text: 'Configurable workflows, business rules, forms and experiences allow agencies to modernize operations and adapt over time.',
      },
    ],
  },
  {
    id: 'burden',
    title: 'Counselor administrative burden',
    icon: ClipboardCheck,
    fields: [
      {
        label: 'The challenge',
        text: 'Counselors spend valuable time navigating systems, duplicating data and completing administrative tasks.',
      },
      {
        label: 'The MTX response',
        text: 'Guided workspaces, connected records, configurable automation and structured workflows help staff spend more time supporting participants.',
      },
    ],
  },
  {
    id: 'experience',
    title: 'Fragmented participant and provider experiences',
    icon: Users,
    fields: [
      {
        label: 'The challenge',
        text: 'Participants and providers may rely on paper, email and separate communication channels to exchange information.',
      },
      {
        label: 'The MTX response',
        text: 'Secure role-based portals connect self-service activity directly with the authorized case and service record.',
      },
    ],
  },
  {
    id: 'fiscal',
    title: 'Disconnected services and fiscal activity',
    icon: HandCoins,
    fields: [
      {
        label: 'The challenge',
        text: 'Plans, authorizations, provider services, obligations, invoices and payments may be managed across separate processes.',
      },
      {
        label: 'The MTX response',
        text: 'MTX Gov Vocational connects program and fiscal activity to the participant record while integrating with the agency’s financial system.',
      },
    ],
  },
  {
    id: 'quality',
    title: 'Late discovery of RSA-911 data issues',
    icon: FileCheck2,
    fields: [
      {
        label: 'The challenge',
        text: 'Reporting problems discovered near submission deadlines create rework and compliance risk.',
      },
      {
        label: 'The MTX response',
        text: 'Reporting data, validation, historical periods, corrections and review are incorporated into the operating environment.',
      },
    ],
  },
  {
    id: 'visibility',
    title: 'Limited operational visibility',
    icon: BarChart3,
    fields: [
      {
        label: 'The challenge',
        text: 'Supervisors and executives may lack timely insight into caseloads, timeliness, services, expenditures and outcomes.',
      },
      {
        label: 'The MTX response',
        text: 'Role-based dashboards turn operational and reporting data into information agency leaders can use.',
      },
    ],
  },
]

export const journey: ExplorerItem[] = [
  {
    id: 'referral',
    title: 'Referral and Application',
    icon: HeartHandshake,
    fields: [
      { label: 'What happens', text: 'A person engages with the agency, provides initial information and applies for services.' },
      { label: 'Who participates', text: 'Participant, referral partners and intake staff.' },
      { label: 'Product support', text: 'Digital intake, identity details, disability information, documents, communications and next steps connect in one record.' },
      { label: 'Agency visibility', text: 'Referral sources, application volume, status, timeliness and incomplete information.' },
    ],
  },
  {
    id: 'eligibility',
    title: 'Eligibility and Assessment',
    icon: ClipboardCheck,
    fields: [
      { label: 'What happens', text: 'Authorized staff evaluate documented information, assessments, eligibility factors and, where applicable, trial work and Order of Selection.' },
      { label: 'Who participates', text: 'Participant, counselor, supervisors and assessment providers.' },
      { label: 'Product support', text: 'Guided workflows organize evidence and configured policy rules while preserving the counselor’s decision-making role.' },
      { label: 'Agency visibility', text: 'Assessment status, decision timeliness, trial-work activity and matters requiring review.' },
    ],
  },
  {
    id: 'ipe',
    title: 'Individualized Plan for Employment',
    icon: Route,
    fields: [
      { label: 'What happens', text: 'The participant and counselor develop the Individualized Plan for Employment (IPE), including goals, services and responsibilities.' },
      { label: 'Who participates', text: 'Participant, counselor, supervisor and service partners as appropriate.' },
      { label: 'Product support', text: 'Structured goals, informed participant choice, planned services, approvals, signatures and plan changes remain connected.' },
      { label: 'Agency visibility', text: 'IPE development timeliness, approval status, planned services and goal progress.' },
    ],
  },
  {
    id: 'services',
    title: 'Services and Authorizations',
    icon: HandCoins,
    fields: [
      { label: 'What happens', text: 'Authorized personnel arrange services, issue authorizations and monitor provider delivery, obligations and expenditures.' },
      { label: 'Who participates', text: 'Participant, counselor, providers, supervisors and fiscal staff.' },
      { label: 'Product support', text: 'Service catalog, approvals, authorizations, delivery documentation and payment-status integration connect program and fiscal work.' },
      { label: 'Agency visibility', text: 'Service activity, open authorizations, provider status, obligations, expenditures and exceptions.' },
    ],
  },
  {
    id: 'employment',
    title: 'Employment and Stabilization',
    icon: BriefcaseBusiness,
    fields: [
      { label: 'What happens', text: 'The participant moves into employment while staff verify job details, progress and stabilization.' },
      { label: 'Who participates', text: 'Participant, counselor, employer and service providers where authorized.' },
      { label: 'Product support', text: 'Employment details, verification, follow-up, services and progress documentation share a connected timeline.' },
      { label: 'Agency visibility', text: 'Employment status, stabilization milestones, support needs and service continuity.' },
    ],
  },
  {
    id: 'closure',
    title: 'Outcome and Case Closure',
    icon: BadgeDollarSign,
    fields: [
      { label: 'What happens', text: 'Authorized staff document the employment outcome or other closure basis and complete required review.' },
      { label: 'Who participates', text: 'Participant, counselor and supervisor according to agency policy.' },
      { label: 'Product support', text: 'Configured closure workflows organize verification, participant communication, outcomes and reporting data without making the closure decision.' },
      { label: 'Agency visibility', text: 'Closure status, outcome categories, review exceptions and RSA-911 data readiness.' },
    ],
  },
]

export const roles: ExplorerItem[] = [
  { id: 'participants', title: 'Participants', icon: HeartHandshake, bullets: ['Engage with the agency digitally', 'Submit requested information and documents', 'Review relevant plan and service information', 'Receive communications and status updates', 'Participate in the development of employment goals'] },
  { id: 'counselors', title: 'VR counselors', icon: ClipboardCheck, bullets: ['Work from a connected participant record', 'Follow guided lifecycle processes', 'Manage assessments, plans, services and case documentation', 'Review tasks, deadlines and approvals', 'See relevant fiscal and provider activity'] },
  { id: 'supervisors', title: 'Supervisors', icon: Users, bullets: ['Review caseloads and workload', 'Monitor timeliness and exceptions', 'Manage approvals', 'Identify matters requiring attention', 'Use operational dashboards'] },
  { id: 'providers', title: 'Providers and vendors', icon: Building2, bullets: ['Maintain authorized profile information', 'Receive service-related information', 'Submit documentation through secure experiences', 'Track relevant authorization, invoice or status information', 'Communicate with agency staff'] },
  { id: 'fiscal', title: 'Fiscal and reporting teams', icon: HandCoins, bullets: ['Connect authorizations, obligations, invoices and payment status', 'Monitor program funds and exceptions', 'Prepare and review RSA-911 information', 'Manage historical-period corrections', 'Review data-quality status'] },
  { id: 'leaders', title: 'Agency leaders and administrators', icon: Landmark, bullets: ['Monitor program performance', 'Configure roles, workflows and rules', 'Review service and expenditure patterns', 'Track federal-reporting readiness', 'Adapt the product to policy and organizational changes'] },
]

export const capabilities: ExplorerItem[] = [
  { id: 'case', title: 'Participant and Case Management', icon: Users, bullets: ['Referral and application', 'Participant profile', 'Case notes and communications', 'Tasks, alerts and reminders', 'Document management', 'Case chronology', 'Employment and closure outcomes'] },
  { id: 'eligibility', title: 'Eligibility, Assessment and IPE', icon: ClipboardCheck, bullets: ['Eligibility workflow', 'Disability information', 'Order of Selection', 'Trial-work support', 'Configurable assessments', 'IPE development and approvals', 'Goal and progress tracking'] },
  { id: 'services', title: 'Services and Fiscal Management', icon: HandCoins, bullets: ['Service catalog', 'Authorizations', 'Approval thresholds', 'Provider service activity', 'Obligations and expenditures', 'Invoice and payment-status integration', 'Fiscal controls and exception visibility'], summary: 'Payment execution may remain in the state’s financial or ERP system.' },
  { id: 'preets', title: 'Pre-ETS and Transition Services', icon: GraduationCap, bullets: ['Student engagement', 'Pre-Employment Transition Services (Pre-ETS)', 'Service participation', 'Education and workforce coordination', 'Required expenditure and activity tracking', 'Program reporting'] },
  { id: 'engagement', title: 'Participant and Provider Engagement', icon: HeartHandshake, bullets: ['Participant portal', 'Provider or vendor portal', 'Secure information submission', 'Communications and notices', 'Status visibility', 'Mobile-responsive experiences', 'Accessibility-oriented design'] },
  { id: 'reporting', title: 'Reporting, Analytics and Administration', icon: BarChart3, bullets: ['Operational dashboards', 'Caseload and timeliness reporting', 'RSA-911 reporting', 'Configurable business rules', 'Roles and permissions', 'Audit history', 'Administrative configuration'] },
]

export const rsaPipeline: ExplorerItem[] = [
  { id: 'capture', title: 'Capture', summary: 'Create reporting information through daily participant, service and fiscal work.' },
  { id: 'validate', title: 'Validate', summary: 'Apply configured data checks and make conditions visible before the reporting deadline.' },
  { id: 'stage', title: 'Stage', summary: 'Transform source data into reporting structures while preserving traceability.' },
  { id: 'review', title: 'Review', summary: 'Give authorized teams a controlled view of data quality, exceptions and period status.' },
  { id: 'generate', title: 'Generate', summary: 'Produce a versioned RSA-911 Case Service Report output for authorized review.' },
  { id: 'submit', title: 'Submit', summary: 'Support the agency’s controlled submission process and retain relevant output records.' },
  { id: 'correct', title: 'Correct and Reproduce', summary: 'Record authorized historical corrections and reproduce prior-period outputs with an auditable history.' },
]

export const dashboards: DashboardView[] = [
  {
    id: 'counselor',
    title: 'Counselor Operations',
    summary: 'A focused view of intake, timeliness and workload conditions.',
    metrics: [
      { label: 'Referrals and applications', value: '184', context: 'current illustrative period' },
      { label: 'Eligibility timeliness', value: '87%', context: 'within configured threshold' },
      { label: 'IPE development', value: '42', context: 'in progress' },
    ],
    chart: [{ label: '0–30 cases', value: 18 }, { label: '31–45 cases', value: 34 }, { label: '46–60 cases', value: 27 }, { label: '61+ cases', value: 12 }],
  },
  {
    id: 'program',
    title: 'Program Performance',
    summary: 'Illustrative participant activity across services, Pre-ETS and employment.',
    metrics: [
      { label: 'Service activity', value: '1,248', context: 'records this period' },
      { label: 'Pre-ETS participation', value: '326', context: 'students served' },
      { label: 'Employment progress', value: '73', context: 'participants in stabilization' },
    ],
    chart: [{ label: 'Referral', value: 184 }, { label: 'Eligibility', value: 161 }, { label: 'IPE', value: 138 }, { label: 'Services', value: 112 }, { label: 'Employment', value: 73 }, { label: 'Closure', value: 58 }],
  },
  {
    id: 'fiscal',
    title: 'Fiscal Oversight',
    summary: 'A concise view of authorizations, expenditure status and exceptions.',
    metrics: [
      { label: 'Open authorizations', value: '418', context: 'illustrative count' },
      { label: 'Expenditure status', value: '64%', context: 'of illustrative period plan' },
      { label: 'Fiscal exceptions', value: '19', context: 'requiring review' },
    ],
    chart: [{ label: 'Assessment', value: 31 }, { label: 'Training', value: 64 }, { label: 'Placement', value: 47 }, { label: 'Support', value: 38 }],
  },
  {
    id: 'rsa',
    title: 'RSA-911 Readiness',
    summary: 'Visibility into validation status and reporting-period review.',
    metrics: [
      { label: 'Validation status', value: '94%', context: 'records passing configured checks' },
      { label: 'Conditions to review', value: '37', context: 'illustrative count' },
      { label: 'Reporting period', value: 'Q2', context: 'illustrative current period' },
    ],
    chart: [{ label: 'Passing', value: 94 }, { label: 'Review', value: 4 }, { label: 'Incomplete', value: 2 }],
  },
]

export const architecture: ExplorerItem[] = [
  { id: 'experiences', title: 'Participant and Provider Experiences', icon: HeartHandshake, summary: 'Secure, responsive portals for authorized information exchange, documents, communications and status.' },
  { id: 'workspaces', title: 'Counselor and Agency Workspaces', icon: Users, summary: 'Role-based case, supervisor, fiscal, reporting and administrative experiences.' },
  { id: 'product', title: 'MTX Gov Vocational Product Services', icon: SlidersHorizontal, summary: 'VR data model, lifecycle workflows, policy configuration, service and fiscal patterns, reporting components and administration.' },
  { id: 'integration', title: 'Integration and Data Services', icon: Network, summary: 'APIs, secure file exchange, scheduled batch processing and event-driven status updates.' },
  { id: 'systems', title: 'State and Federal Systems', icon: Landmark, summary: 'Integration patterns for identity, financial or ERP, workforce and wage, education, SSA-related, document, electronic-signature, reporting and analytics environments.' },
]

export const adoption: ExplorerItem[] = [
  { id: 'discover', title: 'Discover and Align', summary: 'Align policy, participant experience, operations, data, reporting and implementation governance.' },
  { id: 'configure', title: 'Configure the VR Foundation', summary: 'Adapt product workflows, roles, service catalog, forms, approvals, portals and reporting assets.' },
  { id: 'migrate', title: 'Migrate and Integrate', summary: 'Convert reviewed legacy data and connect required state, partner and federal-system exchanges.' },
  { id: 'validate', title: 'Validate and Launch', summary: 'Conduct business-led testing, accessibility evaluation, training, RSA-911 preparation, deployment and stabilization.' },
  { id: 'operate', title: 'Operate and Improve', summary: 'Support releases, monitoring, reporting, product enhancements and changing program needs.' },
]

export const securityItems = [
  { icon: Fingerprint, title: 'Identity and access', text: 'Role-based access, least-privilege permissions, configurable role structures, single sign-on and multifactor authentication.' },
  { icon: ShieldCheck, title: 'Protection and oversight', text: 'Encryption in transit and at rest, activity logging, audit history and integration monitoring within the configured environment.' },
  { icon: Network, title: 'Operational responsibility', text: 'Backup and recovery responsibilities are defined across the agency, MTX and licensed platform services. U.S. data-hosting options are available where contractually applicable.' },
]

export const accessibilityItems = [
  'Keyboard navigation and focus management',
  'Screen-reader compatibility',
  'Color contrast and non-color cues',
  'Clear labels and error messages',
  'Responsive experiences and zoom support',
  'Alternative formats and accommodations where configured',
]

export const serviceModels = [
  {
    title: 'Product subscription',
    icon: Layers3,
    bullets: ['Reusable VR product capabilities', 'Product documentation', 'Maintained product components', 'Product releases and enhancements', 'Configurable workflows and reporting assets'],
  },
  {
    title: 'Implementation services',
    icon: SlidersHorizontal,
    bullets: ['Discovery', 'State-specific configuration', 'Data migration', 'Integration', 'Testing', 'Training', 'Deployment and stabilization'],
  },
  {
    title: 'Managed services',
    icon: ShieldCheck,
    bullets: ['Production support', 'Release management', 'Monitoring', 'Reporting support', 'Enhancements', 'Continuous optimization'],
  },
]

export const differentiators = [
  { title: 'Purpose-built for VR', icon: HeartHandshake, text: 'Supports the specialized participant lifecycle, policy, fiscal and reporting needs of State Vocational Rehabilitation Agencies.' },
  { title: 'Production Salesforce foundation', icon: Layers3, text: 'Provides a functioning VR product foundation on Salesforce Government Cloud rather than beginning with an empty environment.' },
  { title: 'RSA-911 integrated with operations', icon: FileText, text: 'Connects reporting preparation and data-quality review with the case, service and fiscal information created during daily work.' },
  { title: 'Configurable for state needs', icon: SlidersHorizontal, text: 'Allows policies, roles, workflows, forms, services, approvals, interfaces and reports to be adapted without rebuilding the product.' },
]
