'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="preloader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="brand"
                        style={{ fontSize: '2rem', fontWeight: 900 }}
                    >
                        <span style={{
                            width: '12px',
                            height: '12px',
                            background: '#6366f1',
                            borderRadius: '50%',
                            display: 'inline-block',
                            marginRight: '12px',
                            boxShadow: '0 0 20px #6366f1'
                        }} />
                        SEYAHAT EDİYORUM
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
