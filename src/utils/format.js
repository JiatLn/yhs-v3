// 四舍五入  参数（数字，小数点保留位数)
const format45 = (val, v2) => {
  if (isNaN(val) || val == undefined || val == null) {
    return null;
  }
  v2 = Math.pow(10, v2);
  return Math.round(val * v2) / v2;
};

const valToColor = (val) => {
  val = val > 100 ? 100 : val;
  if (val > 75) {
    return '#63be7b';
  } else if (val < 25) {
    return '#f8696b';
  } else {
    return '#000';
  }
};

const formatValue = (val, precision = 2) => {
  if (val <= 1) {
    return (val * 100).toFixed(precision) + '%';
  } else {
    return val.toFixed(precision);
  }
};

export { format45, valToColor, formatValue };
