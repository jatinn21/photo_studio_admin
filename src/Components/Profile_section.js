const Profile = () => {
  return (
    <div className="main_container">
      <p className="main_container_top center">
        <h1>My Profile</h1>
      </p>
      <p className="main_container_bottom ">
        <form className="center">
          <p className="admin_profile_form_field ">
            <label className="admin_profile_form_label">Name</label>
            <input
              type="text"
              className="admin_form_inputs"
              name="admin__new__name"
              placeholder="Your Name "
            />
          </p>
          <p className="admin_profile_form_field ">
            <label className="admin_profile_form_label">Current Passcode</label>
            <input
              type="number"
              className="admin_form_inputs"
              name="admin__current_passcode"
              maxLength="5"
              placeholder="Current Passcode"
            />
          </p>
          <p className="admin_profile_form_field">
            <label className="admin_profile_form_label">Change Passcode</label>
            <input
              type="number"
              className="admin_form_inputs"
              placeholder="New Passcode"
              name="admin__new__passcode"
            />
          </p>
          <input
            type="submit"
            value="Update Profile"
            className="admin_profile_form_submit_btn"
            id="admin_profile_form_submit_btn"
          />
        </form>
      </p>
    </div>
  );
};

export default Profile;
