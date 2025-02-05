import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { undo, redo } from "../redux/actions";

const UndoRedoControls = () => {
  const dispatch = useDispatch();
  const past = useSelector((state: RootState) => state.history.past);
  const future = useSelector((state: RootState) => state.history.future);

  return (
    <div
      style={{
        position: "absolute",
        left: 20,
        top: 20,
        display: "flex",
        gap: "1rem",
      }}>
      <button className="btn"
        onClick={() => dispatch(undo())}
        disabled={past.length === 0}
        style={{ backgroundColor: past.length === 0 ? "#9E9E9E" : "#4CAF50" }}>
        <i className="fa-solid fa-arrow-rotate-left"></i> Undo
      </button>
      <button className="btn"
        onClick={() => dispatch(redo())}
        disabled={future.length === 0}
        style={{
          backgroundColor: future.length === 0 ? "#9E9E9E" : "#2196F3",
        }}>
        <i className="fa-solid fa-rotate-right"></i> Redo
      </button>
    </div>
  );
};

export default UndoRedoControls;
