import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  opacity: ${props => (props.past ? 0.6 : 1)};
`;
export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;
export const Infor = styled.View`
  margin-left: 15px;
`;
export const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #333;
`;
export const Time = styled.Text`
  font-size: 13px;
  color: #999;
  margin-top: 4px;
`;
