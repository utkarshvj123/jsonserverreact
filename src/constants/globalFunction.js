export function filteringString(main_string, ins_string, pos) {
  if (typeof pos == "undefined") {
    pos = 0;
  }
  if (typeof ins_string == "undefined") {
    ins_string = "";
  }
  return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
}

export function filterArrayRequired(array) {
  let filteredArray = [];
  array.forEach((obj) => {
    filteredArray.push(obj.start_time);
    filteredArray.push(obj.end_time);
  });
  return arrayNewObj(filteredArray);
}

export function arrayNewObj(array) {
  const newArray = [];
  array.forEach((value) => {
    if (value.indexOf("PM") > -1) {
      newArray.push({
        title: "Hello title fill",
        date: new Date(filteringString(value, " ", value.indexOf("PM"))),
      });
    } else {
      newArray.push({
        title: "Hello title fill",
        date: new Date(filteringString(value, " ", value.indexOf("AM"))),
      });
    }
  });
  return newArray;
}
