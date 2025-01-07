import { useRef } from 'react';
import { useInView } from 'motion/react';

export default function UseInViewHook() {
    const containerRef = useRef(null);
    const inView = useInView(containerRef, { margin: '-250px', once: true });

    return (
        <div
            className='h-40 w-96 relative flex justify-center items-center'
            ref={containerRef}
        >
            <h3 className='text-3xl text-white font-mono relative z-0'>
                I will be free
            </h3>

            <div
                className={`bg-indigo-300 absolute top-0 left-0 bottom-0 right-2/3 duration-300 ${
                    inView ? '-translate-y-full' : ''
                }`}
            ></div>
        </div>
    );
}
