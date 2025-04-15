import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full border-amber-600 border-1 bg-slate-800 rounded-md">
      <div className="wow fadeInUp p-6" data-wow-delay=".15s">
        {/* <div className="bg-primary/10 text-primary mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md"> */}
        <div className="mb-10 flex items-center justify-center rounded-md">
          {icon}
        </div>
        <div>
          <h3 className="mb-5 text-xl font-bold text-center text-amber-600 sm:text-2xl lg:text-xl xl:text-2xl ">
            {title}
          </h3>
          <p className="text-body-color pr-[10px] text-base text-center leading-relaxed font-medium divide-amber-700">
            {paragraph}
          </p>
        </div>

      </div>
    </div>
  );
};

export default SingleFeature;
