interface LogoProps {
  url: string;
  alt: string;
  title: string;
}

export const Logo = ({ url, alt, title }: LogoProps) => {
  return (
    <a href={url} className="flex items-center gap-2" aria-label={alt}>
      <span className="text-lg font-semibold">{title}</span>
    </a>
  );
};
