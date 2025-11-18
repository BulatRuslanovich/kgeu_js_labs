// INFO: Переопределение Array.prototype.toString по новым правилам
export function runTask() {
  function formatValue(value) {
    if (Array.isArray(value)) {
      return formatArray(value);
    }
    if (typeof value === 'string') {
      return `'${value.replace(/"/g, "'")}'`;
    }
    if (typeof value === 'number' && Number.isFinite(value)) {
      return String(value);
    }
    if (typeof value === 'boolean') {
      return value ? 'true' : 'false';
    }
    if (value === null) {
      return 'null';
    }
    if (value === undefined) {
      return 'undefined';
    }
    return String(value);
  }

  function formatArray(array) {
    const items = array.map((item) => formatValue(item)).join(',');
    return `[${items}]`;
  }

  Array.prototype.toString = function toCustomString() {
    return formatArray(this);
  };

  return JSON.stringify({
    empty: [].toString(),
    numbers: [5, 6, 7].toString(),
    strings: ['Hello "World"', 77, 'JavaScript'].toString(),
    nested: [1, [2, 3]].toString(),
    mixed: [1, 2, [3, 4], [5, 6], [[7]], [8, [9]]].toString(),
    booleans: [true, false].toString(),
  },
  null, 2);
}

