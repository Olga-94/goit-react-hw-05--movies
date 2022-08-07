import { useState, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { Box } from 'components/Box';
import {
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQueryChange = e => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      toast.error('The search field is empty!');
      return;
    }

    onSubmit(searchQuery);
    resetState();
  };

  const resetState = () => {
    setSearchQuery('');
  };

  return (
    <>
    <Box>
    <SearchForm onSubmit={handleSubmit}>
      <SearchFormButton type="submit">
        <SearchFormButtonLabel>Search</SearchFormButtonLabel>
      </SearchFormButton>
      <SearchFormInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        name="searchQuery"
        value={searchQuery}
        onChange={handleSearchQueryChange}
      />
    </SearchForm>
    </Box>
    <Suspense>
    <Outlet />
  </Suspense>
  </>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
