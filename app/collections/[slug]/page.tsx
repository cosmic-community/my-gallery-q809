// app/collections/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCollection, getPhotosByCollection, getMetafieldValue } from '@/lib/cosmic'
import PhotoCard from '@/components/PhotoCard'

export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const collection = await getCollection(slug)

  if (!collection) {
    notFound()
  }

  const photos = await getPhotosByCollection(collection.id)
  const cover = collection.metadata?.cover_image
  const name = getMetafieldValue(collection.metadata?.name) || collection.title
  const description = getMetafieldValue(collection.metadata?.description)

  return (
    <div>
      <section className="relative h-[50vh] min-h-[320px] flex items-end overflow-hidden">
        {cover ? (
          <img
            src={`${cover.imgix_url}?w=2400&h=1200&fit=crop&auto=format,compress`}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-ink" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="relative container-page pb-10">
          <Link href="/collections" className="text-white/80 text-sm hover:text-white">
            ← All Collections
          </Link>
          <h1 className="font-serif text-4xl sm:text-5xl text-white mt-3">{name}</h1>
          {description && <p className="text-white/85 mt-2 max-w-2xl">{description}</p>}
        </div>
      </section>

      <div className="container-page py-16">
        {photos.length === 0 ? (
          <p className="text-ink-soft">No photos in this collection yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <PhotoCard key={photo.id} photo={photo} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}