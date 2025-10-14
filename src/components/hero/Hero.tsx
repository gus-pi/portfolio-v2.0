import { stagger } from 'motion';
import './hero.scss';
import { motion, type Variants } from 'motion/react';

const textVariants: Variants = {
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
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 1.5,
            repeat: Infinity,
        },
    },
};

const sliderVariants: Variants = {
    initial: {
        x: 0,
    },
    animate: {
        x: '-220%',
        transition: {
            duration: 20,
            repeat: Infinity,
            repeatType: 'mirror',
        },
    },
};

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div
                    className="textContainer"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2 variants={textVariants}>GUSTAVO PINEDO</motion.h2>
                    <motion.h1 variants={textVariants}>Web developer and 3D artist</motion.h1>
                    <motion.div className="button" variants={textVariants}>
                        <motion.button variants={textVariants}>See my Lastest Works</motion.button>
                        <motion.button variants={textVariants}>Contact Me</motion.button>
                    </motion.div>
                    <motion.img
                        src="/scroll.png"
                        alt=""
                        variants={textVariants}
                        animate="scrollButton"
                    />
                </motion.div>
            </div>
            <motion.div
                className="slidingTextContainer"
                variants={sliderVariants}
                initial="initial"
                animate="animate"
            >
                Developer Artist Creator
            </motion.div>
            <div className="imageContainer">
                <img src="/hero.png" alt="hero image" />
            </div>
        </div>
    );
};

export default Hero;
