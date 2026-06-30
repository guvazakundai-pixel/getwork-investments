export default function TrustBadge() {
  return (
    <div className="hidden md:flex absolute -bottom-8 right-8 lg:right-16 z-20">
      <div className="w-36 h-36 rounded-full bg-dark-blue border-4 border-royal-blue flex items-center justify-center shadow-xl">
        <div className="text-center px-2">
          <p className="text-white text-[10px] font-heading font-bold leading-tight">
            QUALITY
          </p>
          <p className="text-white text-[10px] font-heading font-bold leading-tight">
            REPAIRS
          </p>
          <p className="text-royal-blue text-[10px] font-heading font-bold leading-tight mt-1">
            FAIR PRICES
          </p>
          <p className="text-white text-[10px] font-heading font-bold leading-tight mt-1">
            SAME DAY
          </p>
          <p className="text-white text-[10px] font-heading font-bold leading-tight">
            SERVICE
          </p>
        </div>
      </div>
    </div>
  );
}
