import { useDotGrid } from "../hooks/useDotGrid";

const DotGrid = (props) => {
  const { className = "", style } = props;
  const { wrapperRef, canvasRef } = useDotGrid(props);

  return (
 <section
      className={`p-4 flex items-center justify-center h-full w-full relative ${className}`}
      style={style}
    >
      <div ref={wrapperRef} className="w-full h-full relative">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
        />
      </div>
    </section>
  );
};

export default DotGrid;
