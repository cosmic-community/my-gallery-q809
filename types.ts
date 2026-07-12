// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, unknown>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Cosmic file/image metafield shape
export interface CosmicImage {
  url: string;
  imgix_url: string;
}

// Collections
export interface Collection extends CosmicObject {
  type: 'collections';
  metadata: {
    name?: string;
    description?: string;
    cover_image?: CosmicImage;
  };
}

// Photos
export interface Photo extends CosmicObject {
  type: 'photos';
  metadata: {
    title?: string;
    image?: CosmicImage;
    description?: string;
    collection?: Collection;
  };
}

// About
export interface About extends CosmicObject {
  type: 'about';
  metadata: {
    full_name?: string;
    bio?: string;
    profile_photo?: CosmicImage;
    email?: string;
    location?: string;
  };
}

// Testimonials
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    client_name?: string;
    company?: string;
    quote?: string;
    photo?: CosmicImage;
  };
}

// Cosmic API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}