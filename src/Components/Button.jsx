import clsx from "clsx";
import Marker from "./Marker";

function Button({
  children,
  icon,
  href,
  markerFill,
  containerClassName,
  onClick,
}) {
  const Inner = () => (
    <>
      <span className="relative flex items-center min-h-[60px] px-4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
        <span className="absolute left-[-1px">
          <Marker markerFill={markerFill} />
        </span>
        {icon && (
          <img
            src={icon}
            alt="circle"
            className="size-10 mr-5 object-contain z-10"
          />
        )}

        <span className="relative z-2 font-poppins base-bold text-p1 uppercase ">
          {children}
        </span>
      </span>

      <span className="glow-before glow-after" />
    </>
  );
  return href ? (
    <a
      className={clsx(
        "relative p-0.5 g5 rounded-full shadow-500 group",
        containerClassName
      )}
      href={href}
    >
      <Inner />
    </a>
  ) : (
    <div>
      <button
        className={clsx(
          "relative p-0.5 g5 rounded-full shadow-500 group",
          containerClassName
        )}
        onClick={onClick}
      >
        <Inner />
      </button>
    </div>
  );
}

export default Button;
