
import Header from './Header'
import Footer from './Footer';
// desstrure the children here
const Layout = ({children}) => {
  return (
    <>
      <Header/>
      <div className='content'>
        {children}
      </div>

      <Footer/>
    </>
  )
}

export default Layout
