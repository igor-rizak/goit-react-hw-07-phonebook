import React from 'react';
import PropTypes from 'prop-types';
import { Div, Label, Input } from './Filter.styled';
import { nanoid } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../redux/selectors';
import { changeFilter } from '../redux/filter-slice';

const filterInputId = nanoid();

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = event => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(changeFilter(normalizedValue));
  };
  return (
    <Div>
      <Label>
        Find contacts by name
        <Input
          type="text"
          value={value}
          onChange={onChange}
          id={filterInputId}
        />
      </Label>
    </Div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func,
};

export default Filter;