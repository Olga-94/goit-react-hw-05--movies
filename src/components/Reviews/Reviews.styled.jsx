import styled from 'styled-components';

export const ReviewsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;`;

export const ReviewsItem = styled.li`
  background-color: #fff;
  margin-bottom: 20px;
  margin-right: 5px;
  padding: 10px;
  border-bottom: 2px solid grey;
  border-radius: 4px;
  box-shadow: 4px 4px 4px 3px #b9bfc4;
`;

export const AuthorName = styled.p`
  font-weight: bold;
  text-decoration: underline;
  margin-right: 10px;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.67;
  text-align: center;
  margin-bottom: 15px;
  
`;

export const AuthorContent = styled.p`
  margin-bottom: 30px;
  text-align: justify;
`;
