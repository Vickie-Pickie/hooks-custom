import useJsonFetch from './useJsonFetch';
import PropTypes from 'prop-types';

function Fetch(props) {
  const [data, loading, error] = useJsonFetch(props.url, props.opts);

  return (
    <div>
      {
        loading && <div>Загрузка...</div>
      }
      {
        error && <div>Ошибка: { error }</div>
      }
      <div>{data.status}</div>
    </div>
  );
}

export default Fetch;

Fetch.propTypes = {
  url: PropTypes.string.isRequired,
  opts: PropTypes.string.isRequired,
};
