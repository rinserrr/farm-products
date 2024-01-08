import About from '../../blocks/about/about';
import Features from '../../blocks/features/features';


function MainPage({products}) {
  return (
    <>
      <main>

        <About />
        <Features products={products} />

        <img width={44} height={44} src="1.png" alt="" />

      </main>
    </>
  );
}

export default MainPage;
