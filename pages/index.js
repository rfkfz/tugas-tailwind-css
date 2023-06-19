import NavBar from '../components/NavBar';
import Card from '../components/Card';
import Footer from '../components/Footer';
import SocialIcon from '../components/SocialIcon';

export default function Home() {
  return (
    <div>
      <NavBar />
      <section id="about" className="text-white h-screen bg-cyan-600 text-center flex">
        <div className="m-auto">
          <h1 className="m-auto font-waterfall text-7xl text-white font-bold">About</h1>
          <h1 className="m-auto font-sans text-3xl text-white font-bold">
            Tugas Taiwind CSS membuat minimal 3 komponen. <br />
            Disini saya membuat 5 komponen Card, Button, Footer, NavBar dan SocialIcon.
          </h1>
        </div>
      </section>
      <section id="pengalaman" className="text-white h-screen bg-purple-900 flex">
        <div className="m-auto">
          <h1 className="font-waterfall text-7xl text-white font-bold">Pengalaman</h1>
          <div className="mt-8">
            <Card title="Card" content="Tailwind CSS" />
          </div>
        </div>
      </section>
      <section id="contact" className="text-white h-screen bg-black text-center flex">
        <div className="m-auto">
          <h1 className="m-auto font-waterfall text-7xl text-white font-bold">Contact</h1>
          <div className="mt-8">
            <SocialIcon />
          </div>
        </div>
      </section>
      <section id="projects" className="text-white h-screen bg-purple-900 flex">
        <div className="m-auto">
          <h1 className="font-waterfall text-7xl text-white font-bold">Projects</h1>
          <div className="mt-8">
            <Card title="Card" content="Tailwind CSS" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
