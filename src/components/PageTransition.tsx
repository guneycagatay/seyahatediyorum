'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
                duration: 0.6,
                ease: [0.165, 0.84, 0.44, 1]
            }}
            onAnimationComplete={() => window.scrollTo(0, 0)}
        >
            {children}
        </motion.div>
    );
}
