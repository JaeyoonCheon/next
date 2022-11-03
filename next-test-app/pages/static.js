const staticPage = (props) => {
  const { time } = props;

  return <div>{time}</div>;
};

export default staticPage;

export const getStaticProps = async () => {
  return { props: { time: new Date().toISOString(), revalidate: 3 } };
};
