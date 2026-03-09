import homepage from './homepage.png';
import './Home.css';

function Home() {
  return (
    <div>
      <img src={homepage} alt="Homepage" style={{ width: '100%', maxWidth: '600px', height: 'auto', marginBottom: '2rem' }} />
      <h1>CNC Restoration</h1>
      <p> When our engineering teacher left, the school's CNC machine broke and all document
ation was lost. I taught myself operations from scratch, repaired it, and built sustainable knowledge
transfer systems.
        </p>
    </div>
  );
}

export default Home;
