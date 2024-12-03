const getData = (rowCount, colCount) => {
  const items = [];

  for (let i = 0; i < rowCount; i += 1) {
      const item = {};
      for (let j = 0; j < colCount; j += 1) {
      item[`field_${j}`] = `val_${i}_${j}`;
      }
      items.push(item);
  }

  return items;
};