import styled from "styled-components";

export const CalendarTable = styled.table`
  width: 350px;
  height: 240px;
  font-size: 16px;
  border-collapse: collapse;
  td {
    width: 50px;
    height: 36px;
    text-align: center;
    cursor: pointer;
    &.today {
      background-color: #ffff76;
    }
    &.not-current-month {
      color: #757575;
    }
    &:hover {
      background-color: #e6e6e6;
    }
    &.active {
      color: #fff;
      background-color: #006edc;
    }
  }
`;

export const CalendarCaption = styled.caption`
  width: 350px;
  height: 44px;
  line-height: 44px;
  margin-bottom: 16px;
`;
export const MonthSwitch = styled.div`
  width: 44px;
  height: 44px;
  line-height: 44px;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: #e6e6e6;
  }
  &.left {
    float: left;
  }
  &.right {
    float: right;
  }
`;
