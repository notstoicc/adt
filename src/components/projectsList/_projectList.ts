interface projectsType {
  projectName: string
  description: string
  repoLink: string
  previewLink: string
}

type Projects<T> = T[]

export const projects: Projects<projectsType> = [
  {
    projectName: 'Gallery',
    description: 'My personal gallery.',
    repoLink: 'https://github.com/olcchi/Gallery',
    previewLink: 'https://gallery.ekar.site',
  },
  {
    projectName: 'Stoic',
    description: 'Another personal use website.',
    repoLink: 'https://github.com/notstoicc/intro',
    previewLink: 'https://stoicc.vercel.app/',
  },
  {
    projectName: 'ad0',
    description: 'The personal website you are browsing at this moment.',
    repoLink: 'https://github.com/notstoicc/adt',
    previewLink: 'https://ad0.netlify.app',
  },
]
