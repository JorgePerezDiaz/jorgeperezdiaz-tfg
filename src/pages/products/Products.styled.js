import styled from "styled-components";

export const ProductsContainer = styled.div`
  flex: 4;
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  color: black;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .editBtn {
    border: none;
    border-radius: 10px;
    padding: 3px 10px;
    background-color: #dbffee;
    color: #078f4e;
    cursor: pointer;
  }

  .deleteBtn {
    color: red;
    cursor: pointer;
  }
`;

export const NewProductButton = styled.button`
  margin-top: 40px;
  height: 40px;
  width: 80px;
  border: none;
  padding: 7px;
  border-radius: 10px;
  background-color: darkblue;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #1214a1;
  }
`
