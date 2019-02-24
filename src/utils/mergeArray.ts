export const mergeArray = (source: any, merge: any, by: any) => source.map((item: any) => ({
  ...item,
  ...(merge.find((i: any) => i[by] === item[by]) || {}),
}))