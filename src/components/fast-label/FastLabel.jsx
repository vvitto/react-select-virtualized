import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';

const configFastLabelOption = {
  context: 'menu',
};

const FastLabel = memo(({ data, setValue, isHovering, isSelected, isDisabled, isFocused, style, formatOptionLabel }) => {
  const onClickHandler = () => {
    if(!isDisabled) {
      setValue(data)
    }
  };

  const label = useMemo(() => (formatOptionLabel ? formatOptionLabel(data, configFastLabelOption) : data.label), [
    data,
    formatOptionLabel,
  ]);

  const hasFocusStyle = (isHovering || isFocused) && !isDisabled;

  return (
    <div
      className={`
      ${isDisabled ? 'fast-option-disabled' : ''}
      ${
        isSelected ? 'fast-option-selected' : hasFocusStyle ? 'fast-option-focused' : ''
      } fast-option ${data.__isNew__ ? 'fast-option-create' : ''}`}
      style={style}
      onClick={onClickHandler}
    >
      {label}
    </div>
  );
});

FastLabel.propTypes = {
  data: PropTypes.object.isRequired,
  setValue: PropTypes.func,
  isHovering: PropTypes.bool.isRequired,
  isFocused: PropTypes.bool,
  isSelected: PropTypes.bool.isRequired,
  style: PropTypes.object,
  formatOptionLabel: PropTypes.func,
};

FastLabel.defaultProps = {
  setValue: undefined,
  style: undefined,
  formatOptionLabel: undefined,
};

FastLabel.displayName = 'FastLabel';

export default FastLabel;
