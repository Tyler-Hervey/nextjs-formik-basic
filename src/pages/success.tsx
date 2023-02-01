import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import Confetti from "react-confetti";

const Success = () => {
  const router = useRouter();

  const [pieces, setPieces] = useState(200);
  const stopConfetti = () => {
    setTimeout(() => {
      setPieces(0);
    }, 3000);
  };

  useEffect(() => {
    stopConfetti();
  }, []);

  return (
    <m.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`h-screen flex items-center justify-center absolute w-full`}
    >
      <div className={`bg-white flex rounded-sm font-lato text-gray-700 p-20`}>
        <div>
          <h1 className="text-3xl bold mb-2">
            Thanks for your submission {router.query.name} 🍻
          </h1>
          <p className="text-lg text-gray-500">
            we will occasionally attempt to sell you things by soliciting{` `}
            {router.query.email}
          </p>
        </div>
      </div>
      <Confetti gravity={0.2} numberOfPieces={pieces} />
    </m.main>
  );
};

export default Success;
