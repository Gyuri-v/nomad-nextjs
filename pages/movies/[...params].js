import { useRouter } from 'next/router';

export default function Detail({ params }) {
  const router = useRouter();
  const [title, id] = params || [];
  // 개인정보보호 화면에서는 오류가 남. 백단에서 서버사이드렌더를 해주기떄문에
  // 서버에서는 아직 해당 router.query.parms 가 배열이아니닌까 -- client side render

  return (
    <div>
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
