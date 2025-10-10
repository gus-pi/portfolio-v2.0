import './app.scss';
import Navbar from './component/Navbar';

const App = () => {
    return (
        <div>
            <section>
                <Navbar />
            </section>
            <section>parallax</section>
            <section>services</section>
            <section>portfolio1</section>
            <section>portfolio2</section>
            <section>portfolio3</section>
            <section>contact</section>
        </div>
    );
};

export default App;
