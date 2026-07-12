# My Gallery

![App Preview](https://imgix.cosmicjs.com/7c623860-7df4-11f1-b03b-3935cdd0e0e8-autopilot-photo-1500648767791-00dcc994a43e-1783862443680.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A beautiful, modern photography portfolio built with Next.js and [Cosmic](https://www.cosmicjs.com). Showcase your photo galleries, curated collections, an about section, and client testimonials — all managed through your Cosmic bucket.

## Features

- 🏠 Elegant homepage with hero, featured collections, photo highlights, and testimonials
- 📚 Collections gallery with individual collection detail pages
- 🖼️ Full photo grid with lightbox-style detail pages
- 👤 About page with bio, profile photo, and contact details
- 💬 Client testimonials section with photos and quotes
- 📱 Fully responsive, mobile-first design
- ⚡ Server-rendered with optimized imgix images
- 🎨 Clean, minimal aesthetic focused on the imagery

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a53946967f2f6a3f805b864&clone_repository=6a53954367f2f6a3f805b89b)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a photography portfolio with photo galleries, collections, an about section, and client testimonials.
>
> User instructions: ブログ作成時の写真素材"

### Code Generation Prompt

> Build a Next.js application for a creative portfolio called "My Gallery". The content is managed in Cosmic CMS with the following object types: collections, photos, about, testimonials. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions: ブログ作成時の写真素材

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Cosmic](https://www.cosmicjs.com/docs)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A Cosmic account with a bucket containing collections, photos, about, and testimonials object types

### Installation

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Set the following environment variables (these are provided automatically in Cosmic):

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all photos with connected collection data
const response = await cosmic.objects
  .find({ type: 'photos' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

const photos = response.objects
```

## Cosmic CMS Integration

This app reads from four object types in your Cosmic bucket:

- **collections** — `name`, `description`, `cover_image`
- **photos** — `title`, `image`, `description`, `collection` (connected object)
- **about** — `full_name`, `bio`, `profile_photo`, `email`, `location`
- **testimonials** — `client_name`, `company`, `quote`, `photo`

Learn more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

- **Vercel**: Import the repo, add the environment variables, and deploy.
- **Netlify**: Connect the repo, set env vars, and deploy.

Set `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, and `COSMIC_WRITE_KEY` in your hosting platform's dashboard.
<!-- README_END -->