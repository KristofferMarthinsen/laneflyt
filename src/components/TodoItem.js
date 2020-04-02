import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { CheckedIcon, UncheckedIcon } from "./Icon";


TodoItem.propTypes = {
  item: PropTypes.object,
  remove: PropTypes.func,
  setStatus: PropTypes.func,
  toggleStatus: PropTypes.func,
};
export default function TodoItem(props) {
  const { item, toggleStatus } = props;
  const Checkbox = item.checked ? CheckedIcon : UncheckedIcon;
  return (
    
        <div>
        <Checkbox />
        <Text>{item.task}</Text>
        </div>
  );
}

const Text = styled.span`
  font-size: 18px;
  line-height: 24px;
  margin-left: 10px;
  max-width: calc(100% - 24px - 10px);
`;