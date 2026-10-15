'use client';

import { useRef, useState } from 'react';

const navItems = [
  ['Colleges', '#colleges'], ['Employers', '#employers'], ['Jobs', '#jobs'], ['Blogs', '#stories'],
];
const partners = ['FIN-SERV', 'STARTUP KARNATAKA', '✺', 'NASSCOM', '✦', 'KARNATAKA'];

function Logo() {
  return <a className="brand" href="#top" aria-label="CampusPe home"><span className="brand-mark">C</span>Campus<span>Pe</span></a>;
}
function Button({ children, variant = 'primary', onClick, href, type = 'button' }) {
  const cls = `btn btn-${variant}`;
  if (href) return <a className={cls} href={href}>{children}<span aria-hidden="true"> ↗</span></a>;
  return <button type={type} className={cls} onClick={onClick}>{children}</button>;
}
function SectionEyebrow({ children }) { return <div className="eyebrow"><span />{children}</div>; }
function Check({ children }) { return <li><span className="check">✓</span>{children}</li>; }

function MiniOpportunityCard() {
  return <div className="opportunity-card float-card" aria-label="Example campus opportunity dashboard">
    <div className="mini-head"><b>CampusPe Opportunity Feed</b><span className="live-pill">● LIVE</span></div>
    <div className="mini-tabs"><span className="tab-active">For you</span><span>Internships</span><span>Jobs</span></div>
    <div className="opportunity"><span className="company-logo orange">P</span><div><b>Product Design Intern</b><small>PixelWorks · Bengaluru</small></div><span className="tag blue-tag">New</span></div>
    <div className="opportunity"><span className="company-logo purple">N</span><div><b>Frontend Developer</b><small>Nextwave · Remote</small></div><span className="tag green-tag">Match 92%</span></div>
    <div className="opportunity"><span className="company-logo pink">M</span><div><b>Marketing Associate</b><small>Marketly · Chennai</small></div><span className="tag blue-tag">Apply</span></div>
    <div className="mini-footer">Personalized opportunities, all in one place <span>→</span></div>
  </div>;
}

function HeroVisual() {
  return <div className="hero-visual">
    <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
    <div className="hero-glow"/>
    <div className="profile-float float-card"><div className="avatar avatar-blue">S</div><div><b>Great news, Sam!</b><small>Your profile is getting noticed</small><div className="progress"><span/></div></div><span className="sparkle">✦</span></div>
    <MiniOpportunityCard />
    <div className="match-float float-card"><span className="match-icon">✦</span><div><b>92% match</b><small>You're a great fit</small></div><span className="match-check">✓</span></div>
    <div className="bubble bubble-one">✦</div><div className="bubble bubble-two">↗</div>
  </div>;
}

