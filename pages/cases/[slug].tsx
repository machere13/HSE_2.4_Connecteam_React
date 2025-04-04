import { GetServerSideProps } from 'next';

type Params = {
  slug: string;
};

export const getServerSideProps: GetServerSideProps<{ slug: string }> = async (context) => {
  const { slug } = context.params as Params;
  
  return { props: { slug } };
};

type Props = {
  slug: string;
};

export default function CasePage({ slug }: Props) {
  return (
    <div>
      <h1>Кейс: {slug}</h1>
      <p>Здесь будет контент кейса...</p>
    </div>
  );
}