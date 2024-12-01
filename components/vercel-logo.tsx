interface VercelLogoProps {
  className?: string;
}

export function VercelLogo({ className = "" }: VercelLogoProps) {
  return (
    <div className={`w-0 h-0 border-t-[18px] border-t-transparent border-l-[32px] border-l-black border-b-[18px] border-b-transparent ${className}`} />
  )
}

