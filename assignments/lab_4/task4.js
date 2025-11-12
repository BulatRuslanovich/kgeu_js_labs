// INFO: Описывает круг с радиусом и свойством-аксессором площади
export class Circle {
    constructor(radius) {
        this.radius = radius;

        Object.defineProperty(this, "area", {
            enumerable: true,
            configurable: false,
            get() {
                return Math.PI * this.radius ** 2;
            },
            set(value) {
                const numericArea = Number(value);

                if (!Number.isFinite(numericArea) || numericArea <= 0) {
                    throw new RangeError("Площадь должна быть положительным числом");
                }

                this.radius = Math.sqrt(numericArea / Math.PI);
                console.log(
                    `Задано новое значение для площади, равное ${numericArea}, новое значение радиуса равно ${this.radius}`
                );
            },
        });
    }
}

export function runTask() {
  const circle = new Circle(5);

  const initialArea = circle.area;
  circle.area = 50;
  const newArea = circle.area;

  return [
    `Начальный радиус: ${circle.radius.toFixed(3)}`,
    `Начальная площадь: ${initialArea.toFixed(3)}`,
    `Новый радиус после установки площади 50: ${circle.radius.toFixed(3)}`,
    `Новая площадь: ${newArea.toFixed(3)}`,
  ];
}

