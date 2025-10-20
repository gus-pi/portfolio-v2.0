import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import './portfolio.scss';
import { useRef } from 'react';

const items = [
    {
        id: 1,
        title: 'events',
        img: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima omnis earum quo laborum dolor nesciunt repellat excepturi, qui ad suscipit veritatis optio atque tempora nemo sunt a, quas est ducimus.',
    },
    {
        id: 2,
        title: 'bookshelf',
        img: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima omnis earum quo laborum dolor nesciunt repellat excepturi, qui ad suscipit veritatis optio atque tempora nemo sunt a, quas est ducimus.',
    },
    {
        id: 3,
        title: 'finance',
        img: 'https://images.pexels.com/photos/585292/pexels-photo-585292.jpeg',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima omnis earum quo laborum dolor nesciunt repellat excepturi, qui ad suscipit veritatis optio atque tempora nemo sunt a, quas est ducimus.',
    },
    {
        id: 4,
        title: 'pet hotel',
        img: 'https://images.pexels.com/photos/731022/pexels-photo-731022.jpeg',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima omnis earum quo laborum dolor nesciunt repellat excepturi, qui ad suscipit veritatis optio atque tempora nemo sunt a, quas est ducimus.',
    },
];

const SingleSection = ({
    item,
}: {
    item: { id: number; title: string; img: string; description: string };
}) => {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({ target: ref });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>

                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Portfolio = () => {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({ target: ref, offset: ['end end', 'start start'] });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Work</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <SingleSection item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Portfolio;
