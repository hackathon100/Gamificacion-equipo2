const roundToTwo = (num) => {
  const number = num || 0;
  return (+(Math.round(number + 'e+2') + 'e-2')).toFixed(2);
};

export default roundToTwo;
