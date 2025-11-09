// Перебирает студентов по группам и возвращает список строк
const students = {
  gr_x: ["st_x1", "st_x2", "st_x3"],
  gr_y: ["st_y1", "st_y2", "st_y3"],
  gr_z: ["st_z1", "st_z2"],
};

function listStudents(groups = students) {
  const result = [];
  Object.keys(groups).forEach((group) => {
    groups[group].forEach((student) => result.push(`${group}: ${student}`));
  });
  return result;
}

export function runTask() {
  return listStudents();
}
