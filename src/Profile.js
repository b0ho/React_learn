const data = {
  my: {
    name: 'b0ho',
    describe: 'me',
  },
  you: {
    name: 'any',
    describe: 'someone',
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않음</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.describe}</p>
    </div>
  );
};

export default Profile;
