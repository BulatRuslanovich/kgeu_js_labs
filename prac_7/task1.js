let students = {
    'gr_x' : ['st_x1', 'st_x2', 'st_x3'],
    'gr_y' : ['st_y1', 'st_y2', 'st_y3'],
    'gr_z' : ['st_z1', 'st_z2']
}

for (let key in students) {
    for (let elem of students[key]) {
        console.log(elem);
    }
}