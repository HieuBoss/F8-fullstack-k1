export const color = (Component) => {
  const color = "#" + Math.random().toString(16).slice(-6);
  return function MyComponent(props) {
    return (
      <div className="color" style={{ color }}>
        <Component {...props} color={color} />
      </div>
    );
  };
};
// tạo một component mới bên trong hàm khác

// hàm color => hàm bọc (cấp cao hơn)
