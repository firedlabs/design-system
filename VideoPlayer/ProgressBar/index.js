import PropTypes from 'prop-types';
import { Bar, ProgressBarStyle, InputRange, Buffer } from './styles';

function ProgressBar({ max, value, onChange, buffer }) {
  const progress = (value / max) * 100;
  const progressBuffer = (buffer / max) * 100;

  return (
    <ProgressBarStyle>
      <InputRange max={max} value={value} onChange={onChange} />
      <Bar max={max} value={progress} />
      <Buffer value={progressBuffer} />
    </ProgressBarStyle>
  );
}

ProgressBar.defaultProps = {
  max: 0,
  value: 0,
};

ProgressBar.propTypes = {
  max: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  buffer: PropTypes.number.isRequired,
};

export default ProgressBar;
