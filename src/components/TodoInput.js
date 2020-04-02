import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import { Button, Input } from "@staccx/bento";

TodoInput.propTypes = {
  addTodo: PropTypes.func,
};
export default function TodoInput(props) {
  const { addTodo, ...inputProps } = props;
  return (
    <div>
      <TextInput
        {...inputProps}
        type="text"
        placeholder="What Do You Need To Do?"
      />
     
      </div>
  );
}

const TextInput = styled(Input)`
  height: 70px !important;
  background-color: white;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  line-height: 40px;
`;

const InputButton = styled(Button)`
  background-color: #5e9668 !important;
`;