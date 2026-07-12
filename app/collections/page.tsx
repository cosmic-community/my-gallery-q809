import { getCollections } from '@/lib/cosmic'
import CollectionCard from '@/components/CollectionCard'

export const metadata = {
  title: 'Collections — My Gallery',
}

export default async function CollectionsPage() {
  const collections = await getCollections()

  return (
    <div className="container-page py-16">
      <h1 className="font-serif text-4xl text-ink mb-2">Collections</h1>
      <p className="text-ink-soft mb-10">Curated sets of photographs grouped by theme.</p>

      {collections.length === 0 ? (
        <p className="text-ink-soft">No collections available yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
      )}
    </div>
  )
}