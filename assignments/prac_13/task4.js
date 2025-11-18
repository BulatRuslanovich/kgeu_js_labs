// INFO: Конструктор самолетов с методами взлета и посадки
export function runTask() {
  const obj = {
    takeOff() {
      this.isFlying = true;
      return "Самолет взлетел"
    },
    land() {
      this.isFlying = false;
      return "Самолет совершил посадку"
    },
  };

  class Airplane {
    constructor(name) {
      this.name = name;
      this.isFlying = false;
    }
  }

  Object.setPrototypeOf(Airplane.prototype, obj);

  const airplane = new Airplane('Самалет');
  const statusBefore = airplane.isFlying;
  airplane.takeOff();
  const statusAfterTakeOff = airplane.isFlying;
  airplane.land();
  const statusAfterLand = airplane.isFlying;

  return JSON.stringify({
    airplane: {
      name: airplane.name,
      isFlying: airplane.isFlying,
    },
    statusBefore,
    statusAfterTakeOff,
    statusAfterLand,
    },
    null, 2);
}

