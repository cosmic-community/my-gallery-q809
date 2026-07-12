import Link from 'next/link'
import type { Photo } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface PhotoCardProps {
  photo: Photo
}

export default function PhotoCard({ photo }: PhotoCardProps) {
  const image = photo.metadata?.image
  const title = getMetafieldValue(photo.metadata?.title) || photo.title
  const collection = photo.metadata?.collection

  return (
    <Link
      href={`/photos/${photo.slug}`}
      className="group block overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="aspect-[4/3] overflow-hidden bg-ink/5">
        {image ? (
          <img
            src={`${image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
            alt={title}
            width={400}
            height={300}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-ink/30">No image</div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-serif text-lg text-ink">{title}</h3>
        {collection && (
          <p className="text-xs text-accent mt-1 uppercase tracking-wide">
            {getMetafieldValue(collection.metadata?.name) || collection.title}
          </p>
        )}
      </div>
    </Link>
  )
}