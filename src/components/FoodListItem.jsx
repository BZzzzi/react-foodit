function FoodListItem({ item }) {
  const { imgUrl, title, content, calorie } = item;
  const dateString = new Date(item.createdAt).toLocaleDateString();

  return (
    <div>
      <img src={imgUrl} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>{dateString}</p>
        <p>{calorie}</p>
      </div>
    </div>
  );
}

export default FoodListItem;
