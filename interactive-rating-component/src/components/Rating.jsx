const Rating = () => {
  return (
    // Rating state start
    <div className="rating">
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="feedback">
        <div className="feedback-puntuation">
          <label>1</label>
          <label>2</label>
          <label>3</label>
          <label>4</label>
          <label>5</label>
        </div>
        <button>Submit</button>
      </div>
    </div>
    // Rating state end
  );
};

export default Rating;
