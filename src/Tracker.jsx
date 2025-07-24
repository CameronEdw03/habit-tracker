import React, { useState, useRef, useEffect } from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { FaFire, FaRegCalendarAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { format, set } from 'date-fns';
import { MdArrowDropDown } from "react-icons/md";
import { LuGlassWater } from "react-icons/lu";
import { MdOutlineTimer } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

function Tracker() {
  const today = new Date();
  const formattedDate = format(today, 'EEEE MMMM do yyyy');

  const tabs = ['Day', 'Week', 'Month', 'Year'];
  const [active, setActive] = useState('Day');
  const [slideStyle, setSlideStyle] = useState({});
  const buttonsRef = useRef([]);

  const [water, setWater] = useState([]);
  const [exercise, setExercise] = useState([]);
  const [sleep, setSleep] = useState([]);
  const [book, setBook] = useState([]);
  const [work, setWork] = useState([]);
  const [study, setStudy] = useState([]);
  const [meditation, setMeditation] = useState([]);

  const [input, setInput] = useState('');
  const [timeofDay, setTimeOfDay] = useState(false);
  const [selectedTime, setSelectedTime] = useState("Time of day");
  const [cupsDropdown, setCupsDropdown] = useState(false);
  const [selectedCups, setSelectedCups] = useState("Number of Cups");
  const [lengthDropdown, setLengthDropdown] = useState(false);
  const [selectedLength, setSelectedLength] = useState("Tracking length");
  const [exerciseOptions, setExerciseOptions] = useState(false)
  const [selectedExercise, setSelectedExercise] = useState("Type of Exercise");
  const [exerciseDuration, setExerciseDuration] = useState(false);
  const [selectedExerciseDuration, setSelectedExerciseDuration] = useState("Duration");
  const [CaloriesBurnGoal, setCaloriesBurnGoal] = useState(false);
  const [selectedCaloriesBurnGoal, setSelectedCaloriesBurnGoal] = useState("Calories Burn Goal");
  const [selectedSleep, setSelectedSleep] = useState("Hours Goal");
  const [sleepDropdown, setSleepDropdown] = useState(false);
  const [slepTimeDropdown, setSleepTimeDropdown] = useState(false);
  const [selectedSleepTime, setSelectedSleepTime] = useState("Sleep Start Time");
  


  useEffect(() => {
    const activeIndex = tabs.indexOf(active);
    const button = buttonsRef.current[activeIndex];
    if (button) {
      setSlideStyle({
        width: button.offsetWidth,
        transform: `translateX(${button.offsetLeft}px)`
      });
    }
  }, [active]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (input.toLowerCase().includes('water')) {
        if (
          selectedTime !== "Time of day" &&
          selectedCups !== "Number of Cups" &&
          selectedLength !== "Tracking length"
        ) {
          setWater([...water, {
            name: input,
            time: selectedTime,
            cups: selectedCups,
            duration: selectedLength
          }]);
          setInput('');
          setSelectedTime("Time of day");
          setSelectedCups("Number of Cups");
          setSelectedLength("Tracking length");
        } else {
          alert("Please fill in all water tracking options before submitting.");
        }
      } else if (input.toLowerCase().includes('exercise')) {
        setExercise([...exercise, input]);
        setInput('');
      } else if (input.toLowerCase().includes('sleep')) {
        setSleep([...sleep, input]);
        setInput('');
      } else if (input.toLowerCase().includes('book')) {
        setBook([...book, input]);
        setInput('');
      } else if (input.toLowerCase().includes('work')) {
        setWork([...work, input]);
        setInput('');
      } else if (input.toLowerCase().includes('study')) {
        setStudy([...study, input]);
        setInput('');
      } else if (input.toLowerCase().includes('meditation')) {
        setMeditation([...meditation, input]);
        setInput('');
      }
    }
  };

  const handleTimeofDay = () => {
    setTimeOfDay((prev) => !prev)
  }

  const handleOptionClick = (option) => {
    setSelectedTime(option);
    setTimeOfDay(false);
  };

  const handleCupsDropdown = () => {
    setCupsDropdown((prev) => !prev);
  };

  const handleCupsOptionClick = (option) => {
    setSelectedCups(option);
    setCupsDropdown(false);
  }

  const handleLengthDropdown = () => {
    setLengthDropdown((prev) => !prev);
  };

  const handleLengthOptionClick = (option) => {
    setSelectedLength(option);
    setLengthDropdown(false);
  };

  const handleTrack = () => {
  if (!input.trim()) return;

  if (input.toLowerCase().includes('water')) {
    if (
      selectedTime !== "Time of day" &&
      selectedCups !== "Number of Cups" &&
      selectedLength !== "Tracking length"
    ) {
      setWater([...water, {
        name: input,
        time: selectedTime,
        cups: selectedCups,
        duration: selectedLength
      }]);
      setInput('');
      setSelectedTime("Time of day");
      setSelectedCups("Number of Cups");
      setSelectedLength("Tracking length");
    } else {
      alert("Please fill in all water tracking options before submitting.");
    }
  } else if (input.toLowerCase().includes('exercise')) {
    if (
      selectedExercise !== "Type of Exercise" &&
      selectedExerciseDuration !== "Duration" &&
      selectedCaloriesBurnGoal !== "Calories Burn Goal"
    ) {
      setExercise([...exercise, {
        name: input,
        type: selectedExercise,
        duration: selectedExerciseDuration,
        calories: selectedCaloriesBurnGoal
      }]);
      setInput('');
      setSelectedExercise("Type of Exercise");
      setSelectedExerciseDuration("Duration");
      setSelectedCaloriesBurnGoal("Calories Burn Goal");
    } else {
      alert("Please fill in all exercise tracking options before submitting.");
    }
  }
};

  const handleExerciseOptions = () => {
    setExerciseOptions((prev) => !prev);
  };

  const handleExerciseOptionClick = (option) => {
    setSelectedExercise(option);
    setExerciseOptions(false);
  };

  const handleExerciseDuration = () => {
    setExerciseDuration((prev) => !prev);
  };

  const handleExerciseDurationOptionClick = (option) => {
    setSelectedExerciseDuration(option);
    setExerciseDuration(false);
  };

  const handleCaloriesBurnGoal = () => {
    setCaloriesBurnGoal((prev) => !prev);
  };

  const handleCaloriesBurnGoalOptionClick = (option) => {
    setSelectedCaloriesBurnGoal(option);
    setCaloriesBurnGoal(false);
  };

  const handleSleepDropdown = () => {
    setSleepDropdown((prev) => !prev);
  };

  const handleSleepOptionClick = (option) => {
    setSelectedSleep(option);
    setSleepDropdown(false);
  };

  const handleSleepTimeDropdown = () => { 
    setSleepTimeDropdown((prev) => !prev);
  }

  const handleSleepTimeOptionClick = (option) => {
    setSelectedSleepTime(option);
    setSleepTimeDropdown(false);
  }

  return (
    <div className="flex h-screen">
      <div className="bg-stone-100 w-64 h-screen fixed top-0 left-0 shadow-lg border border-stone-200 flex flex-col items-center py-10">
        <button className="px-4 py-2 text-stone-500 rounded-md hover:bg-orange-500/20 hover:text-orange-500 hover:scale-105 transition-all duration-300 mb-6">
          <IoHomeOutline className="text-[25px]" />
        </button>
        <button className="px-4 py-2 text-stone-500 rounded-md hover:bg-orange-500/20 hover:text-orange-500 hover:scale-105 transition-all duration-300 mb-6">
          <FaFire className="text-[25px]" />
        </button>
        <button className="px-4 py-2 text-stone-500 rounded-md hover:bg-orange-500/20 hover:text-orange-500 hover:scale-105 transition-all duration-300 mb-6">
          <FaRegCalendarAlt className="text-[25px]" />
        </button>
        <button className="px-4 py-2 text-stone-500 rounded-md hover:bg-orange-500/20 hover:text-orange-500 hover:scale-105 transition-all duration-300">
          <IoMdSettings className="text-[25px]" />
        </button>
      </div>

      <div className="flex-1 ml-64 p-6 text-black">
        <h1 className="text-3xl font-semibold mb-2">Good Morning, User!</h1>
        <p className="text-md text-stone-400 font-semibold mb-6">{formattedDate}</p>

        <div className="flex flex-col items-end mb-8">
          <div className="relative bg-white shadow rounded-lg border border-stone-200 w-[368px] h-[56px] px-2 flex items-center justify-between">
            <div
              className="absolute top-[8px] h-[40px] bg-orange-500 rounded-md transition-all duration-300"
              style={{ ...slideStyle, left: 0 }}
            />
            {tabs.map((tab, index) => (
              <button
                key={tab}
                ref={(el) => (buttonsRef.current[index] = el)}
                onClick={() => setActive(tab)}
                className={`relative z-10 px-4 h-[40px] rounded-md font-semibold transition-all duration-300 ${
                  active === tab ? 'text-white' : 'text-stone-400'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="w-[800px] h-[230px] max-w-full bg-stone-100 rounded-lg shadow-inner p-6 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Track habit"
            className="w-full h-[40px] bg-white border border-stone-300 rounded-lg px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          {input.toLowerCase().includes('water') && (
            <div className="text-sm text-stone-500 mt-4">
              <div className="relative inline-block text-left">
                <button
                  className="flex items-center bg-white text-stone-400 shadow-md px-4 py-2 text-lg rounded-md transition-all duration-300 hover:scale-105 cursor-pointer"
                  onClick={handleTimeofDay}
                >
                  <MdArrowDropDown className="text-[25px] mr-2" />
                  {selectedTime}
                </button>
                {timeofDay && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                    <ul className="py-1">
                      {['Morning', 'Afternoon', 'Evening'].map((option) => (
                        <li key={option} className="px-4 py-2 text-sm text-stone-700 hover:bg-orange-500 hover:text-white cursor-pointer" onClick={() => handleOptionClick(option)}>{option}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <button className='flex items-center bg-white text-stone-400 shadow-md px-4 py-2 rounded-md ml-50 -mt-11 h-11 font-semibold transition-all duration-300 hover:scale-105 cursor-pointer' onClick={handleCupsDropdown}>
                  <LuGlassWater className='mr-2' />{selectedCups}
                </button>
                {cupsDropdown && (
                  <div className='absolute ml-50 mt-2 w-48 bg-white rounded-md shadow-lg z-10'>
                    <ul className='py-1'>
                      <li className='px-4 py-2 text-sm text-stone-700 hover:bg-orange-500 hover:text-white cursor-pointer'onClick={() => handleCupsOptionClick("One cup of water")}><LuGlassWater /></li>
                      <li className='flex items-center px-4 py-2 text-sm text-stone-700 hover:bg-orange-500 hover:text-white cursor-pointer'onClick={() => handleCupsOptionClick("Two cups of water")}><LuGlassWater /><LuGlassWater /></li>
                      <li className='flex items-center px-4 py-2 text-sm text-stone-700 hover:bg-orange-500 hover:text-white cursor-pointer'onClick={() => handleCupsOptionClick("Three cups of water")}><LuGlassWater /><LuGlassWater /><LuGlassWater /></li>
                      <li className='flex items-center px-4 py-2 text-sm text-stone-700 hover:bg-orange-500 hover:text-white cursor-pointer'onClick={() => handleCupsOptionClick("More than three cups of water")}><LuGlassWater /><LuGlassWater /><LuGlassWater /> + </li>
                    </ul>
                  </div>
                )}
                <button className='flex items-center bg-white text-stone-400 shadow-md px-4 py-2 rounded-md ml-110 -mt-11 h-11 font-semibold transition-all duration-300 hover:scale-105 cursor-pointer' onClick={handleLengthDropdown}>
                  <MdOutlineTimer className='mr-2'/>{selectedLength}
                </button>
                {lengthDropdown && (
                  <div className='absolute ml-110 mt-2 w-48 bg-white rounded-md shadow-lg z-10'>
                    <ul className='py-1'>
                      {["One day", "One week", "One month", "One year"].map((option) => (
                        <li key={option} className='px-4 py-2 text-sm text-stone-700 hover:bg-orange-500 hover:text-white cursor-pointer'onClick={() => handleLengthOptionClick(option)}>{option}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <button className='bg-orange-500 text-white px-4 py-2 rounded-md flex ml-160 -mt-10 h-11 items-center font-semibold transition-all duration-300 hover:bg-orange-600 hover:scale-105 cursor-pointer' onClick={handleTrack}>
                  Track
                </button>
              </div>
            </div>
          )}
          {input.toLowerCase().includes('exercise') && (
            <div className='text-sm text-stone-500 mt-4'>
              <div className='relative inline-block text-left'>
               <button className='flex items-center bg-white text-stone-400 shadow-md text-[15px] px-4 py-2 text-lg rounded-md transition-all duration-300 hover:scale-105 cursor-pointer font-semibold' onClick={handleExerciseOptions}>
                <FaRegHeart className=' mr-2' />{selectedExercise}
              </button>
                {exerciseOptions && (
                  <div className='absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10'>
                    <ul className='py-1'>
                      <li className='px-4 py-2 text-sm text-stone-700 hover:bg-orange-500 hover:text-white cursor-pointer'onClick={() => handleExerciseOptionClick("Running")}>Running</li>
                      <li className='px-4 py-2 text-sm text-stone-700 hover:bg-orange-500 hover:text-white cursor-pointer'onClick={() => handleExerciseOptionClick("Weights")}>Weights</li>
                      <li className='px-4 py-2 text-sm text-stone-700 hover:bg-orange-500 hover:text-white cursor-pointer'onClick={() => handleExerciseOptionClick("Swimming")}>Swimming</li>
                      <li className='px-4 py-2 text-sm text-stone-700 hover:bg-orange-500 hover:text-white cursor-pointer'onClick={() => handleExerciseOptionClick("Yoga")}>Yoga</li>
                    </ul>
                  </div>
                )}
                <button className='flex items-center bg-white text-stone-400 shadow-md text-[15px] px-4 py-2 rounded-md transition-all duration-300 hover:scale-105 cursor-pointer font-semibold ml-50 -mt-10'onClick={handleExerciseDuration}>
                   <MdOutlineTimer className='mr-2' />{selectedExerciseDuration}
                </button>
                {exerciseDuration && (
                  <div className='absolute ml-50 mt-2 w-48 bg-white rounded-md shadow-lg z-10'>
                    <ul className='py-1'>
                      {["15 minutes", "30 minutes", "45 minutes", "1 hour"].map((option) => (
                        <li key={option} className='px-4 py-2 text-sm text-stone-700 hover:bg-orange-500 hover:text-white cursor-pointer'onClick={() => handleExerciseDurationOptionClick(option)}>{option}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <button className='flex items-center bg-white text-stone-400 shadow-md text-[15px] px-4 py-2 rounded-md ml-90 -mt-10 font-semibold transition-all duration-300 hover:scale-105 cursor-pointer'onClick={handleCaloriesBurnGoal}>
                  <FaFire className='mr-2' />{selectedCaloriesBurnGoal}
                </button>
                {CaloriesBurnGoal && (
                  <div className='absolute ml-90 mt-2 w-48 bg-white rounded-md shadow-lg z-10'>
                    <ul className='py-1'>
                      {["100 calories", "200 calories", "300 calories", "400 calories"].map((option) => (
                        <li key={option} className='px-4 py-2 text-sm text-stone-700 hover:bg-orange-500 hover:text-white cursor-pointer'onClick={() => handleCaloriesBurnGoalOptionClick(option)}>{option}</li>
                      ))}
                    </ul>

                  </div>
                )}
                <button className='bg-orange-500 text-white px-4 py-2 rounded-md flex ml-160 -mt-10 h-11 items-center font-semibold transition-all duration-300 hover:bg-orange-600 hover:scale-105 cursor-pointer' onClick={handleTrack}>
                  Track
                </button>
              </div>
            </div>
          )}
          {input.toLowerCase().includes('sleep') && (
            <div className='text-sm text-stone-500 mt-4'>
              <div className='relative inline-block text-left'>
                <button className='flex items-center bg-white text-stone-400 shadow-md px-4 py-2 text-lg rounded-md transition-all duration-300 hover:scale-105 cursor-pointer font-semibold' onClick={handleSleepDropdown}>
                  <FaRegHeart className='mr-2' />{selectedSleep}
                </button>
                {sleepDropdown && (
                  <div className='absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10'>
                    <ul className='py-1'>
                      {["6 hours", "7 hours", "8 hours", "9 hours"].map((option) => (
                        <li key={option} className='px-4 py-2 text-sm text-stone-700 hover:bg-orange-500 hover:text-white cursor-pointer'onClick={() => handleSleepOptionClick(option)}>{option}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <button className='flex items-center bg-white text-stone-400 shadow-md px-4 py-2 rounded-md ml-50 -mt-10 h-11 font-semibold transition-all duration-300 hover:scale-105 cursor-pointer' onClick={handleSleepTimeDropdown}>
                  <MdOutlineTimer className='mr-2' />{selectedSleepTime}
                </button>
                {slepTimeDropdown && (
                  <div className='absolute ml-50 mt-2 w-48 bg-white rounded-md shadow-lg z-10'>
                    <ul className='py-1'>
                      {["8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM", "12:00 PM", "1:00 AM", "2:00 AM"].map((option) => (
                        <li key={option} className='px-4 py-2 text-sm text-stone-700 hover:bg-orange-500 hover:text-white cursor-pointer'onClick={() => handleSleepTimeOptionClick(option)}>{option}</li>
                      ))}
                    </ul>
                  </div>
                )}

                

              </div>
                
              
            </div>
          )}
        </div>

        
        {water.map((entry, index) => (
          entry.time !== "Time of day" &&
          entry.cups !== "Number of Cups" &&
          entry.duration !== "Tracking length" && (
            <div key={index} className='bg-white border border-stone-300 p-4 rounded-md shadow-md mt-4 text-black w-200 transition-all duration-300 hover:scale-101 cursor-pointer hover:shadow-lg hover:bg-orange-50'>
              <h2 className="text-lg font-semibold mb-2 flex items-center"><img src='/Droplet.svg' alt='water' className='w-5 h-5 mr-2 '/>{entry.name}</h2>
              <p><strong>Time:</strong> {entry.time}</p>
              <p><strong>Cups:</strong> {entry.cups}</p>
              <p><strong>Duration:</strong> {entry.duration}</p>
            </div>
          )
        ))}
        {exercise.map((entry, index) => (
          <div key={index} className='bg-white border border-stone-300 p-4 rounded-md shadow-md mt-4 text-black w-200 transition-all duration-300 hover:scale-101 cursor-pointer hover:shadow-lg hover:bg-orange-50'>
            <h2 className="text-lg font-semibold mb-2 flex items-center"><img src='/lifting.svg' alt='exercise' className='w-5 h-5 mr-2 '/>{entry.name}</h2>
            <p><strong>Type:</strong> {entry.type}</p>
            <p><strong>Duration:</strong> {entry.duration}</p>
            <p><strong>Calories Burned:</strong> {entry.calories}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tracker;
