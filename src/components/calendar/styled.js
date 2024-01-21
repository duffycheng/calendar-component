import styled from "styled-components";

export const CalendarTable = styled.table`
  width: 350px;
  height: 240px;
  font-size: 16px;
  td {
    width: 50px;
    height: 36px;
    text-align: right;
    cursor: pointer;
    &.today {
      background-color: #ffff76;
    }
    &.not-current-month {
      cursor: default;
      color: #757575;
    }
    &.active {
      background-color: #006edc;
    }
    &:hover {
      background-color: e6e6e6;
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
