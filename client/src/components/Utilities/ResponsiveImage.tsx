import { defaultImageShort } from "@/lib/defaults";
type ResponsiveImageProps = {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  aspectRatio?: number;
  loading?: 'lazy' | 'eager'
}

const ResponsiveImage = ({ src = defaultImageShort, width, height, aspectRatio, alt, loading = 'lazy' }:ResponsiveImageProps )=> {
  const cloudinaryBaseUrl = 'https://res.cloudinary.com/dzqcxevcq/image/upload/';

  const imgWidth = width !==undefined ? `w_${width}` : `w_auto`
  const imgHeight = height !== undefined ? `,h_${height}` : '';
  const imgSize = aspectRatio !== undefined ? `,ar_${aspectRatio},c_fill` : '';

  const transformations = `${imgWidth}${imgSize}${imgHeight},f_auto,q_auto`;

  const imageUrl = `${cloudinaryBaseUrl}${transformations}/${src}`;

  return (
    <img
      src={imageUrl}
      alt={alt}
      loading={loading}
      style={{ maxWidth: '100%', height: 'auto' }}
    />
  );
};

export default ResponsiveImage;
