import { stagger } from 'motion';
import { motion } from 'motion/react';

const variants = {
    open: {
        transition: {
            delayChildren: stagger(0.1),
        },
    },
    closed: {
        transition: {
            delayChildren: stagger(0.05, { from: 'last' }),
        },
    },
};

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 50,
        opacity: 0,
    },
};

const items = ['Homepage', 'Services', 'Portfolio', 'Contact', 'About'];

const Links = () => {
    return (
        <motion.div className="links" variants={variants}>
            {items.map((item) => (
                <motion.a
                    href={`#${item}`}
                    key={item}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {item}
                </motion.a>
            ))}
        </motion.div>
    );
};
export default Links;
