export type Project = {
  slug: string
  kind: 'photo' | 'video'
  category: string
  top: string
  bottom: string
  image: string
  summary: string
}

const image = (name: string) => `/events/${name}.webp`

export const projects: Project[] = [
  { slug: 'campus-codesprint', kind: 'photo', category: 'Hackathon', top: 'Campus', bottom: 'CodeSprint', image: image('code'), summary: 'A 24-hour team hackathon for useful campus ideas, fast prototypes and late-night problem solving.' },
  { slug: 'roborally-arena', kind: 'video', category: 'Robotics', top: 'RoboRally', bottom: 'Arena', image: image('robotics'), summary: 'Student-built bots take on a timed arena of turns, checkpoints and surprise engineering challenges.' },
  { slug: 'pixelpitch-design-jam', kind: 'photo', category: 'Design', top: 'PixelPitch', bottom: 'Design Jam', image: image('design'), summary: 'A one-day design sprint where teams turn a real student problem into a clear, testable interface.' },
  { slug: 'rangriti-showcase', kind: 'video', category: 'Culture', top: 'Rangriti', bottom: 'Showcase', image: image('rangoli'), summary: 'An open-air celebration of colour, pattern and collaborative floor art made by campus teams.' },
  { slug: 'framelab-film-sprint', kind: 'photo', category: 'Film', top: 'FrameLab', bottom: 'Film Sprint', image: image('film'), summary: 'Write, shoot and edit a short film after a surprise prompt drops at the opening bell.' },
  { slug: 'focus-form-photowalk', kind: 'video', category: 'Photography', top: 'Focus & Form', bottom: 'Photo Walk', image: image('photo'), summary: 'A guided campus photo walk for finding the small, human stories between lectures.' },
  { slug: 'rhythm-riot', kind: 'photo', category: 'Dance', top: 'Rhythm', bottom: 'Riot', image: image('dance'), summary: 'Soloists and crews bring their strongest routines to a high-energy evening dance battle.' },
  { slug: 'speakup-debate-open', kind: 'video', category: 'Debate', top: 'SpeakUp', bottom: 'Debate Open', image: image('debate'), summary: 'Teams defend a surprise motion with sharp research, good listening and a persuasive final case.' },
  { slug: 'gamegrid-cup', kind: 'photo', category: 'Esports', top: 'GameGrid', bottom: 'Cup', image: image('gaming'), summary: 'A student esports bracket with friendly qualifiers, live finals and a packed campus audience.' },
  { slug: 'skysprint-drone-trial', kind: 'video', category: 'Aerial Tech', top: 'SkySprint', bottom: 'Drone Trial', image: image('drone'), summary: 'Pilot a protected quadcopter through a precision course built by the campus aerial club.' },
  { slug: 'pitchforge-summit', kind: 'photo', category: 'Entrepreneurship', top: 'PitchForge', bottom: 'Summit', image: image('startup'), summary: 'Student founders share early ideas, receive feedback and pitch for small prototype grants.' },
  { slug: 'ampersand-live', kind: 'video', category: 'Music', top: 'Ampersand', bottom: 'Live', image: image('music'), summary: 'Campus bands turn the amphitheatre into a night of original music, covers and collaboration.' },
  { slug: 'circuitcraft-iot', kind: 'photo', category: 'Technology', top: 'CircuitCraft', bottom: 'IoT Challenge', image: image('event-13'), summary: 'Build a connected device that makes one everyday college task simpler, safer or more fun.' },
  { slug: 'botbuild-starter-lab', kind: 'video', category: 'Workshop', top: 'BotBuild', bottom: 'Starter Lab', image: image('event-14'), summary: 'A welcoming hands-on lab for first-time builders to make a small moving machine together.' },
  { slug: 'ux-for-all', kind: 'photo', category: 'Design', top: 'UX for', bottom: 'All', image: image('event-15'), summary: 'Audit a student service for clarity and access, then redesign the moments that cause friction.' },
  { slug: 'color-canvas', kind: 'video', category: 'Arts', top: 'Color', bottom: 'Canvas', image: image('event-16'), summary: 'An all-day arts festival of murals, installations, sketches and conversations across campus.' },
  { slug: 'campus-reel-relay', kind: 'photo', category: 'Film', top: 'Campus Reel', bottom: 'Relay', image: image('event-17'), summary: 'Small crews pass a story from one group to the next, creating one unexpected campus film.' },
  { slug: 'darkroom-discovery', kind: 'video', category: 'Photography', top: 'Darkroom', bottom: 'Discovery', image: image('event-18'), summary: 'Learn the quiet craft of analogue photography, from contact sheet to your first print.' },
  { slug: 'street-step-cypher', kind: 'photo', category: 'Dance', top: 'Street Step', bottom: 'Cypher', image: image('event-19'), summary: 'A casual circle for freestyle, shared movement and a friendly showcase of campus dance styles.' },
  { slug: 'policy-parley', kind: 'video', category: 'Debate', top: 'Policy &', bottom: 'Parley', image: image('event-20'), summary: 'A public forum where student teams unpack a big campus issue through evidence and debate.' },
  { slug: 'valor-vault-night', kind: 'photo', category: 'Gaming', top: 'Valor Vault', bottom: 'Night', image: image('event-21'), summary: 'A social gaming night with quick brackets, watch parties and space for every skill level.' },
  { slug: 'aerial-mapping', kind: 'video', category: 'Workshop', top: 'Aerial', bottom: 'Mapping', image: image('event-22'), summary: 'Explore the basics of drone imagery, flight planning and responsible aerial mapping.' },
  { slug: 'founder-friday', kind: 'photo', category: 'Entrepreneurship', top: 'Founder', bottom: 'Friday', image: image('event-23'), summary: 'An easygoing pitch night for sharing early startup ideas and meeting possible collaborators.' },
  { slug: 'acoustic-evenings', kind: 'video', category: 'Music', top: 'Acoustic', bottom: 'Evenings', image: image('event-24'), summary: 'An intimate open stage for singer-songwriters, unplugged sets and songs worth staying late for.' },
  { slug: 'algorithm-avalanche', kind: 'photo', category: 'Coding', top: 'Algorithm', bottom: 'Avalanche', image: image('event-25'), summary: 'An individual coding round of carefully crafted problems, quick thinking and a live leaderboard.' },
  { slug: 'mechmaze-race', kind: 'video', category: 'Robotics', top: 'MechMaze', bottom: 'Race', image: image('event-26'), summary: 'Build and tune a small robot to navigate a changing maze faster than the teams around you.' },
  { slug: 'interface-remix', kind: 'photo', category: 'Design', top: 'Interface', bottom: 'Remix', image: image('event-27'), summary: 'Reimagine a familiar student app with stronger flows, cleaner language and playful interactions.' },
  { slug: 'heritage-art-carnival', kind: 'video', category: 'Culture', top: 'Heritage Art', bottom: 'Carnival', image: image('event-28'), summary: 'Student artists celebrate regional patterns, materials and stories in a shared campus carnival.' },
  { slug: 'script-to-screen', kind: 'photo', category: 'Film', top: 'Script to', bottom: 'Screen', image: image('event-29'), summary: 'A filmmaking workshop about turning a small written idea into a scene that holds attention.' },
  { slug: 'lens-light-expo', kind: 'video', category: 'Photography', top: 'Lens & Light', bottom: 'Expo', image: image('event-30'), summary: 'A student photography exhibit that brings campus observations, portraits and experiments together.' },
  { slug: 'campus-dance-crew', kind: 'photo', category: 'Dance', top: 'Campus Dance', bottom: 'Crew', image: image('event-31'), summary: 'Crews share choreography, learn from each other and close the day with a collaborative finale.' },
  { slug: 'model-un-assembly', kind: 'video', category: 'Public Speaking', top: 'Model UN', bottom: 'Assembly', image: image('event-32'), summary: 'Represent a country, negotiate a resolution and practice the art of clear, constructive diplomacy.' },
  { slug: 'mobile-gaming-masters', kind: 'photo', category: 'Esports', top: 'Mobile Gaming', bottom: 'Masters', image: image('event-33'), summary: 'A fast campus tournament for mobile players, spectators and new teams looking for a challenge.' },
  { slug: 'drone-build-lab', kind: 'video', category: 'Aerial Tech', top: 'Drone Build', bottom: 'Lab', image: image('event-34'), summary: 'Learn the components behind safe flight and assemble a simple drone platform with mentors.' },
  { slug: 'idea-incubator-fest', kind: 'photo', category: 'Innovation', top: 'Idea Incubator', bottom: 'Fest', image: image('event-35'), summary: 'An open campus festival for prototypes, feedback walls, mini talks and useful new ideas.' },
  { slug: 'music-mashup', kind: 'video', category: 'Music', top: 'Music', bottom: 'Mashup', image: image('event-36'), summary: 'A genre-crossing live session that pairs unexpected student performers for one-off sets.' },
  { slug: 'debug-derby', kind: 'photo', category: 'Coding', top: 'Debug', bottom: 'Derby', image: image('event-37'), summary: 'Teams race to understand, repair and explain mysterious bugs hidden inside short code challenges.' },
  { slug: 'maker-carnival', kind: 'video', category: 'Making', top: 'Maker', bottom: 'Carnival', image: image('event-38'), summary: 'A showcase of campus makers, prototypes, tiny inventions and the stories behind how they work.' },
  { slug: 'sketch-sprint', kind: 'photo', category: 'Design', top: 'Sketch', bottom: 'Sprint', image: image('event-39'), summary: 'A quick visual-thinking session for students who want to explore an idea before opening a laptop.' },
  { slug: 'campus-culture-night', kind: 'video', category: 'Culture', top: 'Campus Culture', bottom: 'Night', image: image('event-40'), summary: 'Food, music, art and traditions come together in one shared night on the main lawn.' },
  { slug: 'documentary-dash', kind: 'photo', category: 'Film', top: 'Documentary', bottom: 'Dash', image: image('event-41'), summary: 'Find a real campus story, earn trust, shoot carefully and edit a two-minute documentary.' },
  { slug: 'gallery-walk-talk', kind: 'video', category: 'Photography', top: 'Gallery Walk', bottom: '& Talk', image: image('event-42'), summary: 'A thoughtful exhibition walk with student photographers sharing the stories behind each frame.' },
]

export const projectTitle = (project: Project) => `${project.top} ${project.bottom}`.trim()
