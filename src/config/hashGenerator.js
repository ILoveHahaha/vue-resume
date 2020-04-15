/**
 * @param {String=} method 用哪一种算法
 * @param {Number=} length 返回长度
 * @description 随机字符生成器
 * **/
export class HashGenerator {
  constructor (method, length) {
    this.method = method;
    this.length = length;
    this.hashValue = null;
    this.mainFunc();
  }
  /**
   * @description 主函数
   * **/
  mainFunc () {
    if (!this.method && !this.length) {
      this.hashMehtod();
    } else if (!this.length) {
      if (typeof this.method === 'string') {
        this.selectJudgment(this.method);
      } else if (typeof this.method === 'number') {
        this.hashMehtod(this.length);
      } else {
        throw new Error('param error. if you pass in an argument, the argument\'s type should be string or number');
      }
    } else {
      this.selectJudgment(this.method, this.length);
    }
  }
  /**
   * @param {Number=} length 返回长度
   * @description 哈希函数
   * **/
  hashMehtod (length = 16) {
    let ar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let hs = [];
    let al = ar.length;
    for (let i = 0; i < length; i++) {
      hs.push(ar[Math.floor(Math.random() * al)]);
    }
    this.hashValue = hs.join('');
  }
  /**
   * @description uuid函数
   * **/
  uuidMethod () {
    let s = [];
    let hexDigits = '0123456789abcdef';
    for (let i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = '-';
    let uuid = s.join('');
    this.hashValue = uuid;
  }
  /**
   * @param {String=} method 用哪一种算法
   * @param {Number=} length 返回长度
   * @description 公有判断器函数
   * **/
  selectJudgment (method, length) {
    switch (method) {
      case 'hash':
        this.hashMehtod(length);
        break;
      case 'uuid':
        this.uuidMethod();
        break;
      default:
        throw new Error('param error, you param is not match. First param should write hash,md5 or uuid');
    }
  }
  /**
   * @description 获取hash值
   * **/
  getHashValue () {
    return this.hashValue;
  }
}
