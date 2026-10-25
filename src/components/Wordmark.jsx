export default function Wordmark({ tone = 'dark' }) {
  const color = tone === 'light' ? 'text-cream' : 'text-chocolate'

  return (
    <span className={`inline-flex flex-col leading-none ${color}`}>
      <span className="text-[0.62rem] font-light tracking-[0.48em] sm:text-[0.68rem]">ZRM</span>
      <span className="text-[0.98rem] font-bold tracking-[0.16em] sm:text-[1.12rem]">COACHING</span>
    </span>
  )
}
