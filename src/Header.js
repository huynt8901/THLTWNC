// Thành phần Item
function Item({ link, content }) {
    return (
      <li>
        <a href={link}>{content}</a>
      </li>
    );
  }
  
  // Thành phần Menu
  function Menu({ list }) {
    return (
      <ul>
        {list.map((item, index) => (
          <Item key={index} link={item.url} content={item.text} />
        ))}
      </ul>
    );
  }
  
  // Thành phần Header
  function Header() {
    const list = [
      { url: '/', text: 'Home' },
      { url: '/about', text: 'About' },
      { url: '/contact', text: 'Contact' }
    ];
  
    return <Menu list={list} />;
  }
  
  // Xuất các thành phần
  export { Item, Menu };
  export default Header;
  