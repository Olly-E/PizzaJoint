import React from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import { Link } from 'react-router-dom';

const backdropVariant = {
    hidden: {
        opacity: 0
    },
    visible:  {
        opacity: 1,
    }
}

const modal = {
    hidden: {
        y: '-100vh',
        opacity: 0
    }, 
    visible: {
        y: '200px',
        opacity: 1,
        transition: {delay: 0.5}
    }
}


const Modal = ({showModal}) => {
  return (
      <AnimatePresence exitBeforeEnter>
         {showModal && (<motion.div className='backdrop'
            variants={backdropVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div className='modal'
                variants={modal}
            >
                <p>Want to make another pizza</p>
                <Link to="/">
                    <button>Start Again</button>
                </Link>            
            </motion.div>
          </motion.div>)}
      </AnimatePresence>
    
  );
}

export default Modal;
