import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useState } from 'react';
import { showError } from '../../actions/error-actions';
import { StateType } from '../../reducers/reducer';
import { addBookToSelectionActionCreator } from '../../actions/selection-actions';
import { BookListSelect } from './BookListSelect';

const AddBookToSelectionForm = () => {
  const selections = useSelector((state: StateType) => state.selections);
  const dispatch = useDispatch();
  const [bookId, setBookId] = useState('');
  const [selectionId, setSelectionId] = useState('');

  const onSubmit = () => {
    if (bookId && selectionId) {
      dispatch(addBookToSelectionActionCreator(bookId, selectionId));
    } else {
      dispatch(showError('Please select book and selection'));
    }
  };


  const handleBookSelect = useCallback((val: string) => setBookId(val), [])

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="selection_control_wrap"
    >
      <div className="row">
        <div className="selection_control_item col-md-4">
          <label htmlFor="bookSelect">Add book</label>
          <BookListSelect id="bookSelect" onSelect={handleBookSelect}/>
        </div>

        <div className="selection_control_item col-md-5">
          <label htmlFor="selectionSelect">to selection</label>
          <select
            className="form-select"
            id="selectionSelect"
            onChange={(e) => setSelectionId(e.target.value)}
          >
            <option value="">Choose a selection</option>
            {selections.data &&
              selections.data.map((el, i) => (
                <option key={i} value={el._id}>
                  {el.title} by {el.author}
                </option>
              ))}
          </select>
        </div>

        <div className="col-md-1 d-flex align-items-end">
          <button type="submit" className="btn btn-primary add-book-to-selection-button">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddBookToSelectionForm;
