import { LandingPreview } from './LandingPreview';

export function LandingList({ landings }) {
  return (
    <section className='landing-list'>
      {landings.map((landing) => (
        <LandingPreview landing={landing} key={landing.id} />
      ))}
    </section>
  );
}
