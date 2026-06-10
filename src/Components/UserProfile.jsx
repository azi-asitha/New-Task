function UserProfile(props) {
  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <p>City: {props.city}</p>
    </div>
  );
}

export default UserProfile;