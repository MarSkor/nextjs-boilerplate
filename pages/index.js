import { PerPageTitle } from "../components/layout"
import { Hero } from "../components/home";

const Home = () => {
  return (
    <>
    <PerPageTitle
    title="Home"
    description="This is the home page"
    keywords="home, page"
    author="Lorem Ipsum"
    />
    <main className="content__wrapper">
      {/* content here */}
      <section className="content__hero">
        <Hero/>
      </section>
    </main>
    </>
  )
}

export default Home