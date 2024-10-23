import "./auth.css";

export default function LoginPopup({ showPopup, HideLoginPopup }) {
  const submitRegister = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const entries = Object.fromEntries(formData);
    entries.newsletter = document.getElementById("newsletter").checked;
    console.log(entries);
  };

  return showPopup ? (
    <div id="login-popup" onClick={HideLoginPopup}>
      <div>
        <h2>Register/Login</h2>
        <form onSubmit={submitRegister}>
          <label htmlFor="email">email</label>
          <input type="email" name="email" id="" placeholder="my@email.com" />
          <label htmlFor="password">password</label>
          <input type="password" name="password" id="password" />
          <div
            style={{
              border: "none",
              width: "80%",
              padding: 0,
              margin: "1rem 0 0 0",
            }}
          >
            <input type="checkbox" name="newsletter" id="newsletter" />
            <label htmlFor="newsletter">
              <small>Subscribe to our newsletter</small>
            </label>
          </div>
          <hr />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  ) : null;
}
