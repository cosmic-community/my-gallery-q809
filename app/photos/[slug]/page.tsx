// app/photos/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPhoto, getMetafieldValue } from '@/lib/cosmic'

export default async function PhotoDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const photo = await getPhoto(slug)

  if (!photo) {
    notFound()
  }

  const image = photo.metadata?.image
  const title = getMetafieldValue(photo.metadata?.title) || photo.title
  const description = getMetafieldValue(photo.metadata?.description)
  const collection = photo.metadata?.collection

  return (
    <div className="container-page py-12">
      <Link href="/photos" className="text-sm text-accent hover:underline">
        ← All Photos
      </Link>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 rounded-xl overflow-hidden bg-ink/5">
          {image ? (
            <img
              src={`${image.imgix_url}?w=1800&auto=format,compress`}
              alt={title}
              className="w-full h-auto object-contain"
            />
          ) : (
            <div className="aspect-[4/3] flex items-center justify-center text-ink/30">No image</div>
          )}
        </div>
        <div>
          <h1 className="font-serif text-3xl text-ink">{title}</h1>
          {collection && (
            <Link
              href={`/collections/${collection.slug}`}
              className="inline-block mt-3 text-sm text-accent uppercase tracking-wide hover:underline"
            >
              {getMetafieldValue(collection.metadata?.name) || collection.title}
            </Link>
          )}
          {description && (
            <p className="mt-5 text-ink-soft leading-relaxed">{description}</p>
          )}
        </div>
      </div>
    </div>
  )
}