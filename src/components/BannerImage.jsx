// src/components/BannerImage.jsx
import './BannerImage.css';

export function BannerImage() {
  return (
    <div className="banner-image">
      <img
        src="/banner.jpg"      // картинка из папки public
        alt="Секонд Синица"
      />
    </div>
  );
}