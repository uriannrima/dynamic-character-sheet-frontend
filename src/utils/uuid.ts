class UUID {
  lut: string[] = [];

  constructor() {
    for (var i = 0; i < 256; i++) {
      this.lut[i] = (i < 16 ? '0' : '') + (i).toString(16);
    }
  }

  generate() {
    var d0 = Math.random() * 0xffffffff | 0;
    var d1 = Math.random() * 0xffffffff | 0;
    var d2 = Math.random() * 0xffffffff | 0;
    var d3 = Math.random() * 0xffffffff | 0;
    return this.lut[d0 & 0xff] + this.lut[d0 >> 8 & 0xff] + this.lut[d0 >> 16 & 0xff] + this.lut[d0 >> 24 & 0xff] + '-' +
      this.lut[d1 & 0xff] + this.lut[d1 >> 8 & 0xff] + '-' + this.lut[d1 >> 16 & 0x0f | 0x40] + this.lut[d1 >> 24 & 0xff] + '-' +
      this.lut[d2 & 0x3f | 0x80] + this.lut[d2 >> 8 & 0xff] + '-' + this.lut[d2 >> 16 & 0xff] + this.lut[d2 >> 24 & 0xff] +
      this.lut[d3 & 0xff] + this.lut[d3 >> 8 & 0xff] + this.lut[d3 >> 16 & 0xff] + this.lut[d3 >> 24 & 0xff];
  }
}

export default new UUID();
