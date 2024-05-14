import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { FaHouseChimney } from 'react-icons/fa6';
import { IoMdPerson } from 'react-icons/io';
import { SlEmotsmile } from 'react-icons/sl';
import { SlCalender } from 'react-icons/sl';
import './numbers.css';

const Numbers = () => {
  const [counterOn, setCounterOn] = useState(false);
  const [countingStates, setCountingStates] = useState([
    false,
    false,
    false,
    false,
  ]);

  const handleEnter = () => {
    setCounterOn(true);
    setCountingStates([true, true, true, true]);
  };

  const handleExit = () => {
    setCounterOn(false);
    setCountingStates([false, false, false, false]);
  };
  return (
    <ScrollTrigger onEnter={handleEnter} onExit={handleExit}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          backgroundColor: 'black',
          padding: '100px 0px',
        }}
      >
        <div className='overall-container'>
          <div className='with-icon'>
            <FaHouseChimney />
          </div>
          <div className='without-icon'>
            <div className='number'>
              {countingStates[0] && (
                <h1>
                  <CountUp start={0} end={3468} duration={2} delay={0} />
                </h1>
              )}
            </div>
            <div className='topic-number'>Hospital Rooms</div>
          </div>
        </div>
        <div className='overall-container'>
          <div className='with-icon'>
            <IoMdPerson />
          </div>
          <div className='without-icon'>
            <div className='number'>
              {countingStates[1] && (
                <h1>
                  <CountUp start={0} end={557} duration={2} delay={0} />
                </h1>
              )}
            </div>
            <div className='topic-number'>Specialist Doctors</div>
          </div>
        </div>
        <div className='overall-container'>
          <div className='with-icon'>
            <SlEmotsmile />
          </div>
          <div className='without-icon'>
            <div className='number'>
              {countingStates[2] && (
                <h1>
                  <CountUp start={0} end={4379} duration={2} delay={0} />
                </h1>
              )}
            </div>
            <div className='topic-number'>Happy Patients</div>
          </div>
        </div>
        <div className='overall-container'>
          <div className='with-icon'>
            <SlCalender />
          </div>
          <div className='without-icon'>
            <div className='number'>
              {countingStates[3] && (
                <h1>
                  <CountUp start={0} end={32} duration={2} delay={0} />
                </h1>
              )}
            </div>
            <div className='topic-number'>Years Of Experience</div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Numbers;

// <div>Numbers</div>;
// {
//   counterOn && (
//     <h1>
//       <CountUp start={0} end={100} duration={2} delay={0} />
//     </h1>
//   );
// }
