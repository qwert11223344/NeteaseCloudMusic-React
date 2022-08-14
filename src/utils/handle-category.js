//处理分类数据
export default function handleCategory({ categories, sub }) {
  return Object.entries(categories).map(([k, v]) => {
    const categoryItem = {
      cat: v,
      sub: sub.filter(i => i.category === +k)
    };
    return categoryItem;
  });
}
