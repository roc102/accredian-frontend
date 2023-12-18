import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import defaultprofile from '../assets/defaultProfile.png';
import axios from 'axios';

const Mentor = () => {

    const [subscribedMentors, setSubscribedMentors] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = localStorage.getItem('data');
                const id = JSON.parse(data).id;

                const res = await axios.get(`http://127.0.0.1:5001/StudentById/${id}`);
                const response = res.data.data;
                // Remove last and first character of string
                const newResponse = response.slice(1, -1);
                const newResponse1 = JSON.parse(newResponse);

                const mentors = await Promise.all(
                    newResponse1.mentors.map(async (mentorId) => {
                        try {
                            const mentorRes = await axios.get(`http://127.0.0.1:5001/MentorById/${mentorId}`);
                            const mentorData = mentorRes.data.data;
                            // Remove last and first character of string
                            const cleanedMentorData = JSON.parse(mentorData.slice(1, -1));
                            return cleanedMentorData;
                        } catch (error) {
                            console.error(`Error fetching mentor data for id ${mentorId}:`, error);
                            return null; // Handle errors gracefully, returning null or an empty object
                        }
                    })
                );

                console.log(mentors);
                setSubscribedMentors(mentors.filter(Boolean)); // Remove any null values
            } catch (error) {
                console.error('Error fetching student data:', error);
            }
        };

        fetchData();

       
    }, []);



    const [allMentors, setAllMentors] = useState([]);


    useEffect(() => {
        axios.get('http://127.0.0.1:5001/getMentor')
            .then(async (res) => {
                setAllMentors(JSON.parse(res.data));
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    



    const [selectedMentor, setSelectedMentor] = useState(null);

    const openModal = (mentor) => {
        setSelectedMentor(mentor);
    };

    const closeModal = () => {
        setSelectedMentor(null);
    };

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.keyCode === 27) {
                closeModal();
            }
        };

        window.addEventListener('keydown', handleEscape);

        return () => {
            window.removeEventListener('keydown', handleEscape);
        };

    }, []);

    return (
        <div className='bg-gray-100 min-h-screen p-8 mt-16'>
            <h1 className="text-4xl font-bold mb-8 text-gray-800">Subscribed  Mentor's</h1>
            <div className="flex flex-wrap -mx-4">
                {subscribedMentors.map((mentor, index) => (
                    <motion.div
                        key={index}
                        className="bg-blue-200 p-4 rounded-md shadow-md max-w-xs mx-4 mb-8"
                        whileHover={{ scale: 1.05, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 0.3 }}    
                    >
                        <div className='flex flex-row justify-around'>
                            <h2 className="text-lg font-bold mb-2 text-blue-800">{mentor.first_name + " "}{mentor.last_name}</h2>
                        </div>
                        <img
                            className="w-full h-40 mb-4 object-cover rounded"
                            src={defaultprofile}
                            alt={mentor.first_name}
                        />
                        <p className="text-indigo-600 text-xs mb-4">UserName : {mentor.username}</p>
                        <ul className="flex flex-wrap mb-4">
                            {mentor.roles.map((tag, index) => (
                                <li key={index} className="text-indigo-600 text-xs mr-2 mb-2">{tag}</li>
                            ))}
                        </ul>
                        <div className="flex justify-center">
                            
                            <motion.button
                                className="bg-blue-900 text-white px-3 py-2 rounded-md text-sm flex-shrink-0 transition-transform"
                                whileHover={{ scale: 1.05 }}
                                onClick={() => openModal(mentor)}
                            >
                                Complete Profile
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </div>

            <h1 className="text-4xl font-bold mb-8 text-gray-800">All Mentor's</h1>
            <div className="flex flex-wrap -mx-4">
                {allMentors.map((mentor, index) => (
                    <motion.div
                        key={index}
                        className="bg-blue-200 p-4 rounded-md shadow-md max-w-xs mx-4 mb-8"
                        whileHover={{ scale: 1.05, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className='flex flex-row justify-around'>
                            <h2 className="text-lg font-bold mb-2 text-blue-800">{mentor.first_name + " "}{mentor.last_name}</h2>
                        </div>
                        <img
                            className="w-full h-40 mb-4 object-cover rounded"
                            src={defaultprofile}
                            alt={mentor.first_name}
                        />
                        {/* username */}
                        <p className="text-indigo-600 text-xs mb-4">UserName : {mentor.username}</p>
                        <ul className="flex flex-wrap mb-4">
                            {mentor.roles.map((tag, index) => (
                                <li key={index} className="text-indigo-600 text-xs mr-2 mb-2">{tag}</li>
                            ))}
                        </ul>
                        <div className="flex space-x-2">
                            <motion.button
                                className="bg-blue-900 text-white px-3 py-2 rounded-md text-sm flex-shrink-0 transition-transform"
                                whileHover={{ scale: 1.05 }}
                            >
                                Subscribe
                            </motion.button>
                            <motion.button
                                className="bg-blue-900 text-white px-3 py-2 rounded-md text-sm flex-shrink-0 transition-transform"
                                whileHover={{ scale: 1.05 }}
                                onClick={() => openModal(mentor)}
                            >
                                Complete Profile
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {selectedMentor && (
                <motion.div
                    className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="bg-white p-8 rounded-md shadow-md max-w-2xl"
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.5 }}
                    >
                        <div className="flex justify-end">
                            <motion.button
                                className="text-gray-700 text-sm transition-transform border border-gray-700 rounded-full w-6 h-6 flex items-center justify-center m-2"
                                whileHover={{ scale: 1.1 }}
                                onClick={closeModal}
                            >
                                X
                            </motion.button>
                        </div>
                        <div className='flex flex-row'>
                            <div>
                                <img
                                    className="w-full h-40 mb-4 object-cover rounded p-3 h-60 w-40"
                                    src={defaultprofile}
                                    alt={selectedMentor.first_name}
                                />
                            </div>
                            <div className='m-3'>

                                <h2 className="text-2xl font-bold mb-4 text-gray-800">Hi, I am {selectedMentor.first_name}</h2>
                                <p className="text-gray-700 mb-4 text-sm">{selectedMentor.summary}</p>
                                <ul className="flex flex-wrap mb-4">
                                    {selectedMentor.roles.map((tag, index) => (
                                        <li key={index} className="text-indigo-600 text-xs mr-2 mb-2">{tag}</li>
                                    ))}
                                </ul>
                                <p>Followers: {selectedMentor.followers.length}</p>
                                <p>Following: {selectedMentor.following.length}</p>
                                <p className="text-gray-700 mb-4 text-sm">{selectedMentor.email}</p>
                            </div>
                        </div>

                        {/* achievements */}
                        <div className='flex flex-row'>
                            {selectedMentor.achievements && selectedMentor.achievements.length > 0 && (
                                <div className='m-3'>
                                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Achievements</h2>
                                    {selectedMentor.achievements.map((achievement, index) => (
                                        <p className="text-gray-700 mb-4 text-sm" key={index}>{achievement}</p>
                                    ))}
                                </div>
                            )}
                        </div>


                    </motion.div>
                </motion.div>
            )}
        </div>
    );
};

export default Mentor;