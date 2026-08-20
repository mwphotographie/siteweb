const parcours = [
  {
    year: '2016',
    text: "Premier boîtier argentique hérité d'un grand-père mécanicien — un Praktica MTL5, encore utilisé aujourd'hui.",
  },
  {
    year: '2019',
    text: "Études de lettres à Grenoble ; la photographie devient un carnet parallèle, publié sous forme de zines auto-édités.",
  },
  {
    year: '2021',
    text: 'Premier reportage documentaire, sur les commerces de quartier du Vieux Grenoble menacés de fermeture.',
  },
  {
    year: '2023',
    text: "Exposition collective « Chambre claire » à la Galerie Vog — série de portraits en lumière naturelle.",
  },
  {
    year: '2025',
    text: 'Ouverture de l’atelier Argentique, entre commandes de portraits et projets personnels de rue.',
  },
]

const materiel = [
  { cat: 'Boîtier principal', val: 'Fujifilm X-T5' },
  { cat: 'Boîtier argentique', val: 'Praktica MTL5, 1978' },
  { cat: 'Optique de prédilection', val: '35mm ƒ/1.4' },
  { cat: 'Pellicule favorite', val: 'Kodak Portra 400' },
  { cat: 'Développement', val: 'Labo maison, tirage argentique' },
]

export default function About() {
  return (
    <div className="page page--about">
      <section className="about-hero">
        <div className="about-hero__portrait">
          <img
            src="https://picsum.photos/seed/argentique-portrait/900/1100"
            alt="Portrait de Lou Berthier, appareil photo à la main"
          />
        </div>
        <div className="about-hero__text">
          <p className="eyebrow">À propos</p>
          <h1>Lou Berthier</h1>
          <p className="lede">
            Photographe indépendante basée à Grenoble. Je fais de la rue, du
            portrait et du paysage en essayant de garder la même honnêteté
            qu'un négatif : ce que la lumière donne, sans trop lui demander.
          </p>
        </div>
      </section>

      <section className="philosophy">
        <h2>Démarche</h2>
        <div className="philosophy__grid">
          <p>
            Je travaille lentement. La plupart de mes séries commencent en
            argentique, où chaque déclenchement coûte quelque chose — ce qui
            m'oblige à regarder avant de photographier, et pas l'inverse.
          </p>
          <p>
            Le numérique me sert ensuite pour les commandes et les portraits,
            mais garde le même réflexe : peu de retouche, une seule prise
            retenue par scène plutôt qu'une rafale.
          </p>
        </div>
      </section>

      <section className="parcours">
        <h2>Parcours</h2>
        <ol className="timeline">
          {parcours.map((p) => (
            <li className="timeline__item" key={p.year}>
              <span className="timeline__year">{p.year}</span>
              <p className="timeline__text">{p.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="materiel">
        <h2>Matériel</h2>
        <dl className="specs">
          {materiel.map((m) => (
            <div className="specs__row" key={m.cat}>
              <dt>{m.cat}</dt>
              <dd>{m.val}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="cta">
        <h2>Discutons de votre projet</h2>
        <a className="button" href="mailto:contact@argentique-studio.fr">
          contact@argentique-studio.fr
        </a>
      </section>
    </div>
  )
}
