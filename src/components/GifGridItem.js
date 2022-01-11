const GifGridItem = ({ id, title, url }) => {
  console.log(title);

  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default GifGridItem;
