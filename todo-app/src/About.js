import qs from 'qs';

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const showDetail = query.detail === 'true';

  return (
    <div>
      <h1>About</h1>
      <p>about 입니다.</p>
      {showDetail && <p>detail 은 true</p>}
    </div>
  );
};

export default About;
