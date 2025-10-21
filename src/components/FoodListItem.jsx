function FoodListItem({ item, onDelete }) {
  const { id, imgUrl, title, content, calorie } = item;
  const dateString = new Date(item.createdAt).toLocaleDateString();

  return (
    <div>
      <img src={imgUrl} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>{dateString}</p>
        <p>{calorie}</p>
        <button onClick={() => onDelete(id)}>삭제</button>
      </div>
    </div>
  );
}

export default FoodListItem;
