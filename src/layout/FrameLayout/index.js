import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Styled Flex
const Flex = styled.div`
  display: flex;
  height: 100%;
  flex-direction: ${({ flexDirection }) => flexDirection || 'inherit'};
`;

// Frame Layout
const FrameLayout = ({ className, orientation, children }) => {
  const flexDirection = orientation === 'vertical' ? 'column' : 'row';
  return (
    <Flex className={className} flexDirection={flexDirection}>
      {orientation === 'vertical'
        ? children.filter(v => v !== false).map((v) => {
          const childClassName = `VerticalLayoutItem ${v.props.className}`;
          const childKey = v.props.keyval || v.props.className;
          return (
            <div key={childKey} className={childClassName}>
              {v}
            </div>
          );
        })
        : children.filter(v => v !== false).map((v) => {
          const childClassName = `VerticalLayoutItem ${v.props.className}`;
          const childKey = v.props.keyval || v.props.className;
          return (
            <div key={childKey} className={childClassName}>
              {v}
            </div>
          );
        })}
    </Flex>
  );
};
FrameLayout.defaultProps = {
  className: null,
  orientation: 'horizontal',
};
FrameLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
};

export default FrameLayout;
