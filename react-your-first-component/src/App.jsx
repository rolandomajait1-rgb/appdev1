import './App.css'


function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}
function Congratulations() {
  return (
     <h1>Good job!</h1>
  );
}


export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
      <Congratulations />
    </section>
  );
}
