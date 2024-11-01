/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const MyMotion = ({ children, x, y, delay }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: x || 0, y: y || 0 },
        visible: { opacity: 1, x: 0, y: 0 },
      }}
      viewport={{ once: true }}
      initial="hidden"
      whileInView="visible"
      transition={{ delay: delay || 0.2, type: "spring", stiffness: 70 }}
    >
      {children}
    </motion.div>
  );
};

export default MyMotion;
