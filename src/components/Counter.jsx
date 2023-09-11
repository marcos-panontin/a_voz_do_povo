import propTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';

function Counter({ n }) {
  
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10, duration:700 }
  });

  const formattedNumber = number.to((n) => {
    return n.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  });

  return <animated.span>{formattedNumber}</animated.span>;
}

Counter.propTypes = {
  n: propTypes.number.isRequired,
};

export default Counter;