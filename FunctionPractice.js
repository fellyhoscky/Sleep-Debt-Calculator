//creating funnction that get hours of Sleep
const getSleepHours = day =>{
  switch(day){
    case 'monday':
    return 8;
    break;
    case 'tuesday':
    return 7;
    break;
    case 'wenesday':
    return 4;
    break;
    case 'thursday':
    return 5;
    break;
    case 'friday':
    return 3;
    break;
    case 'saturday':
    return 6;
    break;
    case 'sunday':
    return 9;
    break;
    default:
    return 'error';
    break;
  }
};
    
  console.log(getSleepHours( 'thursday'));
 const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wenesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('sataday') + getSleepHours('sunday');

const getIdealSleepHours = () => {
    const idealHours = 6;
    return idealHours*7
  };
console.log(getActualSleepHours());
console.log(getIdealSleepHours());
