import Footer from 'components/Footer';
import SharedLayout from 'components/SharedLayout';
import Header from 'components/Header';
import Hero from 'components/Hero';

const App = () => { 
  return (
    <>
      <Header />
      <SharedLayout>
        <Hero></Hero>
      </SharedLayout>
      <Footer />
    </>
  );
}

export default App;