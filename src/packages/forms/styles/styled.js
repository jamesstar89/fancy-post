import { Tag } from 'antd';
import styled from 'styled-components';

export const FormContainer = styled.div`
  background: #e9edf3;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 4px;
`;

export const ImageList = styled.div`
  position: absolute;
  z-index: 10;
  bottom: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.9);
  padding: 20px 35px;
`;

export const TagContainer = styled.div`
  margin-bottom: 20px;
  font-size: 14px;
`;

export const TagAdd = styled(Tag)`
  background: #3470ca !important;
  border: 0 !important;
  color: white !important;
`;

export const TagRemove = styled(Tag)`
  background: white !important;
  border: 0 !important;
  color: #3470ca !important;
`;
