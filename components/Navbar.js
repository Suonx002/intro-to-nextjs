import Link from 'next/link';
const Navbar = () => {
  const styles = {
    display: 'flex',
    background: 'grey',
    alignItems: 'space-between'
  };

  return (
    <div style={styles}>
      <Link href='/about'>
        <a> ABout page</a>
      </Link>
      <h1>Our Navbar page</h1>
    </div>
  );
};

export default Navbar;
