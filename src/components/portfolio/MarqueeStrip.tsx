type Props = {
  items: string[]
}

export default function MarqueeStrip({ items }: Props) {
  // Duplicate items for seamless infinite scroll
  const track = [...items, ...items]

  return (
    <div className="overflow-hidden border-y border-portfolio-border bg-[rgba(200,151,58,0.02)] py-4">
      <div className="marquee-track">
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-6 whitespace-nowrap px-6 text-xs font-semibold uppercase tracking-[0.2em] text-portfolio-text-muted"
          >
            {item}
            <span className="text-portfolio-gold opacity-40">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
