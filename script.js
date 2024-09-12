function calculateTax(income, expenses) {
  if ((income, expenses < 0 || expenses > income)) {
    return "Invalid Input";
  }
  let difference = income - expenses;
  let tax = difference * 0.2;
  return tax;
}




function sendNotification(email) {
    if (email.indexOf('@') === -1) {
      return "Invalid Email";
  }
  let userName = email.split("@")[0];
  let domainName = email.split("@")[1];
  return `${userName} sent you an email from ${domainName}`;
}



function checkDigitsInName(name) {
    if (typeof name !== 'string') {
      return "Invalid Input";
    }
  for (i = 0; i < name.length; i++) {
    if (!isNaN(name[i])) {
      return true;
    }
  }
  return false;
}




function calculateFinalScore(obj) {
  if (typeof obj !== "object") {
    return "Invalid Input";
  }
  let finalScore = obj.testScore + obj.schoolGrade;
  if(obj.isFFamily){
    finalScore += 20;
  }
  if (finalScore >= 80) {
    return true;
  } else{
    return false;
  }
  }




  function  waitingTime(waitingTimes  , serialNumber) {

    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
      return "Invalid Input";
    }
    let sum = 0;
    for(i = 0; i < waitingTimes.length; i++){
      sum += waitingTimes[i];
    }
    let averageTime = Math.round((sum / waitingTimes.length));
    let remainingSerial = (serialNumber - 1) - waitingTimes.length;
    let waitingTime = averageTime * remainingSerial;
    return waitingTime;
}

