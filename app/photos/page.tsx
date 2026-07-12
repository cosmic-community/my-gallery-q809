import { getPhotos } from '@/lib/cosmic'
import PhotoCard from '@/components/PhotoCard'

export const metadata = {
  title: 'Photos — My Gallery',
}

export default async function PhotosPage() {
  const photos = await getPhotos()

  return (
    <div className="container-page py-16">
      <h1 className="font-serif text-4xl text-ink mb-2">Photos</h1>
      <p className="text-ink-soft mb-10">Every image in the gallery.</p>

      {photos.length === 0 ? (
        <p className="text-ink-soft">No photos available yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
      )}
    </div>
  )
}