import Hero from "./Hero/Hero";
import About from "./About/About";



export default function Main () {
    return (
        <main>
            <div className="main__container">
                <Hero/>
            </div>
            <section id='about'>
                <About/>
            </section>
        </main>
    )
}