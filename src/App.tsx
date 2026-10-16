import { useEffect, useState, type CSSProperties } from 'react'
import { projects, projectTitle, type Project } from './data/projects'

const socials = [
  ['Email', 'mailto:bookmeech213@gmail.com'],
  ['Twitter', 'https://twitter.com/lifeofmeech213'],
  ['Facebook', 'https://www.facebook.com/dametreus.ward'],
  ['Instagram', 'https://www.instagram.com/meech213'],
]

function SiteChrome({ back }: { back?: boolean }) {
  return <>
    <header className="masthead">
      <div className="masthead-inner">
        {back ? <a href="/" className="back-button">Back</a> : <div className="back-spacer" />}
        <a href="/" className="wordmark" aria-label="It's Meech's Time">IT'S MEECH'S<br />TIME</a>
        <nav className="socials" aria-label="Social links">{socials.map(([name, href]) => <a href={href} key={name}>{name}</a>)}</nav>
      </div>
    </header>
    <footer className="page-footer"><span>© All rights reserved. 2026</span><span className="footer-credit">Site by <a href="https://www.theblackpepperstudio.com/">TBP</a></span></footer>
  </>
}

function App() {
  const [kind, slug] = window.location.pathname.split('/').filter(Boolean)
  return kind && slug ? <ProjectPage kind={kind} slug={slug} /> : <Home />
}

function Home() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => setProgress(Math.min(1, window.scrollY / (window.innerHeight * 4)))
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const featured = projects.slice(0, 18)
  return <div className="home-page">
    <SiteChrome />
    <main>
      <section className="scene-scroll" aria-label="Selected visual work">
        <div className="scene">
          <div className="scene-wash" style={{ opacity: Math.max(0, .7 - progress) }} />
          <div className="scene-logo" style={{ opacity: Math.max(0, 1 - progress * 2.1) }}><b>213</b><span>MEECH</span></div>
          <p className="scene-callout" style={{ opacity: Math.max(0, 1 - progress * 2.4) }}>Scroll to view</p>
          <div className="orbit-menu" style={{ opacity: Math.min(1, Math.max(0, (progress - .1) * 4)) }}>
            <span>WORKSHOPS</span><span>CULTURE</span><span>CLUBS</span><span>TECH</span><span>FESTS</span>
            <span>EVENTS</span><span>CALENDAR</span><span>CAMPUS</span><span>SOCIETIES</span><span>RSVP</span>
          </div>
          {featured.map((project, index) => <SceneProject key={`${project.kind}-${project.slug}-${index}`} project={project} index={index} progress={progress} />)}
          <div className="scene-hint" style={{ opacity: Math.min(1, Math.max(0, progress * 3 - 1.25)) }}>SELECTED WORK<br /><i>↓</i></div>
        </div>
      </section>
      <section className="work-index" id="work">
        <div className="index-intro"><p>Campus events</p><h1>What’s on</h1><span>Scroll to explore</span></div>
        <div className="work-grid">{projects.map((project, index) => <ProjectCard project={project} index={index} key={`${project.kind}-${project.slug}-${index}`} />)}</div>
      </section>
    </main>
  </div>
}

function SceneProject({ project, index, progress }: { project: Project; index: number; progress: number }) {
  const columns = [7, 29, 50, 71, 88]
  const rows = [8, 30, 55, 73]
  const baseX = columns[index % columns.length]
  const baseY = rows[Math.floor(index / columns.length)] ?? 48
  const travel = Math.max(0, progress - .08)
  const travelX = Math.sin(index * 3.1) * travel * 190
  const travelY = Math.cos(index * 1.8) * travel * 155 - travel * 230
  const rotation = (index % 2 === 0 ? -1 : 1) * (10 + (index % 4) * 6) + progress * (index % 2 === 0 ? 36 : -32)
  const scale = .72 + (index % 3) * .12 + progress * .18
  const opacity = progress < .88 ? 1 : Math.max(0, 1 - (progress - .88) * 8)
  const style: CSSProperties = { left: `${baseX}%`, top: `${baseY}%`, transform: `translate(-50%, -50%) translate(${travelX}px, ${travelY}px) rotate(${rotation}deg) scale(${scale})`, opacity, zIndex: 5 + index }
  const imageReady = progress > .02 || index < 4
  return <a href={`/${project.kind}/${project.slug}`} className="scene-project" style={style} aria-label={`View ${projectTitle(project)}`}><img src={imageReady ? project.image : undefined} alt="" loading={index < 5 ? 'eager' : 'lazy'} decoding="async" fetchPriority={index < 5 ? 'high' : 'auto'} /></a>
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <a className={`work-card work-card-${index % 5}`} href={`/${project.kind}/${project.slug}`}>
    <span className="work-number">{String(index + 1).padStart(2, '0')}</span>
    <div className="work-image"><img src={project.image} alt="" loading="lazy" decoding="async" /></div>
    <h2>{project.top}<br />{project.bottom}</h2>
    <span className="work-kind">{project.category}</span>
  </a>
}

function ProjectPage({ kind, slug }: { kind: string; slug: string }) {
  const project = projects.find((item) => item.slug === slug && item.kind === kind) ?? projects[0]
  const index = projects.indexOf(project)
  const previous = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]

  useEffect(() => {
    document.title = `${projectTitle(project)} — Campus Events`
    window.scrollTo(0, 0)
  }, [project])

  return <div className="project-page">
    <SiteChrome back />
    <main>
      <section className="project-hero">
        <div className="project-title"><h1>{project.top}<br />{project.bottom}</h1><p>Scroll to view</p></div>
        <div className="hero-count"><span>{String(index + 1).padStart(2, '0')}</span><i /> <span>{String(projects.length).padStart(2, '0')}</span></div>
        <img className="hero-project-image" src={project.image} alt="" fetchPriority="high" decoding="async" />
      </section>
      <section className="event-content" aria-label={`${projectTitle(project)} event details`}>
        <p className="gallery-caption">Campus event · {project.category}</p>
        <article>
          <div className="event-copy"><h2>What it’s about</h2><p>{project.summary}</p><p>{projectTitle(project)} is designed as a welcoming college event: bring a curious mind, meet students outside your usual circle and leave with a new idea or collaborator.</p></div>
          <dl className="event-facts"><div><dt>Format</dt><dd>{project.category} event</dd></div><div><dt>For</dt><dd>All college students</dd></div><div><dt>Bring</dt><dd>Your campus ID and curiosity</dd></div></dl>
        </article>
        <div className="event-flow"><span>01 · Arrive</span><span>02 · Take part</span><span>03 · Share the moment</span></div>
      </section>
      <nav className="project-switcher" aria-label="Project navigation">
        <a href={`/${previous.kind}/${previous.slug}`}><small>Previous project</small><span>Prev</span><b>{projectTitle(previous)}</b></a>
        <a href={`/${next.kind}/${next.slug}`}><small>Next project</small><span>Next</span><b>{projectTitle(next)}</b></a>
      </nav>
    </main>
  </div>
}

export default App
