import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  > p {
    width: calc(100% - 60px);
    height: calc(100% - 60px);
    border-radius: 10px;
    border: 1px dashed ${({ theme }) => theme.colors.orange};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #333;

    > svg {
      color: ${({ theme }) => theme.colors.orange};
      width: 24px;
      height: 24px;
      margin-bottom: 8px;
    }
  }
`;
