import React, {useEffect, useRef, useState} from 'react';

type Props = {
  lineColor: string;
  lineWidth: number;
};

export const Canvas: React.FC<Props> = ({ lineColor, lineWidth }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D  | null>(null);
  const [ isDrawing, setIsDrawing ] = useState(false);

  const startDraw = ({nativeEvent} : any) => {
    const {offsetX, offsetY} = nativeEvent
    if (contextRef.current) {
      contextRef.current.beginPath();
      contextRef.current.moveTo(offsetX, offsetY);
      setIsDrawing(true)
    }
  }
  const finishDraw = () => {
    if (contextRef.current) {
      contextRef.current.closePath();
    }
    setIsDrawing(false)
  }

  const draw = ({ nativeEvent }: any) => {
    const { clientX, clientY } = nativeEvent;
    const canvas = canvasRef.current;
    if (!isDrawing || !canvas) {
      return;
    }

    const canvasRect = canvas.getBoundingClientRect();
    const offsetX = clientX - canvasRect.left;
    const offsetY = clientY - canvasRect.top;

    if (contextRef.current) {
      contextRef.current.lineTo(offsetX, offsetY);
      contextRef.current.stroke();
    }
  };


  useEffect(() => {
    console.log('color', lineColor)
    console.log('lineWidth', lineWidth)
    const canvas = canvasRef.current;

    console.log('canvas', canvas)
    console.log('canvasRef', canvasRef)

    if (canvas) {
      const context = canvas.getContext("2d");
      const canvasRect = canvas.getBoundingClientRect();

      if (canvasRect) {
        canvas.width = canvasRect.width;
        canvas.height = canvasRect.height;
      }
      if (context) {
        context.strokeStyle = lineColor;
        context.lineWidth = lineWidth;
        context.lineCap = "round";
        contextRef.current = context;
      }
    }
  }, [lineColor, lineWidth])

  return (
    <div className='drawing-board'>
      <canvas
        className='canvas'
        onMouseDown={startDraw}
        onMouseUp={finishDraw}
        onMouseMove={draw}
        ref={canvasRef}
      />
    </div>
  );
};