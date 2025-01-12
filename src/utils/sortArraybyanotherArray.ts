export const sortArry = (array1: any, array2: any, key: any) => {
  if (!array1 || !array2 || !key) return [];

  const cloneNewArray = [...array1];

  const newArray = cloneNewArray.sort((a: any, b: any) => {
    return array2.indexOf(a[key]) - array2.indexOf(b[key]);
  });

  return newArray;
};
