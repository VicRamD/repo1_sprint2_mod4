import * as motion from "motion/react-client"
import { useEffect, useState } from "react"

const SoundFlowGraph = () => {

    const order1 = [["bg-transparent","bg-teal-900","bg-transparent"], ["bg-teal-900","bg-teal-900","bg-teal-900"], ["bg-teal-900","bg-teal-900","bg-teal-900"]];
    const order2 = [["bg-teal-900","bg-transparent","bg-teal-900"], ["bg-teal-900","bg-transparent","bg-teal-900"], ["bg-teal-900","bg-teal-900","bg-teal-900"]];
    const order3 = [["bg-transparent","bg-teal-900","bg-transparent"], ["bg-transparent","bg-teal-900","bg-transparent"], ["bg-teal-900","bg-teal-900","bg-teal-900"]];

    const [order, setOrder] = useState(order1);
    const [currentNumber, setCurrentNumber] = useState(0);

    function useSetTimeoutToChangeOrder(order){
        const timeout = setTimeout(() => setOrder(order), 1200)
        return () => clearTimeout(timeout);
    }

    useEffect(() => {
        switch(currentNumber){
            case 0:
                setCurrentNumber(1);
                useSetTimeoutToChangeOrder(order2);
                break;
            case 1:
                setCurrentNumber(2);
                useSetTimeoutToChangeOrder(order3);
                break;
            case 2:
                setCurrentNumber(0);
                useSetTimeoutToChangeOrder(order1);
                break;
        }
        
    }, [order])

  return (
     <ul className="list-none hidden lg:grid grid-cols-3 gap-x-4 gap-y-2 w-6">
            {order.map((backgroundArray, rowIndex) => backgroundArray.map((bgClass, colIndex)=> <motion.li 
                key={`${rowIndex}-${colIndex}`}
                layout 
                transition={{type: "spring", damping: 20, stiffness: 300}} 
                className={`w-2.5 h-2.5 ${bgClass}`}
          />))}
    </ul>
  )
}

export default SoundFlowGraph;