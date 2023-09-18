const Images = () => {
  return (
    <div className="main_container">
      <p className="main_container_top center">
        <h1>Upload Images</h1>
      </p>
      <p className="fileUploader center">
        <div className="blackFrame"></div>
        <input type="file" className="imageInput" accept=".jpg, .jpeg, .png" />
      </p>
    </div>
  );
};

export default Images;
