import { useRef } from 'react';
import { motion } from 'motion/react';

export default function MotionOnly() {
    const containerRef = useRef(null);

    return (
        <div
            ref={containerRef}
            className='h-fit w-fit relative flex justify-center items-center'
        >
            <h3 className='text-3xl text-white font-mono relative z-0'>
                I will be free
            </h3>

            <motion.div
                initial={{ scaleX: 1 }}
                whileInView={{ scaleX: 0, transformOrigin: 'right' }}
                viewport={{ margin: '0px 0px -100px 0px' }}
                className={`bg-indigo-300 absolute inset-0 duration-300 `}
            />
        </div>
    );
}
