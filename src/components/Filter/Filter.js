import { FilterLable, FilterInput, FilterBlock } from './Filter.style';
import { useDispatch } from 'react-redux';
import { filterText } from 'store/phoneSlice';
const Filter = () => {
  const dispatch = useDispatch();

  const inputData = e => {
    const typedData = e.target.value;
    dispatch(filterText(typedData));
  };
  return (
    <FilterBlock>
      <h2>Contact</h2>
      <FilterLable>
        <h4>Find contacts by name</h4>
        <FilterInput
          type="text"
          name="filter"
          onChange={inputData}
          placeholder="filter"
        />
      </FilterLable>
    </FilterBlock>
  );
};

export default Filter;
