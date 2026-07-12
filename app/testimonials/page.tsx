import { getTestimonials } from '@/lib/cosmic'
import TestimonialCard from '@/components/TestimonialCard'

export const metadata = {
  title: 'Testimonials — My Gallery',
}

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials()

  return (
    <div className="container-page py-16">
      <h1 className="font-serif text-4xl text-ink mb-2">Testimonials</h1>
      <p className="text-ink-soft mb-10">Kind words from clients I've had the pleasure of working with.</p>

      {testimonials.length === 0 ? (
        <p className="text-ink-soft">No testimonials available yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      )}
    </div>
  )
}