export default function ExifCaption({ title, place, aperture, shutter, iso, focal }) {
  return (
    <div className="exif">
      <div className="exif__title">
        <span>{title}</span>
        <span className="exif__place">{place}</span>
      </div>
      <div className="exif__data">
        <span>ƒ/{aperture}</span>
        <span>{shutter}s</span>
        <span>ISO {iso}</span>
        <span>{focal}mm</span>
      </div>
    </div>
  )
}
