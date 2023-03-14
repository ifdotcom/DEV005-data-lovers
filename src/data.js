// // estas funciones son de ejemplo

// export const example = () => {
//     return 'example';
//   };

//   export const anotherExample = () => {
//     return 'OMG';
//   };

//Ordenar películas A - Z

export function dataFilmsSort(arr) {
  const arrSort = arr.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
  return arrSort;
}
export function dataFilmsReverse(arr) {
  const arrSort = arr.sort((a, b) => {
    if (a.title < b.title) {
      return 1;
    }
    if (a.title > b.title) {
      return -1;
    }
    return 0;
  });
  return arrSort;
}
