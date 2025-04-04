import { GetServerSideProps } from 'next';

type Params = {
  slug: string;
};

export const getServerSideProps: GetServerSideProps<{ slug: string }, Params> = async (context) => {
  const { slug } = context.params as Params;
  
  return { props: { slug } };
};

type Props = {
  slug: string;
};

export default function ArticlePage({ slug }: Props) {
  return (
    <div>
      <h1>Статья: {slug}</h1>
      <p>Здесь будет контент статьи...</p>
    </div>
  );
}