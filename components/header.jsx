const style = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "10px",
};

const Header = () => {
  return (
    <header style={style}>
      <img
        width={100}
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c2047868-eb3f-45a9-84ac-a12510bfedd9/dhmwir2-41666ba6-a927-46c6-803c-5dc74550d9f1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MyMDQ3ODY4LWViM2YtNDVhOS04NGFjLWExMjUxMGJmZWRkOVwvZGhtd2lyMi00MTY2NmJhNi1hOTI3LTQ2YzYtODAzYy01ZGM3NDU1MGQ5ZjEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yYrczXTy5rDXPubb7ZwsQnSslBB56a100VTobyuJtEk"
        alt=" Next.js Logo"
      />
      <div>
        <ul className="menu">
          <li>Home</li>
          <li>Service</li>
          <li>About</li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
