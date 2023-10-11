import { config } from "./config.js";
import { client } from "./client.js";
const { PAGE_LIMIT } = config;

let limit = PAGE_LIMIT;
let page = 1;
let count = 0;
let time = 5;
const pointEl = document.querySelector(".point span");
const btnStart = document.querySelector(".btn-start");
const setTime = document.querySelector(".set-time");
const content = document.querySelector(".content");

let timeFinished = false;

btnStart.addEventListener("click", (e) => {
  e.preventDefault();
  btnStart.style.display = "none";

  let pTime = document.createElement("p");
  pTime.innerText = time;
  pTime.classList.add("num");
  setTime.append(pTime);

  const countdownInterval = setInterval(() => {
    time--;
    pTime.innerText = time;

    if (time === 0) {
      clearInterval(countdownInterval);
      pTime.innerText = "Go!";
      setTimeout(() => {
        pTime.style.display = "none";
        content.style.display = "block";
        questions();
      }, 1000);
    }
  }, 1000);
});

const questions = async (query = {}) => {
  const { data } = await client.get(
    `/quizs` + `?_limit=${limit}&_start=${(page - 1) * limit}`
  );

  renderQuestion(data);
  renderTotal(data);
};

const renderQuestion = (quizs) => {
  const questionEl = document.querySelector(".question");
  questionEl.innerText = ``;
  if (quizs.length) {
    quizs.forEach(({ id, question }) => {
      const pQuestion = document.createElement("p");
      pQuestion.innerText = question;

      const spanQuestion = document.createElement("span");
      spanQuestion.innerText = `Question${id} :`;
      questionEl.append(spanQuestion);
      questionEl.append(pQuestion);
    });
  }
};

const renderTotal = (quizs) => {
  const totalEl = document.querySelector(".total-question");
  totalEl.innerText = ``;

  if (quizs.length) {
    quizs.forEach(({ options }) => {
      options.forEach(({ id, option, isAnswer }) => {
        const pTotal = document.createElement("p");
        pTotal.innerText = option;
        totalEl.append(pTotal);

        pTotal.addEventListener("click", () => {
          if (!timeFinished) {
            const clickedOption = options.find((option) => option.id === id);

            if (clickedOption) {
              if (clickedOption.isAnswer) {
                pTotal.classList.add("is-true");
                count += 750;
                pointEl.innerText = count;
                nextPage();
              } else {
                pTotal.classList.add("is-false");
              }
            }
          }
        });
      });
    });
  }
};

const nextPage = () => {
  setTimeout(() => {
    page++;
    questions();
  }, 2000);
};

questions();
