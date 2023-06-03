import LangMain from "../components/lang/LangMain";
import languagesData from "../data/languagesData";
export default function Home({ languagesData }) {
  return <LangMain languages={languagesData} />;
}

export const getStaticProps = () => {
  return {
    props: {
      languagesData,
    },
  };
};
