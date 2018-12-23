import styled from 'styled-components';
import { DebounceInput } from 'react-debounce-input';

export const Wrapper = styled.div`
  width: 900px;
  position: relative;
`;

export const TextFieldEntry = styled(DebounceInput)`
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  border: 0;
  background: none;
  color: white;
  font-size: 70px;
  outline: 0;
  width: 100%;
  overflow: hidden;
  resize: none;
  position: absolute;
  top: 0;
  left: 10px;
  z-index: 10;
  line-height: 0;

  &::placeholder {
    color: rgba(255, 255, 255, 0.2);
  }
`;

export const PreviewWrapper = styled.div`
  position: relative;
  height: 300px;
  margin-bottom: 10px;
  overflow: hidden;
`;

export const Image = styled.div`
  height: 300px;
  transform: scale(1.2);
  background: url(https://hips.hearstapps.com/roa.h-cdn.co/assets/17/18/1493919111-roa060117fea-raptor13.jpg?crop=1xw:1xh;center,top&resize=4716:*);
  background-size: cover;
  -webkit-transition: all 1s;
  transition: all 1s;
  opacity: 0;
  border-radius: 5px;
  margin-bottom: 10px;
`;
