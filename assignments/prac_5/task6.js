// INFO: Класс параллелепипеда с методами для объёма и площади поверхности
class Parallelepiped {
  constructor(width, length, height) {
    this._width = width;
    this._length = length;
    this._height = height;
  }

  getWidth() {
    return this._width;
  }

  getLength() {
    return this._length;
  }

  getHeight() {
    return this._height;
  }

  calcVolume() {
    return this._width * this._length * this._height;
  }

  calcSurfaceArea() {
    return (
      2 *
      (this._width * this._length +
        this._width * this._height +
        this._length * this._height)
    );
  }
}

export function runTask() {
  const box = new Parallelepiped(10, 15, 20);
  return [
    `Размеры: ${box.getWidth()} x ${box.getLength()} x ${box.getHeight()}`,
    `Объём: ${box.calcVolume()}`,
    `Площадь поверхности: ${box.calcSurfaceArea()}`,
  ];
}
