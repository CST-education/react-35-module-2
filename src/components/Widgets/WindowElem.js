import { Flipped } from 'react-flip-toolkit';
import PropTypes from 'prop-types';
export function GadgetWindow({
  unitRef,
  isOpen,
  toggleState,
  keydownHandler,
  handleClick,
  textObj: { title, content, backBtn, deleteBtn },
}) {
  return (
    <Flipped flipId="wrapper">
      <div
        ref={unitRef}
        // в тернарном операторе false заменен на undefined
        tabIndex={isOpen ? undefined : 0}
        role="dialog"
        className={`dialog animated-in`}
        onClick={toggleState}
        onKeyDown={keydownHandler}
      >
        <p className="title content">{title}</p>
        <p className="content">{content}</p>
        <button className="button secondary content" onClick={handleClick}>
          {backBtn}
        </button>
        <button className="button primary content" onClick={handleClick}>
          {deleteBtn}
        </button>
      </div>
    </Flipped>
  );
}

GadgetWindow.defaultProps = {
  textObj: {
    title: 'Delete this item?',
    content:
      'This operation will permenantly delete this item and all its dependencies. This actioncannot be undone',
    backBtn: 'Oh no, bring me back',
    deleteBtn: 'I understand, delete it',
  },
};
GadgetWindow.propTypes = {
  ref: PropTypes.any,
  isOpen: PropTypes.bool,
  toggleState: PropTypes.func,
  keydownHandler: PropTypes.func,
  handleClick: PropTypes.func,
  textObj: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    backBtn: PropTypes.string,
    deleteBtn: PropTypes.string,
  }),
};
