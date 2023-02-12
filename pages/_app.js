import NavBar from '@/components/NavBar';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  // Component 는 해당 페이지 js 컴포넌트. NextJS 는 해당 컴포넌트를 불러옴 아래의 내용과 함꼐.
  return (
    <div>
      <NavBar />
      <Component {...pageProps}></Component>
      <span>hello</span>
      <style jsx global>{`
        a {
          color: gray;
        }
      `}</style>
    </div>
  );
}
