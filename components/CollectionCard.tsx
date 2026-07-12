import Link from 'next/link'
import type { Collection } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface CollectionCardProps {
  collection: Collection
}

export default function CollectionCard({ collection }: CollectionCardProps) {
  const cover = collection.metadata?.cover_image
  const name = getMetafieldValue(collection.metadata?.name) || collection.title
  const description = getMetafieldValue(collection.metadata?.description)

  return (
    <Link
      href={`/collections/${collection.slug}`}
      className="group relative block overflow-hidden rounded-xl aspect-[3/2]"
    >
      {cover ? (
        <img
          src={`${cover.imgix_url}?w=1000&h=667&fit=crop&auto=format,compress`}
          alt={name}
          width={500}
          height={333}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="w-full h-full bg-ink/10" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="font-serif text-2xl text-white">{name}</h3>
        {description && <p className="text-sm text-white/80 mt-1 line-clamp-2">{description}</p>}
      </div>
    </Link>
  )
}