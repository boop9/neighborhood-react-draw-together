import { GalleryData } from "./GalleryData";

interface Props {
  children: React.ReactNode;
}

const Gallery = ({ children }: Props) => {
  return (
    <>
      <h1 className="gallery-heading">{children}</h1>
      <main className="filterable-content-gallery-container">
        {GalleryData.map((item, index) => (
          <div className={item.cName} key={index}>
            <div className="thumbnail">{item.thumbnail}</div>

            <div className="gallery-item-description">
              <span className="gallery-item-name">{item.title}</span>
              <span className="gallery-item-last-played"></span>
            </div>
          </div>
        ))}
      </main>
    </>
  );
};

export default Gallery;
