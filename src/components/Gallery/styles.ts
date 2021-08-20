import styled from "styled-components";

export const Container = styled.div`
  flex: 1;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  width: 200px;
  height: 200px;

  margin-right: 8px;
`;

export const Image = styled.img`
  height: 100%;
  object-fit: contain;

  border-radius: 8px;
`;

export const ControlButton = styled.button`
  background: none;
  border: none;

  width: 50px;
  height: 50px;
  font-size: 24px;
`;
