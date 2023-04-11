import Products from "./Products";

const App = () => {
  const slides = [
    { url: "./img/Tiramisu.jpg", title: "beach" },
    { url: "/img/Strawberry shortcake 3.jpg", title: "boat" },
    { url: "/img/Original Mille crepe cake 4", title: "forest" },
    { url: "http://localhost:3000/image-4.jpg", title: "city" },
    { url: "http://localhost:3000/image-5.jpg", title: "italy" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div>
      <h1>Hello monsterlessons</h1>
      <div style={containerStyles}>
        <Products slides={slides} />
      </div>
    </div>
  );
};

export default App;
