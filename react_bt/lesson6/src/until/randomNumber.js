import config from "../config/config";

// (99 -1 +1)*(0->1)
//Math.random sẽ random ra 1 số từ 0 > gần nhát của 1
//nó sẽ nhân với (99 - 1) * 0.1 thì số sẽ làm tròn xuống còn 98
export const randomNumberAnswer = () => {
  return (
    Math.floor(Math.random() * (config.MAX_NUMBER - config.MIN_NUMBER + 1)) +
    config.MIN_NUMBER
  );
};
