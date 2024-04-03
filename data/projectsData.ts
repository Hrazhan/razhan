import { Github } from "@/components/social-icons/icons"

interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
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
  },
  {
    title: 'Transformer based OCR',
    description: 'A vision encoder-decoder model for text recognition. Accompanied with code to generate synthetic data at scale. The model is also further fine-tuned on handwritten Kurdish text.',
    imgSrc: '/static/images/projects/kurdish-ocr.webp',
    href: 'https://huggingface.co/spaces/razhan/kurdish-ocr'
  }
]

export default projectsData
