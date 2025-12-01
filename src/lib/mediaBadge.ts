const MEDIA_BADGE_CLASSES: Record<string, string> = {
  article: 'bg-secondary text-secondary-content',
  audio: 'bg-accent text-accent-content',
  video: 'bg-primary text-primary-content',
};

export const getMediaBadgeClass = (mediaType?: string): string => {
  if (!mediaType) {
    return MEDIA_BADGE_CLASSES.article;
  }
  const key = mediaType.toLowerCase();
  return MEDIA_BADGE_CLASSES[key] ?? MEDIA_BADGE_CLASSES.video;
};

export default getMediaBadgeClass;
