import { useEffect, useMemo, useState, type CSSProperties } from 'react'
import { Link, Route, Routes, useParams } from 'react-router-dom'
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
        {back ? <Link to="/" className="back-button">Back</Link> : <div className="back-spacer" />}
        <Link to="/" className="wordmark" aria-label="It's Meech's Time">IT'S MEECH'S<br />TIME</Link>
        <nav className="socials" aria-label="Social links">{socials.map(([name, href]) => <a href={href} key={name}>{name}</a>)}</nav>
      </div>
    </header>
    <footer className="page-footer"><span>© All rights reserved. 2026</span><span className="footer-credit">Site by <a href="https://www.theblackpepperstudio.com/">TBP</a></span></footer>
  </>
}

function App() {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/:kind/:slug" element={<ProjectPage />} />
    <Route path="*" element={<Home />} />
  </Routes>
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
            <span>FASHION</span><span>BEAUTY</span><span>BRANDS</span><span>ARTIST</span><span>MAGAZINE</span>
            <span>PHOTO</span><span>VIDEO</span><span>HOME</span><span>ABOUT</span><span>BOOK</span>
          </div>
          {featured.map((project, index) => <SceneProject key={`${project.kind}-${project.slug}-${index}`} project={project} index={index} progress={progress} />)}
          <div className="scene-hint" style={{ opacity: Math.min(1, Math.max(0, progress * 3 - 1.25)) }}>SELECTED WORK<br /><i>↓</i></div>
        </div>
      </section>
      <section className="work-index" id="work">
        <div className="index-intro"><p>Photography + Film</p><h1>Selected work</h1><span>Scroll to explore</span></div>
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
  return <Link to={`/${project.kind}/${project.slug}`} className="scene-project" style={style} aria-label={`View ${projectTitle(project)}`}><img src={project.image} alt="" /></Link>
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <Link className={`work-card work-card-${index % 5}`} to={`/${project.kind}/${project.slug}`}>
    <span className="work-number">{String(index + 1).padStart(2, '0')}</span>
    <div className="work-image"><img src={project.image} alt="" loading="lazy" /></div>
    <h2>{project.top}<br />{project.bottom}</h2>
    <span className="work-kind">{project.kind}</span>
  </Link>
}

function ProjectPage() {
  const { kind, slug } = useParams()
  const project = useMemo(() => projects.find((item) => item.slug === slug && item.kind === kind) ?? projects[0], [kind, slug])
  const index = projects.indexOf(project)
  const previous = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]

  useEffect(() => {
    document.title = `${projectTitle(project)} — Meech213`
    window.scrollTo(0, 0)
  }, [project])

  return <div className="project-page">
    <SiteChrome back />
    <main>
      <section className="project-hero">
        <div className="project-title"><h1>{project.top}<br />{project.bottom}</h1><p>Scroll to view</p></div>
        <div className="hero-count"><span>{String(index + 1).padStart(2, '0')}</span><i /> <span>{String(projects.length).padStart(2, '0')}</span></div>
        <img className="hero-project-image" src={project.image} alt="" />
      </section>
      <section className="project-gallery" aria-label={`${projectTitle(project)}, ${project.kind === 'photo' ? 'photographs' : 'film stills'}`}>
        <p className="gallery-caption">Showing {String(index + 1).padStart(2, '0')} of {String(projects.length).padStart(2, '0')}</p>
        {Array.from({ length: 8 }).map((_, imageIndex) => <figure className={`gallery-frame gallery-frame-${imageIndex % 5}`} key={imageIndex}>
          {project.kind === 'video' && imageIndex === 2 && project.video ? <video src={project.video} poster={project.image} autoPlay muted loop playsInline /> : <img src={project.image} alt={`${projectTitle(project)}, image ${imageIndex + 1}`} loading={imageIndex > 1 ? 'lazy' : 'eager'} />}
        </figure>)}
      </section>
      <nav className="project-switcher" aria-label="Project navigation">
        <Link to={`/${previous.kind}/${previous.slug}`}><small>Previous project</small><span>Prev</span><b>{projectTitle(previous)}</b></Link>
        <Link to={`/${next.kind}/${next.slug}`}><small>Next project</small><span>Next</span><b>{projectTitle(next)}</b></Link>
      </nav>
    </main>
  </div>
}

export default App
