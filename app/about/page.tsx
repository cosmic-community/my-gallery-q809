import { getAbout, getMetafieldValue } from '@/lib/cosmic'

export const metadata = {
  title: 'About — My Gallery',
}

export default async function AboutPage() {
  const about = await getAbout()

  if (!about) {
    return (
      <div className="container-page py-16">
        <h1 className="font-serif text-4xl text-ink">About</h1>
        <p className="text-ink-soft mt-4">No about information available yet.</p>
      </div>
    )
  }

  const profilePhoto = about.metadata?.profile_photo
  const fullName = getMetafieldValue(about.metadata?.full_name) || about.title
  const bio = getMetafieldValue(about.metadata?.bio)
  const email = getMetafieldValue(about.metadata?.email)
  const location = getMetafieldValue(about.metadata?.location)

  return (
    <div className="container-page py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-1">
          {profilePhoto ? (
            <img
              src={`${profilePhoto.imgix_url}?w=800&h=800&fit=crop&auto=format,compress`}
              alt={fullName}
              width={400}
              height={400}
              className="w-full rounded-2xl object-cover aspect-square"
            />
          ) : (
            <div className="w-full aspect-square rounded-2xl bg-ink/10" />
          )}
        </div>
        <div className="md:col-span-2">
          <h1 className="font-serif text-4xl text-ink">{fullName}</h1>
          {location && (
            <p className="text-accent mt-2 uppercase tracking-wide text-sm">{location}</p>
          )}
          {bio && (
            <p className="mt-6 text-ink-soft leading-relaxed whitespace-pre-line">{bio}</p>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="inline-block mt-8 px-6 py-3 bg-ink text-cream rounded-full text-sm font-medium hover:bg-accent transition-colors"
            >
              Get in touch
            </a>
          )}
        </div>
      </div>
    </div>
  )
}