function OpeningCeremony(scoreObj, callbackFnc) {
    setTimeout(() => {
      console.log("Let the games begin");
      Race100M(scoreObj, callbackFnc);
    }, 1000);
  }
  
  function Race100M(scoreObj, callbackFnc) {
    const colors = ["red", "yellow", "blue", "green"];
    const times = {};
    colors.forEach((color) => {
      times[color] = Math.floor(Math.random() * 6 + 10);
    });
    console.log("Race100M Times: ", times);
    const sortedColors = Object.keys(times).sort((a, b) => times[a] - times[b]);
    const points = { [sortedColors[0]]: 50, [sortedColors[1]]: 25 };
    console.log("Race100M Points: ", points);
    const updatedScore = Object.assign({}, scoreObj, points);
    console.log("Race100M Updated Score: ", updatedScore);
    callbackFnc(updatedScore, LongJump);
  }
  
  function LongJump(scoreObj, callbackFnc) {
    const colors = ["red", "yellow", "blue", "green"];
    const winnerColor = colors[Math.floor(Math.random() * 4)];
    const points = { [winnerColor]: 150 };
    console.log("LongJump Winner: ", winnerColor);
    console.log("LongJump Points: ", points);
    const updatedScore = Object.assign({}, scoreObj, points);
    console.log("LongJump Updated Score: ", updatedScore);
    callbackFnc(updatedScore, HighJump);
  }
  
  function HighJump(scoreObj, callbackFnc) {
    const color = prompt("What color secured the highest jump?");
    if (color) {
      const points = { [color]: 100 };
      console.log("HighJump Points: ", points);
      const updatedScore = Object.assign({}, scoreObj, points);
      console.log("HighJump Updated Score: ", updatedScore);
      callbackFnc(updatedScore, AwardCeremony);
    } else {
      console.log("Event was cancelled");
      callbackFnc(scoreObj, AwardCeremony);
    }
  }
  
  function AwardCeremony(scoreObj) {
    const sortedScores = Object.entries(scoreObj).sort((a, b) => b[1] - a[1]);
    console.log(`${sortedScores[0][0]} came first with ${sortedScores[0][1]} points.`);
    console.log(`${sortedScores[1][0]} came second with ${sortedScores[1][1]} points.`);
    console.log(`${sortedScores[2][0]} came third with ${sortedScores[2][1]} points.`);
  }
  
  const initialScore = { red: 0, blue: 0, green: 0, yellow: 0 };
  
  OpeningCeremony(initialScore, (scoreObj, nextCallbackFnc) => {
    Race100M(scoreObj, (scoreObj, nextCallbackFnc) => {
      LongJump(scoreObj, (scoreObj, nextCallbackFnc) => {
        HighJump(scoreObj, nextCallbackFnc);
      });
    });
  });
  