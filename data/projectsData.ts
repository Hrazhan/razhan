interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  // {
  //   title: 'The Time Machine',
  //   description: `Imagine being able to travel back in time or to the future. Simple turn the knob
  //   to the desired date and press "Go". No more worrying about lost keys or
  //   forgotten headphones with this simple yet affordable solution.`,
  //   imgSrc: '/static/images/time-machine.jpg',
  //   href: '/blog/the-time-machine',
  // },
  {
    title: 'Kurdish Spell Checker',
    description: 'This spell corrector utilizes an encoder-decoder transformer architecture. The model is trained on synthetic data, generated using various hueristics.',
    imgSrc: '/static/images/projects/spell-checker.webp',
    href: 'https://huggingface.co/spaces/razhan/Kurd-Spell'
  },
  {
    title: 'Kurdish Speech Recognition',
    description: 'This speech recognition model is trained on the Common Voice dataset. The model is based on the Whisper architecture.',
    imgSrc: '/static/images/projects/speech-recognition.webp',
    href: 'https://huggingface.co/spaces/razhan/whisper-ckb-demo'
  }
]

export default projectsData
