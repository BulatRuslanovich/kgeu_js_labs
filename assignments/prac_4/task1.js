// Демонстрирует основные операции с объектом студента
function mutateStudent() {
  const snapshots = [];
  const student = {};
  snapshots.push(JSON.stringify(student));

  student.first_name = "Bulat";
  snapshots.push(JSON.stringify(student));

  student.last_name = "Bikmukhametov";
  snapshots.push(JSON.stringify(student));

  student.first_name = "Unknown";
  snapshots.push(JSON.stringify(student));

  delete student.first_name;
  snapshots.push(JSON.stringify(student));

  return snapshots;
}

export function runTask() {
  return mutateStudent();
}
