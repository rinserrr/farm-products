import About from '../../blocks/about/about';
import Features from '../../blocks/features/features';


function MainPage({products}) {
  return (
    <>
      <main>

        <About />
        <Features products={products} />

      </main>
    </>
  );
}


export default MainPage;
