
// "use client";

// import React from 'react';
// import CountUp from 'react-countup';

// const CounterUp = () => {
//   return (
//     <div className="w-full pt-32 pb-32 flex flex-col lg:flex-row mx-auto gap-8 lg:gap-2 bg-transparent lg:justify-evenly justify-center">
//       <div className="flex flex-col items-center">
//         <h1 className="text-6xl text-yellow-500">
//           <CountUp end={72} duration={5} />
//         </h1>
//         <p className="text-white-100">Client</p>
//       </div>
//       <div className="flex flex-col items-center">
//         <h1 className="text-6xl text-yellow-500">
//           <CountUp end={89} duration={5} />
//         </h1>
//         <p className="text-white-100">Projects</p>
//       </div>
//       <div className="flex flex-col items-center">
//         <h1 className="text-6xl text-yellow-500">
//           <CountUp end={2989} duration={5} />
//         </h1>
//         <p className="text-white-100">Hours of support</p>
//       </div>
//       <div className="flex flex-col items-center">
//         <h1 className="text-6xl text-yellow-500">
//           <CountUp end={41} duration={5} />
//         </h1>
//         <p className="text-white-100">Tireless Performers</p>
//       </div>
//     </div>
//   );
// };

// export default CounterUp;


"use client";

import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const CounterUp = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="w-full pt-32 pb-32 flex flex-col lg:flex-row mx-auto gap-8 lg:gap-2 bg-transparent lg:justify-evenly justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-6xl text-yellow-500">
          {inView && <CountUp end={72} duration={5} />}
        </h1>
        <p className="text-white-100">Client</p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-6xl text-yellow-500">
          {inView && <CountUp end={89} duration={5} />}
        </h1>
        <p className="text-white-100">Projects</p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-6xl text-yellow-500">
          {inView && <CountUp end={2989} duration={5} />}
        </h1>
        <p className="text-white-100">Hours of support</p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-6xl text-yellow-500">
          {inView && <CountUp end={41} duration={5} />}
        </h1>
        <p className="text-white-100">Tireless Performers</p>
      </div>
    </div>
  );
};

export default CounterUp;


