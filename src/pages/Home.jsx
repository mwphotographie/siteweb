import { Link } from 'react-router-dom'
import ExifCaption from '../components/ExifCaption.jsx'

const works = [
  {
    id: 1,
    title: 'Lignes de quai',
    place: 'Gare de Lyon-Perrache',
    img: 'https://picsum.photos/seed/argentique-01/1000/1250',
    aperture: '2.8',
    shutter: '1/250',
    iso: 200,
    focal: 35,
  },
  {
    id: 2,
    title: 'Brume sur le Vercors',
    place: 'Massif du Vercors',
    img: 'https://picsum.photos/seed/argentique-02/1000/750',
    aperture: '8',
    shutter: '1/125',
    iso: 100,
    focal: 50,
  },
  {
    id: 3,
    title: 'Portrait — Aïcha',
    place: 'Atelier, Grenoble',
    img: 'https://picsum.photos/seed/argentique-03/1000/1250',
    aperture: '1.8',
    shutter: '1/200',
    iso: 400,
    focal: 85,
  },
  {
    id: 4,
    title: 'Étal du marché',
    place: 'Les Halles Sainte-Claire',
    img: 'https://picsum.photos/seed/argentique-04/1000/750',
    aperture: '4',
    shutter: '1/320',
    iso: 200,
    focal: 28,
  },
  {
    id: 5,
    title: 'Escalier en colimaçon',
    place: 'Vieille ville, Annecy',
    img: 'https://picsum.photos/seed/argentique-05/1000/1250',
    aperture: '5.6',
    shutter: '1/60',
    iso: 800,
    focal: 24,
  },
  {
    id: 6,
    title: 'Lumière de fin de service',
    place: 'Café des Arts',
    img: 'https://picsum.photos/seed/argentique-06/1000/750',
    aperture: '2',
    shutter: '1/100',
    iso: 640,
    focal: 50,
  },
]

export default function Home() {
  return (
    <div className="page page--home">
      <section className="hero">
        <img
          className="hero__img"
          src="https://picsum.photos/seed/argentique-hero/1800/1100"
          alt="Ruelle éclairée par une lumière rasante, silhouette au loin"
        />
        <div className="hero__overlay" />
        <div className="hero__content">
          <p className="eyebrow">Portfolio &amp; carnet de rue</p>
          <h1 className="hero__title">
            Voir la lumière
            <br />
            avant qu'elle ne parte
          </h1>
          <p className="hero__sub">
            Photographies argentiques et numériques de Lou Berthier — rue, portrait
            et paysage, entre Grenoble et les Alpes.
          </p>
          <span className="hero__exif">ƒ/2.8 · 1/250s · ISO 200 · 35mm</span>
        </div>
      </section>

      <section className="intro">
        <p>
          Chaque image de cette série est légendée comme un négatif : ouverture,
          vitesse, sensibilité, focale. Ce ne sont pas des détails techniques
          gratuits — ce sont les décisions prises sur le moment, celles qui
          fabriquent une lumière plutôt qu'une autre.
        </p>
      </section>

      <section className="gallery" aria-label="Sélection de travaux">
        <div className="gallery__head">
          <h2>Travaux récents</h2>
          <Link to="/a-propos" className="text-link">
            La démarche →
          </Link>
        </div>
        <div className="gallery__grid">
          {works.map((w) => (
            <figure className="gallery__item" key={w.id}>
              <div className="gallery__frame">
                <img src={w.img} alt={w.title} loading="lazy" />
              </div>
              <ExifCaption {...w} />
            </figure>
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>Un projet, un reportage, une envie de portrait ?</h2>
        <a className="button" href="mailto:contact@argentique-studio.fr">
          Écrire à l'atelier
        </a>
      </section>
    </div>
  )
}
