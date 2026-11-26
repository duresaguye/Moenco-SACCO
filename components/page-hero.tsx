import Image from 'next/image'

export function PageHero({ eyebrow, title, description, image, alt }: { eyebrow: string; title: string; description: string; image: string; alt: string }) {
  return <section className="inner-hero"><Image className="inner-hero-image" src={image} alt={alt} fill sizes="100vw" priority /><div className="inner-hero-shade" /><div className="inner-hero-content"><p className="eyebrow"><span />{eyebrow}</p><h1>{title}</h1><p>{description}</p></div><span className="inner-hero-caption">MOENCO SACCO · ETHIOPIA</span></section>
}
