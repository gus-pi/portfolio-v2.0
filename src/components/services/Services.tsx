import { motion, stagger, useInView } from 'motion/react';
import './services.scss';
import { useRef } from 'react';

const variants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            delayChildren: stagger(0.1),
        },
    },
};

const Services = () => {
    const ref = useRef<HTMLDivElement>(null);

    const isInView = useInView(ref, { margin: '-100px' });

    return (
        <motion.div
            className="services"
            variants={variants}
            initial="initial"
            // animate="animate"
            // whileInView="animate"
            ref={ref}
            animate={isInView && 'animate'}
        >
            <motion.div className="textContainer" variants={variants}>
                <p>
                    Let me help you with achieve your ideas <br /> and move forward
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1>
                        <motion.b whileHover={{ color: 'orange' }}>Unique</motion.b> Ideas
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{ color: 'orange' }}>For Your</motion.b> Business.
                    </h1>
                    <button>WHAT CAN I DO FOR YOU?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div
                    className="box"
                    whileHover={{ background: 'lightgray', color: 'black' }}
                >
                    <h2>branding</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad aliquid
                        perferendis laudantium id illum dolores sunt, ea dolor impedit quam aliquam
                        consequuntur veniam esse dolorem alias assumenda. Molestias, maiores eaque.
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div
                    className="box"
                    whileHover={{ background: 'lightgray', color: 'black' }}
                >
                    <h2>branding</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad aliquid
                        perferendis laudantium id illum dolores sunt, ea dolor impedit quam aliquam
                        consequuntur veniam esse dolorem alias assumenda. Molestias, maiores eaque.
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div
                    className="box"
                    whileHover={{ background: 'lightgray', color: 'black' }}
                >
                    <h2>branding</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad aliquid
                        perferendis laudantium id illum dolores sunt, ea dolor impedit quam aliquam
                        consequuntur veniam esse dolorem alias assumenda. Molestias, maiores eaque.
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div
                    className="box"
                    whileHover={{ background: 'lightgray', color: 'black' }}
                >
                    <h2>branding</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad aliquid
                        perferendis laudantium id illum dolores sunt, ea dolor impedit quam aliquam
                        consequuntur veniam esse dolorem alias assumenda. Molestias, maiores eaque.
                    </p>
                    <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};
export default Services;
