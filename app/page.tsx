import Link from 'next/link'
import { getCollections, getPhotos, getTestimonials } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import CollectionCard from '@/components/CollectionCard'
import PhotoCard from '@/components/PhotoCard'
import TestimonialCard from '@/components/TestimonialCard'

export default async function HomePage() {
  const [collections, photos, testimonials] = await Promise.all([
    getCollections(),
    getPhotos(),
    getTestimonials(),
  ])

  const heroImage =
    photos[0]?.metadata?.image || collections[0]?.metadata?.cover_image
  const featuredCollections = collections.slice(0, 3)
  const featuredPhotos = photos.slice(0, 6)
  const featuredTestimonials = testimonials.slice(0, 3)

  return (
    <div>
      <Hero image={heroImage} />

      {featuredCollections.length > 0 && (
        <section className="container-page py-16">
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-serif text-3xl text-ink">Featured Collections</h2>
            <Link href="/collections" className="text-sm text-accent hover:underline">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCollections.map((collection) => (
              <CollectionCard key={collection.id} collection={collection} />
            ))}
          </div>
        </section>
      )}

      {featuredPhotos.length > 0 && (
        <section className="container-page py-16 border-t border-ink/10">
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-serif text-3xl text-ink">Latest Photos</h2>
            <Link href="/photos" className="text-sm text-accent hover:underline">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPhotos.map((photo) => (
              <PhotoCard key={photo.id} photo={photo} />
            ))}
          </div>
        </section>
      )}

      {featuredTestimonials.length > 0 && (
        <section className="container-page py-16 border-t border-ink/10">
          <h2 className="font-serif text-3xl text-ink mb-8 text-center">What Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}