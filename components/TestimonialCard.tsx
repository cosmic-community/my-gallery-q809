import type { Testimonial } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const photo = testimonial.metadata?.photo
  const clientName = getMetafieldValue(testimonial.metadata?.client_name) || testimonial.title
  const company = getMetafieldValue(testimonial.metadata?.company)
  const quote = getMetafieldValue(testimonial.metadata?.quote)

  return (
    <figure className="bg-white rounded-xl p-6 shadow-sm h-full flex flex-col">
      <blockquote className="text-ink-soft italic leading-relaxed flex-1">
        {quote ? `“${quote}”` : ''}
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        {photo ? (
          <img
            src={`${photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
            alt={clientName}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-semibold">
            {clientName.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-medium text-ink">{clientName}</p>
          {company && <p className="text-xs text-ink-soft">{company}</p>}
        </div>
      </figcaption>
    </figure>
  )
}