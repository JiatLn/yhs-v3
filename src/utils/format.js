// 四舍五入  参数（数字，小数点保留位数)
const format45 = (val, v2) => {
  if (isNaN(val) || val == undefined || val == null) {
    return null;
  }
  v2 = Math.pow(10, v2);
  return Math.round(val * v2) / v2;
};

export { format45 };
