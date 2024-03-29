import Image from "next/image";

const Steps = ({currStep, dictionary}:{currStep: number, dictionary: any}) => {
  const dict = dictionary["checkout"];
  return (
    <nav className="my-6 lg:my-10 flex items-center justify-between">
      {dict["steps"].map((step: any, i: number) => {
        const isCurr = i+1 === currStep;
        const isNext = i+1 > currStep;

        return (
          <a key={`checkoutStep${i}`} href={`#step${i}`} className="step flex max-lg:flex-col items-center gap-2 lg:gap-[20px] text-black text-xs lg:text-xl">
            <span className={`relative flex items-center justify-center w-5 h-5 lg:w-10 lg:h-10 rounded-full text-sm lg:text-xl ${isNext ? 'text-crayola' : 'text-white'} ${isNext ? 'border border-crayola' : ''} ${isCurr ? 'bg-crayola' : (isNext ? 'bg-white' : 'bg-lime-400')}`} aria-hidden>
              {isCurr || isNext ? i + 1 : <Image src="/icons/checkout/tick-white.svg" alt="" fill className="object-cover scale-[.55]"  />}
            </span>
            <div className="step-name"><span className="max-lg:hidden">{`${dict["step"]} ${i + 1}: `}</span>{step}</div>
          </a>
        );
      })}
    </nav>
  );
};

export default Steps;