import React from "react";

function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">

        </label>
        <input
          className="form-control"
          id="Title"
          type="text"
          value={q}
          placeholder="Name of the book"
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-danger float-right"
        >
          <i class="fas fa-search"> Search</i>
        </button>
      </div>
    </form>
  );
}

export default Form;
