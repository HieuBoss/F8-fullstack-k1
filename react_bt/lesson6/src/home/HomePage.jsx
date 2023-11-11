import React, { useEffect, useReducer, useRef } from "react";
import Input from "../components/input/Input";
import TableResults from "../components/table/TableResults";
import { randomNumberAnswer } from "../until/randomNumber";
import { reducer } from "./reducer";
import { validateForm } from "../validate/validate";
import { toast } from "react-toastify";
import config from "../config/config";
import { setItem, getItem } from "../until/localStorageUtil";

export default function HomePage() {
  const playRef = useRef({
    maxTurn: config.MAX_TURN,
    correctAnswer: randomNumberAnswer(),
    historyData: [],
  });

  const getDataHistory = (() => {
    let dataHistory = [];
    const data = getItem("history");

    if (Array.isArray(data)) {
      dataHistory = data;
    }
    return dataHistory;
  })();

  const [state, dispatch] = useReducer(reducer, {
    input: "",
    remainTurn: config.MAX_TURN,
    historyDataRound: getDataHistory,
  });

  const handleOnchange = (value) => {
    console.log(state.historyDataRound);
    const check = validateForm(value);
    if (check) {
      dispatch({
        type: "input/change",
        payload: value,
      });
    } else {
      toast.warn("Bạn phải nhập số từ 0 -> 99");
    }
  };

  const handleCheck = (valueInput, correctAsw) => {
    if (valueInput === correctAsw) {
      return true;
    } else if (valueInput > correctAsw) {
      return "Ban can giam gia tri xuong 1 chut";
    } else {
      return "Ban can tang gia tri xuong 1 chut";
    }
  };

  const resetRound = () => {
    console.log(1);

    playRef.current.correctAnswer = randomNumberAnswer();
    dispatch({
      type: "play/set",
      payload: {
        remainTurn: config.MAX_TURN,
        input: "",
      },
    });
    // toast.info("Ban da toi vong choi moi");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkInput = validateForm(state.input);
    if (state.remainTurn > 0 && state.input && checkInput) {
      const check = handleCheck(+state.input, playRef.current.correctAnswer);
      const answer = {
        name: state.input,
      };
      if (check === true) {
        toast.success("ban da dung");
        resetRound();
      } else {
        toast.info(check);
        dispatch({
          type: "remainTurn/decrement",
        });
      }
      playRef.current.historyData.push(answer);
    } else {
      resetRound();
    }
  };

  useEffect(() => {
    if (state.remainTurn <= 0) {
      const history = [playRef.current.historyData, ...state.historyDataRound];
      dispatch({
        type: "historyData/set",
        payload: history,
      });
      setItem("history", history);

      playRef.current.historyData = [];
    }
  }, [state.remainTurn]);
  return (
    <div>
      <h2>Chào mừng bạn đến với trò chơi đoán số!</h2>
      <h2>
        Còn {state.remainTurn}/{config.MAX_TURN}lần
      </h2>
      <h2>Bạn cần tìm kiếm một số từ 1 đến 99</h2>

      <TableResults data={state.historyDataRound} />
      <Input
        value={state.input}
        onChange={handleOnchange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
