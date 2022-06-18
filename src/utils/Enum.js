/*
*枚举各待选参数的指标
*非计算型参数指标为 1/总数
*计算型参数（salary）
*/

var jobNatureEnum = {
  '兼职': 33.3,
  '实习': 66.7,
  '全职': 100
}
var financeStageEnum = {
  '未融资': 12.5,
  '不需要融资': 25,
  '天使轮': 37.5,
  'A轮': 50,
  'B轮': 62.5,
  'C轮': 75,
  'D轮及以上': 87.5,
  '上市公司': 100
}
var companySizeEnum = {
  '少于15人': 16.7,
  '15-50人': 33.3,
  '50-150人': 49.9,
  '150-500人': 66.6,
  '500-2000人': 83.3,
  '2000人以上': 100
}
var educationEnum = {
  '不限': 20,
  '大专': 40,
  '本科': 60,
  '硕士': 80,
  '博士': 100
}
var workYearEnum = {
  '不限': 14.3,
  '应届毕业生': 28.6,
  '1年以下': 42.8,
  '1-3年': 57.1,
  '3-5年': 71.3,
  '5-10年': 85.7,
  '10年以上': 100
}

module.exports = {
  jobNatureEnum,
  financeStageEnum,
  companySizeEnum,
  educationEnum,
  workYearEnum
}
