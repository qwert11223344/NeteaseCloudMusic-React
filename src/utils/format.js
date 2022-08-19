/**
 * 对数字进行格式化
 * @param {number} count
 */
export function getCount(count) {
  if (count < 0) return;
  if (count < 10000) {
    return count;
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + '万';
  } else {
    return Math.floor(count / 10000000) / 10 + '亿';
  }
}
export function getImageSize(url, size) {
  return `${url}?param=${size}y${size}`;
}

export function formatDate(time, fmt) {
  let date = new Date(time);

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    );
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      );
    }
  }
  return fmt;
}
function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}

export function formatMinuteSecond(time) {
  return formatDate(time, 'mm:ss');
}
export function formatMonthDay(time) {
  return formatDate(time, 'MM月dd日');
}

export function getRandom(end) {
  return Math.floor(Math.random() * end);
}

export function parseLyric(lyrics) {
  const parseExp = /\[([0-9]{2}):([0-9]{2})\.([0-9]{2,3})\]/;
  if (!lyrics) return;
  const lineStrings = lyrics.split('\n');
  const lyricList = [];
  for (const line of lineStrings) {
    if (line) {
      const result = parseExp.exec(line);

      if (!result) continue;
      const time1 = result[1] * 60 * 1000;
      const time2 = result[2] * 1000;
      const time3 = result[3].length > 2 ? result[3] * 1 : result[3] * 10;
      const beginTime = time1 + time2 + time3;
      const content = line.replace(parseExp, '').trim();
      const lineObj = { beginTime, content };
      lyricList.push(lineObj);
    }
  }
  return lyricList;
}
