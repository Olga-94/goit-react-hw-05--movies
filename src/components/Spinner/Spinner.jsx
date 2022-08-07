import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { SpinnerContainer } from './Spinner.styled';

export default function Spinner() {
  return (
    <SpinnerContainer>
      <ThreeDots type="ThreeDots" color="#bdc0c7" height={280} width={280} timeout={30000} />
    </SpinnerContainer>
  );
}
