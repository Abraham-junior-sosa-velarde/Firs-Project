import { Layout, Menu, Breadcrumb } from 'antd';
const {Header} = Layout;
import Link from 'next/link'


const Nav=()=>(
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" >
        <Menu.Item key="1"><Link href="./login">Iniciar Sesion</Link></Menu.Item>
        <Menu.Item key="2"><Link href="./register">Registrarse</Link></Menu.Item>
        <Menu.Item key="3"><Link href="./recordar-contrasena">Recordar contraseña</Link></Menu.Item>
        <Menu.Item key="4"><Link href="./terminos-condiciones">Terminos y condiciones</Link></Menu.Item>
      </Menu>
    </Header>
)
export default Nav


/*<Content style={{ padding: '0 50px' }}>
<Breadcrumb style={{ margin: '16px 0' }}>
  <Breadcrumb.Item>Home</Breadcrumb.Item>
  <Breadcrumb.Item>List</Breadcrumb.Item>
  <Breadcrumb.Item>App</Breadcrumb.Item>
</Breadcrumb>
<div className="site-layout-content">Content</div>
</Content>
</Layout>*/