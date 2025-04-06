import { motion } from "framer-motion";

export default function Keyframes() {
    return (
        <motion.div
            animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
            }}
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 250,
                height: 250,
                backgroundColor: "red",
                zIndex: 1000, // behind popup content but above the overlay
                opacity: 0.6,
            }}
        />

    );
}

/**
 * ==============   Styles   ================
 */

const box = {
    width: 100,
    height: 100,
    backgroundColor: "red", // Red animation color
    borderRadius: 5,
};

const backgroundAnimation = {
    position: "absolute", // Position it absolutely behind other elements
    top: 0,
    left: 0,
    width: "50vw",
    height: "50vh",
    backgroundColor: "red", // Animation background color
    zIndex: -1, // Make sure it's behind the content
};
