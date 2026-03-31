// 1
import debounce from 'debounce';
import { alert, notice, info, success, error, defaultModules } from '@pnotify/core/dist/PNotify.js';

import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';

import '@pnotify/core/dist/BrightTheme.css';
import "@pnotify/core/dist/PNotify.css";
defaultModules.set(PNotifyMobile, {});

const keyRef = document.getElementById("key");
const keys = ["a","b","c","d","e","f","g","h","i","j"];
const btnRef = document.querySelector("#btn")
let currentKeyIndex = 0;
keyRef.textContent = keys[currentKeyIndex]


window.addEventListener("keydown",debounce((e)=>{
    if (e.key !== keys[currentKeyIndex]) {
        error({
  title: 'Неправильна клавіша',
  text: 'Певно ви натиснули на неправильну клавішу.Нічого спробуйте ще раз',
  delay: 1500
});
    }
    else{
        success({
  title: 'Вітаю!',
  text: 'Ви натиснули правильну клавішу!',
  delay: 1500
});
if (currentKeyIndex !== keys.length-1) {
    currentKeyIndex++
}
else if(currentKeyIndex === keys.length-1){
    notice({
  title: 'Ви пройшли гру',
  text: 'Натисніть на кнопку щоб зіграти ще раз',
  delay: 1500
});
}
keyRef.textContent = keys[currentKeyIndex];
    }
},250))

btnRef.addEventListener("click",()=>{
    currentKeyIndex = 0;
    keyRef.textContent = keys[currentKeyIndex];
    success({
  title: 'Гру перезапущено!',
  delay: 1500
})
})

// 2
import Chart from 'chart.js/auto';

const ctx = document.getElementById("sales-chart")

const chartData = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
      borderWidth: 1,
    },
  ],
};
const config = {
type: 'line',
data: chartData,
options: {}
};
const salesChart = new Chart(ctx,config);




