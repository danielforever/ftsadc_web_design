import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import './Modal.css';
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";


export default function Modal( {selected, setSelected}) {
    let iconStyles = { color: "#c3d1d9", fontSize: "1em", marginRight: '30px' };

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
                <img src={selected.url} alt='member_image' />

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
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {selected.linkedin && (
                            <Link
                                className='personal-social-icon-link linkedin'
                                to={selected.linkedin}
                                target='_blank'
                                aria-label='LinkedIn'
                            >
                                <FaLinkedin style={iconStyles}  />
                            </Link>
                        )}
                        {selected.instagram && (
                            <Link
                                className='personal-social-icon-link linkedin'
                                to={selected.instagram}
                                target='_blank'
                                aria-label='Instagram'
                            >
                                <FaInstagram style={iconStyles} />
                            </Link>
                        )}
                        {selected.email && (
                            <Link
                                className='personal-social-icon-link linkedin'
                                to={`mailto:${selected.email}`}
                                target='_blank'
                                aria-label='Email'
                            >
                                <HiOutlineMail style={iconStyles} />
                            </Link>
                        )}
                    </div>


                    {/* <button className="btn btn-primary btn-block" onClick={() => window.open(`${selected.out}`, '_blank')}>{selected.out_name}</button> */}
                </motion.div>
            </div>
        </div>
    );
}
