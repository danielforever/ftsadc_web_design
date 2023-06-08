import React from 'react';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './Modal.css';

export default function Modal( {selected, setSelected}) {

    if (!selected) {
        return <></>;
    }

    return (
        <div 
            onClick={ ()=> setSelected(null)}
            className='fixed inset-0 bg-back/50 z-50 cursor-pointer overflow-y-scroll'
        >

            <div 
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-[700px] mx-auto my-8 px-8 cursor-default"
            >

                <motion.div layoutId={`card-${selected.id}`}>
                <div>
                <div className="text-right text-4xl" onClick={()=> setSelected(null)} >
                    <ion-icon name="close"></ion-icon>
                </div>
                <img src={selected.url} />

                </div>
                    
                </motion.div>
                <motion.div
                initial= {{
                    opacity: 0,
                    y: 50,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.5,
                }}
                className="bg-white p-4"
                >
                    <h3 className='text-2xl font-bold mb-2'>{selected.school}</h3>
                    <h3 className='text-2xl font-bold mb-2'>{selected.major}</h3>
                    <p className="my-4">{selected.song}</p>
                    <p className="my-4" style={{"white-space": "break-spaces"}}>{selected.description}</p>
                    <Link
                        class='personal-social-icon-link linkedin'
                        to={selected.out}
                        target='_blank'
                        aria-label='LinkedIn'
                    >
                        <i class='fab fa-linkedin' />
                    </Link>
                    {/* <button className="btn btn-primary btn-block" onClick={() => window.open(`${selected.out}`, '_blank')}>{selected.out_name}</button> */}
                </motion.div>
            </div>
        </div>
    );
}
