import { useRouter } from 'next/router';

export default function Detail() {
  const router = useRouter();
  console.log(router); // console 에서 query 에 대한 정보가 나와있음 {id: ~~}
  return 'detail';
}
