import { Popover } from '@headlessui/react'

interface ButtonProps {
  title: string
  src: string
  variant?: boolean
  alt?: string
}

export function Button({ src, title, variant, alt }: ButtonProps) {
  return (
    <Popover.Button
      className={`${
        variant ? 'bg-purple-500' : 'bg-zinc-600'
      } w-12 h-12 rounded-full px-3 group-hover:w-full transition-all duration-500 ease-linear flex items-center justify-center`}
    >
      <img src={src} alt={alt} className="w-6 h-6" />
      <span className="w-max-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
        <span className="pl-2">{title}</span>
      </span>
    </Popover.Button>
  )
}
