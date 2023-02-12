import NavBar from '@/components/NavBar';

export default function Layout({ children }) {
  // _app.js 에서 안에 Component 를 넣었으니까 children = 해당 페이지 컴포넌트
  return (
    <>
      <NavBar></NavBar>
      <div>{children}</div>
    </>
  );
}
