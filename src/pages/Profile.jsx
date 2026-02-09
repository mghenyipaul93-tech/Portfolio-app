function Profile() {
  const [user, setUser] = React.useState({
    name: 'Alex Johnson',
    email: 'alex@example.com',
  });
  const [isEditing, setIsEditing] = React.useState(false);
  const [formData, setFormData] = React.useState({ ...user });

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(formData);
    setIsEditing(false);
  };

  return (
    <>
      <div className="profile">
        <h1>Profile</h1>
        
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <input
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Name"
            />
            <input
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="Email"
            />
            <div className="buttons">
              <button type="submit">Save</button>
              <button type="button" onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className="view">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <button onClick={() => setIsEditing(true)}>Edit</button>
          </div>
        )}
      </div>
    </>
  );
}

export default Profile;