function Header({ onDemo }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return <header className="site-header"><div className="nav-wrap"><Logo />
    <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span/><span/><span/></button>
    <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
      {navItems.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
      <button className="nav-login" onClick={onDemo}>Sign in</button><Button onClick={onDemo}>Get started</Button>
    </nav>
  </div></header>;
}

function Hero({ onDemo }) {
  return <section className="hero section-shell" id="top"><div className="hero-copy">
    <div className="announcement"><span className="announcement-dot"/> Your next opportunity starts here <span>↗</span></div>
    <h1>Connect <span className="gradient-text">10X Faster.</span><br/>Grow without limits.</h1>
    <p className="hero-subtitle">One connected platform for students, colleges, and employers to discover opportunities, build relationships, and get ahead.</p>
    <div className="hero-actions"><Button onClick={onDemo}>Get started for free <span>→</span></Button><a className="text-link" href="#how-it-works"><span className="play-icon">▶</span> See how it works</a></div>
    <div className="social-proof"><div className="avatar-stack"><span>S</span><span>R</span><span>A</span><span>+</span></div><div><div className="stars">★★★★★ <b>4.9/5</b></div><small>Loved by students and recruiters</small></div></div>
  </div><HeroVisual /></section>;
}

function AudienceCards({ onDemo }) {
  const cards = [
    { id: 'students', icon: '✦', label: 'FOR STUDENTS', title: 'Your future, in focus.', desc: 'Find internships, jobs, mentors, and experiences that match your ambitions.', points: ['Discover roles that fit your skills', 'Build a profile recruiters notice', 'Keep every opportunity organized'], tone: 'blue', action: 'Explore opportunities' },
    { id: 'colleges', icon: '▦', label: 'FOR COLLEGES', title: 'Outcomes that stand out.', desc: 'Bring your student community, career services, and employer network together.', points: ['Support student career readiness', 'Track engagement and outcomes', 'Build stronger industry connections'], tone: 'green', action: 'For colleges' },
    { id: 'employers', icon: '↗', label: 'FOR EMPLOYERS', title: 'Meet your next great hire.', desc: 'Connect with emerging talent from campuses and find the right fit faster.', points: ['Reach relevant student talent', 'Simplify campus hiring', 'Build a future-ready talent pipeline'], tone: 'purple', action: 'Hire with CampusPe' },
  ];
  return <section className="audience section-shell" id="how-it-works"><div className="section-heading centered"><SectionEyebrow>ONE PLATFORM. MORE POSSIBILITIES.</SectionEyebrow><h2>What are you looking for?</h2><p>Wherever you are in your journey, there's a better way forward.</p></div>
    <div className="audience-grid">{cards.map(card => <article className={`audience-card ${card.tone}`} key={card.id} id={card.id}><div className="card-top"><span className="audience-icon">{card.icon}</span><span className="card-label">{card.label}</span></div><h3>{card.title}</h3><p>{card.desc}</p><ul>{card.points.map(p => <Check key={p}>{p}</Check>)}</ul><button className="card-link" onClick={onDemo}>{card.action}<span>→</span></button><div className="card-decoration"/></article>)}</div>
  </section>;
}

function Stats() {
  return <section className="stats section-shell"><div className="stat"><span className="stat-icon blue-stat">♧</span><div><b>800+</b><small>College partners</small></div></div><div className="stat"><span className="stat-icon purple-stat">◎</span><div><b>130+</b><small>Hiring partners</small></div></div><div className="stat"><span className="stat-icon green-stat">♙</span><div><b>100K+</b><small>Student connections</small></div></div><div className="stat"><span className="stat-icon orange-stat">✧</span><div><b>10X</b><small>Faster discovery</small></div></div></section>;
}

function Partners() {
  return <section className="partners section-shell"><p>POWERING THE NEXT GENERATION WITH TRUSTED PARTNERS</p><div className="partner-logos">{partners.map((p, i) => <div className={`partner-logo partner-${i}`} key={p}><span>{i === 0 ? '◈' : i === 1 ? '➤' : ''}</span>{p}</div>)}</div></section>;
}

function JobsSection({ onDemo }) {
  return <section className="jobs-section section-shell" id="jobs"><div className="jobs-copy"><SectionEyebrow>LESS SEARCHING. MORE STARTING.</SectionEyebrow><h2>Stop searching.<br/><span className="gradient-text">Start getting matched.</span></h2><p>Find the right opportunities without the endless scrolling. CampusPe helps you discover roles that fit your skills, interests, and goals.</p><ul className="feature-list"><Check>Get recommendations that fit your profile</Check><Check>Discover relevant internships and jobs</Check><Check>Stay on top of applications and updates</Check></ul><Button onClick={onDemo}>Find your next opportunity <span>→</span></Button></div><div className="jobs-visual"><MiniOpportunityCard /><div className="tiny-note"><span>✦</span><div><b>Made for your next step</b><small>Less noise. More relevant opportunities.</small></div></div></div></section>;
}

function ResumeSection({ onDemo }) {
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState('');
  const [uploadMessage, setUploadMessage] = useState('');
  function handleFile(file) {
    if (!file) return;
    if (!/\.(pdf|doc|docx)$/i.test(file.name)) { setUploadMessage('Please choose a PDF, DOC, or DOCX file.'); setFileName(''); return; }
    setFileName(file.name); setUploadMessage('Demo upload ready — your file has not been sent to a server.');
  }
  return <section className="resume-section" id="resume"><div className="section-shell resume-inner"><div className="section-heading centered"><SectionEyebrow>YOUR NEXT CHAPTER STARTS HERE</SectionEyebrow><h2>Upload your resume.<br/><span className="gradient-text">Find jobs that fit.</span></h2><p>Share your experience and discover opportunities tailored to your strengths and preferences.</p></div>
    <div className="upload-panel"><div className="upload-spark spark-a">✦</div><div className="upload-spark spark-b">✧</div><div className="upload-icon">↑</div><h3>{fileName ? 'Resume selected!' : 'Upload your resume'}</h3><p>{fileName || 'Drop your resume here or browse files to get started.'}</p><input ref={inputRef} type="file" accept=".pdf,.doc,.docx" hidden onChange={e => handleFile(e.target.files?.[0])}/><Button onClick={() => inputRef.current?.click()}>{fileName ? 'Choose another file' : 'Browse files'}</Button><small>PDF, DOC, or DOCX · Demo interface only</small>{uploadMessage && <div className={uploadMessage.startsWith('Please') ? 'upload-message error' : 'upload-message'} role="status">{uploadMessage}</div>}</div>
    <div className="benefit-pills"><span>✓ Smart job matching</span><span>✓ Profile visibility</span><span>✓ Personalized opportunities</span><span>✓ Easy application tracking</span></div>
  </div></section>;
}

function DiscoverySection({ onDemo }) {
  const items = [
    ['01', 'Build your campus profile', 'Showcase skills, projects, and what makes you unique.', 'PROFILE READY', 'green'],
    ['02', 'Discover meaningful opportunities', 'Explore roles and experiences selected for you.', 'SMART MATCH', 'blue'],
    ['03', 'Connect with the right people', 'Meet recruiters, mentors, and your future community.', 'MAKE CONNECTIONS', 'purple'],
  ];
  return <section className="discovery section-shell" id="stories"><div className="discovery-copy"><SectionEyebrow>YOUR JOURNEY, CONNECTED</SectionEyebrow><h2>Get discovered<br/>by <span className="gradient-text">students and recruiters.</span></h2><p>CampusPe brings the people and possibilities around your career into one simple experience — so you can spend less time searching and more time moving forward.</p><Button onClick={onDemo}>Discover CampusPe <span>→</span></Button></div><div className="steps-list">{items.map(([n, title, desc, tag, tone]) => <div className="step-card" key={n}><div className="step-number">{n}</div><div className="step-content"><h3>{title}</h3><p>{desc}</p></div><span className={`step-tag ${tone}`}>{tag}</span></div>)}</div></section>;
}

function HiringSection({ onDemo }) {
  const features = [
    ['◉', 'Build your campus pipeline', 'Reach motivated students and emerging talent.', 'TALENT DISCOVERY', 'green'],
    ['⌁', 'Engage a connected community', 'Build meaningful connections with colleges.', 'COMMUNITY', 'purple'],
    ['✓', 'Connect with candidates directly', 'Make it easier to move from discovery to dialogue.', 'CONNECTIONS', 'blue'],
    ['↗', 'Measure your hiring momentum', 'Keep opportunities and progress organized.', 'INSIGHTS', 'orange'],
  ];
  return <section className="hiring-section"><div className="section-shell hiring-inner"><div className="hiring-copy"><SectionEyebrow>BUILT FOR BETTER HIRING</SectionEyebrow><h2>Stop running<br/>campus drives.<br/><span className="gradient-text">Start hiring the right people.</span></h2><p>Make campus recruitment feel more connected. Find promising candidates, build lasting relationships, and bring your hiring goals into focus.</p><Button onClick={onDemo}>Partner with us <span>→</span></Button></div><div className="hiring-cards">{features.map(([icon, title, desc, tag, tone]) => <div className="hiring-card" key={title}><span className={`hiring-icon ${tone}`}>{icon}</span><div><h3>{title}</h3><p>{desc}</p></div><span className={`step-tag ${tone}`}>{tag}</span></div>)}</div></div></section>;
}

function Footer({ onDemo }) {
  return <footer className="footer"><div className="section-shell footer-main"><div className="footer-brand"><Logo/><p>Bringing students, colleges, and employers closer to what comes next.</p><Button onClick={onDemo}>Get started <span>→</span></Button></div><div className="footer-col"><b>Explore</b><a href="#students">For students</a><a href="#colleges">For colleges</a><a href="#employers">For employers</a><a href="#jobs">Opportunities</a></div><div className="footer-col"><b>CampusPe</b><a href="#how-it-works">How it works</a><a href="#stories">Our community</a><button onClick={onDemo}>Contact us</button></div><div className="footer-newsletter"><b>Stay in the loop</b><p>Get updates on new opportunities and campus stories.</p><form onSubmit={e => {e.preventDefault(); onDemo('Thanks for your interest! Newsletter signup is a demo.');}}><label className="sr-only" htmlFor="newsletter-email">Email address</label><input id="newsletter-email" type="email" placeholder="Your email address" required/><button aria-label="Subscribe to newsletter">→</button></form></div></div><div className="section-shell footer-bottom"><span>© {new Date().getFullYear()} CampusPe. All rights reserved.</span><span><a href="#top">Privacy</a><a href="#top">Terms</a><a href="#top">Back to top ↑</a></span></div></footer>;
}

function DemoModal({ open, onClose, notice }) {
  const [role, setRole] = useState('Student');
  const [submitted, setSubmitted] = useState(false);
  if (!open) return null;
  return <div className="modal-backdrop" role="presentation" onMouseDown={e => {if (e.target === e.currentTarget) onClose();}}><section className="demo-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="modal-close" onClick={onClose} aria-label="Close dialog">×</button><div className="modal-logo"><Logo/></div><div className="modal-spark">✦</div><h2 id="modal-title">{notice || (submitted ? 'You’re on your way!' : 'Let’s get you connected.')}</h2>{submitted && !notice ? <p className="modal-description">Thanks for trying the CampusPe demo. Your details have not been sent to a server.</p> : <><p className="modal-description">Choose your journey and see how CampusPe can help you take the next step.</p><form onSubmit={e => {e.preventDefault(); setSubmitted(true);}}><label htmlFor="demo-role">I’m here as a</label><select id="demo-role" value={role} onChange={e => setRole(e.target.value)}><option>Student</option><option>College representative</option><option>Employer / Recruiter</option></select><label htmlFor="demo-email">Email address</label><input id="demo-email" type="email" placeholder="you@example.com" required/><button className="btn btn-primary modal-submit" type="submit">Explore as {role} <span>→</span></button></form></>}<small className="demo-disclaimer">Interactive demo · No information is transmitted</small></section></div>;
}

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [notice, setNotice] = useState('');
  function openDemo(message = '') { setNotice(message); setModalOpen(true); }
  function closeDemo() { setModalOpen(false); setNotice(''); }
  return <><Header onDemo={() => openDemo()}/><main><Hero onDemo={() => openDemo()}/><AudienceCards onDemo={() => openDemo()}/><Stats/><Partners/><JobsSection onDemo={() => openDemo()}/><ResumeSection onDemo={() => openDemo()}/><DiscoverySection onDemo={() => openDemo()}/><HiringSection onDemo={() => openDemo()}/><section className="final-cta section-shell"><div><span className="final-spark">✦</span><h2>Your next opportunity is closer than you think.</h2><p>Make your next move with CampusPe.</p></div><Button onClick={() => openDemo()}>Get started for free <span>→</span></Button></section></main><Footer onDemo={message => openDemo(message || '')}/><DemoModal open={modalOpen} onClose={closeDemo} notice={notice}/></>;
}
