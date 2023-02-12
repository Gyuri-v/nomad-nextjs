import '../styles/globals.css';
import Layout from './Layout';

export default function App({ Component, pageProps }) {
  // Component 는 해당 페이지 js 컴포넌트. NextJS 는 해당 컴포넌트를 불러옴 아래의 내용과 함꼐.
  return (
    <div>
      {/* <NavBar /> */}
      <Layout>
        <Component {...pageProps}></Component>
      </Layout>
    </div>
  );
}
